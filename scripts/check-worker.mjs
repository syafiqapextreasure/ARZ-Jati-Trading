import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import worker from '../worker/index.js';

const config = JSON.parse(await readFile(new URL('../wrangler.jsonc', import.meta.url), 'utf8'));
assert.equal(config.main, 'worker/index.js');
assert.equal(config.assets.binding, 'ASSETS');
assert.equal(config.assets.run_worker_first, true);
assert.equal(config.assets.not_found_handling, '404-page');
let assetCalls = 0;
const env = {ASSETS: {fetch: async request => {
  assetCalls++;
  return new Response(new URL(request.url).pathname, {status: request.url.includes('missing') ? 404 : 200});
}}};
for (const origin of ['http://arzbina.com','http://www.arzbina.com','https://www.arzbina.com','https://arz-jati-trading.mail-82f.workers.dev']) {
  for (const path of ['/', '/sewa-peralatan', '/projek/villa-kediaman-kolam-renang?utm_source=test&x=a%20b', '/assets/photo.webp']) {
    const response = await worker.fetch(new Request(origin + path), env);
    assert.equal(response.status, 301);
    assert.equal(response.headers.get('location'), 'https://arzbina.com' + path);
  }
}
assert.equal(assetCalls, 0, 'Aliases must redirect before asset lookup');
for (const url of ['https://arzbina.com/sewa-peralatan','https://arzbina.com/assets/photo.webp','http://localhost:8787/sewa-peralatan']) {
  const response = await worker.fetch(new Request(url), env);
  assert.equal(response.status, 200);
  assert.equal(response.headers.get('location'), null, 'Canonical URLs and local previews must not loop');
}
assert.equal((await worker.fetch(new Request('https://arzbina.com/missing'), env)).status, 404);
console.log('Worker checks passed: permanent alias redirects preserve paths/query strings; canonical assets, local previews and 404s pass through.');

import assert from 'node:assert/strict';
import {readFile,stat} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import {resolve} from 'node:path';
const root=fileURLToPath(new URL('../dist/',import.meta.url));
const xml=await readFile(resolve(root,'sitemap.xml'),'utf8');
const urls=[...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m=>m[1]);
assert.equal(new Set(urls).size,urls.length,'Duplicate sitemap URLs');
assert.ok(urls.length>=22);
const titles=new Set();
const crawlGraph=new Map();
for(const url of urls){
 const path=new URL(url).pathname;
 const html=await readFile(resolve(root,path==='/'?'index.html':path.slice(1)+'.html'),'utf8');
 const title=html.match(/<title>(.*?)<\/title>/)?.[1];assert.ok(title);assert.ok(!titles.has(title),'Duplicate page title');titles.add(title);
 assert.equal((html.match(/<h1(?:\s|>)/g)||[]).length,1,`${path}: one H1`);
 assert.ok(html.includes(`<link rel="canonical" href="${url}">`),`${path}: canonical`);
 assert.ok(html.includes('index,follow,max-image-preview:large'));
 assert.ok(!html.includes('<!--seo-head-->'));
 assert.ok(html.includes('href="/sewa-peralatan"'), `${path}: crawlable rental link in footer`);
 const schema=JSON.parse(html.match(/<script id="seo-schema" type="application\/ld\+json">(.*?)<\/script>/s)[1]);
 const business=schema['@graph'].find(x=>x['@type']==='GeneralContractor');
 assert.equal(business.address.postalCode,'16210');assert.equal(business.telephone,'+60148196216');
 for(const image of html.matchAll(/<img[^>]+src="(\/[^"?]+)"/g)){await stat(resolve(root,'.'+image[1]));}
 for(const link of html.matchAll(/href="(\/[^"?#]*)"/g)){
  const target=link[1];if(target==='/'||/\.[a-z0-9]+$/i.test(target))continue;
  await stat(resolve(root,target.slice(1)+'.html'));
 }
 crawlGraph.set(path,[...html.matchAll(/href="(\/[^"?#]*)"/g)].map(link=>link[1]));
}
const reached=new Set(['/']);
for(const path of reached){for(const target of crawlGraph.get(path)||[])if(crawlGraph.has(target))reached.add(target);}
assert.equal(reached.size,urls.length,'Every sitemap page must be reachable from the homepage through real links');
const home=await readFile(resolve(root,'index.html'),'utf8');
assert.ok(home.includes('BINA RUMAH ATAS TANAH SENDIRI'));
const services=await readFile(resolve(root,'perkhidmatan.html'),'utf8');
assert.ok(!services.includes('Ilustrasi perkhidmatan dijana AI'));
assert.ok((home.match(/href="\/sewa-peralatan"/g)||[]).length>=2, 'Homepage rental CTA and footer must be links');
assert.ok((services.match(/href="\/sewa-peralatan"/g)||[]).length>=2, 'Service rental CTA and footer must be links');
const rental=await readFile(resolve(root,'sewa-peralatan.html'),'utf8');
assert.ok(rental.includes('Cara Mendapatkan Sebut Harga Sewaan'));
const rentalGraph=JSON.parse(rental.match(/<script id="seo-schema" type="application\/ld\+json">(.*?)<\/script>/s)[1])['@graph'];
const rentalFaq=rentalGraph.find(x=>x['@type']==='FAQPage');
assert.equal(rentalFaq.mainEntity.length,4);
for(const faq of rentalFaq.mainEntity){
 assert.ok(rental.includes(faq.name), 'Structured FAQ question must be visible');
 assert.ok(rental.includes(faq.acceptedAnswer.text), 'Structured FAQ answer must match visible content');
}
assert.ok(rentalGraph.some(x=>x['@type']==='Service'));
assert.ok((await readFile(resolve(root,'privasi.html'),'utf8')).includes('noindex,follow'));
assert.ok((await readFile(resolve(root,'robots.txt'),'utf8')).includes('Sitemap: https://arzbina.com/sitemap.xml'));
assert.ok((await readFile(resolve(root,'404.html'),'utf8')).includes('noindex,follow'));
await stat(resolve(root,'favicon.ico'));await stat(resolve(root,'favicon-144.png'));
console.log(`SEO checks passed: ${urls.length} indexable pages, unique metadata, valid JSON-LD, crawlable links, local images, favicon, robots and 404.`);

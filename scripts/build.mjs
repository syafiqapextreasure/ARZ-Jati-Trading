import {spawnSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';
import {resolve} from 'node:path';
import {readFile,writeFile,mkdir} from 'node:fs/promises';
const root=fileURLToPath(new URL('../',import.meta.url));
const vite=resolve(root,'node_modules/vite/bin/vite.js');
for(const args of [['build','--configLoader','native'],['build','--ssr','src/entry-server.tsx','--outDir','.prerender','--configLoader','native']]){
 const result=spawnSync(process.execPath,[vite,...args],{cwd:root,stdio:'inherit'});
 if(result.status!==0)process.exit(result.status||1);
}
const {render,getSeo,STATIC_ROUTES,INDEXABLE_ROUTES,projectPaths,SITE_URL}=await import(new URL('../.prerender/entry-server.js',import.meta.url));
const template=await readFile(resolve(root,'dist/index.html'),'utf8');
const escape=s=>s.replaceAll('&','&amp;').replaceAll('"','&quot;').replaceAll('<','&lt;').replaceAll('>','&gt;');
const safeJson=data=>JSON.stringify(data).replaceAll('<','\\u003c');
for(const path of [...STATIC_ROUTES,...projectPaths,'/404']){
 const seo=getSeo(path);
 const head=`<title>${escape(seo.title)}</title>
<meta name="description" content="${escape(seo.description)}">
<meta name="robots" content="${seo.robots}">
<link rel="canonical" href="${seo.canonical}">
<meta property="og:title" content="${escape(seo.title)}">
<meta property="og:description" content="${escape(seo.description)}">
<meta property="og:url" content="${seo.canonical}">
<meta name="twitter:title" content="${escape(seo.title)}">
<meta name="twitter:description" content="${escape(seo.description)}">
<script id="seo-schema" type="application/ld+json">${safeJson(seo.schema)}</script>`;
 const html=template.replace('<!--seo-head-->',head).replace('<div id="root"></div>',`<div id="root">${render(path)}</div>`);
 const dest=resolve(root,'dist',path==='/'?'index.html':path.slice(1)+'.html');
 await mkdir(resolve(dest,'..'),{recursive:true});await writeFile(dest,html);
}
const xml=`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${INDEXABLE_ROUTES.map(path=>`<url><loc>${SITE_URL}${path==='/'?'/':path}</loc></url>`).join('\n')}\n</urlset>\n`;
await writeFile(resolve(root,'dist/sitemap.xml'),xml);
console.log(`Prerendered ${STATIC_ROUTES.length+projectPaths.length} pages; sitemap contains ${INDEXABLE_ROUTES.length} canonical URLs.`);

await import('./check-seo.mjs');

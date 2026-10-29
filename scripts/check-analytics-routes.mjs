import assert from 'node:assert/strict';
import {writeFile} from 'node:fs/promises';
import {fixture} from './check-analytics.mjs';
// Run after npm run build; use the exact routes/titles generated for deployment.
const {STATIC_ROUTES,projectPaths,getSeo}=await import('../.prerender/entry-server.js');
const routes=[...new Set([...STATIC_ROUTES,...projectPaths])];
const events=f=>f.browser.dataLayer.map(args=>Array.from(args)).filter(args=>args[0]==='event');
const coverage=[];
for(const path of routes){
 const direct=await fixture('G-TEST000000');
 direct.api.trackPageView(path,getSeo(path).title);
 const view=events(direct).filter(args=>args[1]==='page_view');
 assert.equal(view.length,1,`${path}: one initial pageview`);
 assert.equal(view[0][2].page_location,'https://arzbina.com'+path);
 assert.equal(view[0][2].page_title,getSeo(path).title);
 for(const placement of ['header','floating','footer','content','form']){
  direct.api.trackContactClick('whatsapp',path,placement);
 }
 const clicks=events(direct).filter(args=>args[1]==='whatsapp_click');
 assert.equal(clicks.length,5);
 assert.ok(clicks.every(args=>args[2].page_path===path&&args[2].page_title===getSeo(path).title));
 assert.equal(direct.scripts.length,1);
 coverage.push({path,title:getSeo(path).title,directPageView:'pass',whatsappPlacements:['header','floating','footer','content','form']});
}
const journey=await fixture('G-TEST000000');
for(const path of routes)journey.api.trackPageView(path,getSeo(path).title);
const views=events(journey).filter(args=>args[1]==='page_view');
assert.equal(views.length,routes.length,'Every route tracked during one SPA session');
for(let i=1;i<views.length;i++)assert.equal(views[i][2].page_referrer,views[i-1][2].page_location);
journey.api.trackPageView(routes.at(-1),getSeo(routes.at(-1)).title);
assert.equal(events(journey).filter(args=>args[1]==='page_view').length,routes.length,'Consecutive duplicate prevented');
journey.api.trackPageView('/',getSeo('/').title);
assert.equal(events(journey).filter(args=>args[1]==='page_view').length,routes.length+1,'Return to earlier page counted');
assert.equal(journey.scripts.length,1,'One tag throughout SPA navigation');
await writeFile(new URL('../.prerender/analytics-coverage.json',import.meta.url),JSON.stringify({measurementId:'mock-only',routeCount:routes.length,spaPageViews:'pass',directPageViews:'pass',coverage},null,2));
console.log(`Analytics route checks passed: ${routes.length} direct-load routes, ${routes.length} SPA route changes, return navigation and ${routes.length*5} WhatsApp placement cases. No Google requests made.`);

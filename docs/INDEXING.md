# Indexing maintenance — 30 October 2026

Search Console screenshots show 53 HTTP/www alternate URLs with correct canonicals and one canonical rental URL discovered but not yet crawled. The sitemap report shows 21 of 22 submitted pages indexed. The alternate URLs should consolidate into their HTTPS, non-www counterparts, not become independently indexed.

## Changes

- A small Worker runs before assets and permanently redirects HTTP, www and the old production workers.dev hostname to `https://arzbina.com`, preserving path and query. Local/branch preview hosts remain usable.
- Canonical requests go directly to the ASSETS binding. Existing clean URLs, static caching and real 404 status handling are retained. Do not replace this with an SPA catch-all rewrite.
- Navigation in the footer and homepage/service CTAs uses real anchor hrefs. All 22 sitemap routes are reachable from the homepage without executing navigation JavaScript.
- The rental page has location-specific metadata, practical enquiry guidance, visible FAQs and matching Service/FAQ structured data. Availability, prices, machine inventory and delivery coverage remain subject to confirmation.
- Privacy remains intentionally noindex; missing pages retain 404 and noindex. Sitemap URLs remain canonical and indexable.

## Checks

`npm run build` prerenders all 23 public pages and checks SEO and the Worker redirect behavior. `npm run lint`, `npm run check:analytics`, and `npm run check:analytics-routes` verify types and existing GA4 behavior. SEO checks include unique metadata, one H1, canonical URLs, local assets, a crawl graph of all sitemap routes, matching visible rental FAQs and structured data, robots.txt and intentional noindex pages.

## Search Console follow-up

After deployment, inspect `https://arzbina.com/sewa-peralatan`, choose **Test live URL**, then **Request indexing** if the live test succeeds. Resubmit `https://arzbina.com/sitemap.xml` in Sitemaps. Monitor the submitted-sitemap report rather than expecting all HTTP/www variants to become indexed. No removals request or robots blocking is needed for those duplicates. Google determines crawl timing and indexing; a code deployment does not itself submit an indexing request or guarantee indexing/rankings.

References: https://support.google.com/webmasters/answer/7440203 and https://developers.cloudflare.com/workers/static-assets/binding/

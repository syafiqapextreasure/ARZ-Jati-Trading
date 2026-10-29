// Consolidate production aliases before serving the prerendered static pages.
const productionHosts = new Set([
  'arzbina.com',
  'www.arzbina.com',
  'arz-jati-trading.mail-82f.workers.dev',
]);

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (productionHosts.has(url.hostname) &&
        (url.protocol !== 'https:' || url.hostname !== 'arzbina.com')) {
      url.protocol = 'https:';
      url.hostname = 'arzbina.com';
      url.port = '';
      return Response.redirect(url.toString(), 301);
    }
    // The asset binding retains clean-URL handling, caching, and real 404s.
    return env.ASSETS.fetch(request);
  },
};

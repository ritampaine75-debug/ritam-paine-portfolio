/**
 * Article — Building a Progressive Web App from scratch.
 */

export const meta = {
  slug: 'building-a-progressive-web-app-from-scratch',
  title: 'Building a Progressive Web App from Scratch',
  description:
    'What a PWA actually requires: manifest, service worker, offline caching and installability — explained the way I learned it while shipping Web Tools Hub.',
  date: '2026-09-07',
  updated: '2026-09-07',
  category: 'PWA',
  readingTime: '6 min read',
  tags: ['PWA', 'Service Workers', 'Offline', 'JavaScript'],
  relatedProjects: ['web-tools-hub', 'ritamchat'],
};

export const content = [
  ['p', 'The moment a website can be installed and opened like an app, everything about it changes for the user. I explored this properly when I built **Web Tools Hub**, a collection of browser tools that runs offline on a phone. A Progressive Web App needs three pieces: a **web manifest**, a **service worker**, and a mobile-first interface. This article walks through each one.'],
  ['h2', '1. The manifest — making the app installable'],
  ['p', 'A manifest.webmanifest is a small JSON file that tells the browser your site has an identity: a name, icons, a start URL and a theme colour.'],
  ['code', 'json', `{
  "name": "Web Tools Hub",
  "short_name": "Web Tools",
  "start_url": ".",
  "display": "standalone",
  "background_color": "#0b0d14",
  "theme_color": "#0b0d14",
  "icons": [{ "src": "icon-192.png", "sizes": "192x192", "type": "image/png" }]
}`],
  ['p', 'You reference it from your HTML with a link tag, and you should provide at least 192 and 512 pixel icons. Nothing about this is complicated — it is just easy to skip.'],
  ['h2', '2. The service worker — making it work offline'],
  ['p', 'A service worker is a script the browser runs in the background that can intercept network requests. For an offline-first tool hub I used a simple cache-first strategy for static assets.'],
  ['code', 'js', `self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => {
      return cached || fetch(event.request);
    })
  );
});`],
  ['p', 'The important idea is the lifecycle: register the worker, install it and pre-cache your shell, activate it, then serve cached assets while updating in the background. When you change your app, bump the cache name — otherwise users get the old version forever.'],
  ['h2', '3. The offline-first mindset'],
  ['p', 'A PWA is a design decision, not just a file. Every page on Web Tools Hub is dependency-free, so the pre-cached shell loads instantly and each tool works with no network. Keeping dependencies near zero is the quiet superpower of an offline app: less to cache, less to break.'],
  ['h2', 'What I actually shipped'],
  ['ul', [
    'A manifest with icons and standalone display mode.',
    'A service worker with cache-first static asset handling.',
    'A dependency-free codebase so the offline cache stays small.',
    'A mobile-first layout that works at the size of a phone screen.',
  ]],
  ['p', 'You can try the live result here: [Web Tools Hub](https://ritampaine75-debug.github.io/web-tools-hub/). If you want to see the same offline-first thinking applied to a messaging concept, [RitamChat](/projects/ritamchat) is where I keep pushing PWA behaviour further.'],
];

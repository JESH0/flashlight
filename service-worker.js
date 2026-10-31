const CACHE_NAME = 'flashlight-v1';
const ASSETS = [
  '/flashlight.html',
  '/manifest.json',
  'https://flaticon.com'
];

// फाइलहरू क्याश (Save) गर्ने
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// अफलाइन भएको बेला क्याशबाट फाइल लोड गर्ने
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});

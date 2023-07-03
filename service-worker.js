self.addEventListener('install', event => {
  console.log('Service Worker installed');
  event.waitUntil(
    caches.open('lilastore').then(cache => {
      return cache.addAll([
        'https://biswajitaich.github.io/lilastore/',
        'index.html',
        'offline.css',
        'allPageScript.js',
        'icons/no-internet-icon.png'
      ]);
    })
  );
});

self.addEventListener('activate', event => {
  console.log('Service Worker activated');
});

self.addEventListener('fetch', event => {
  console.log('Fetch event:', event);
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});

self.addEventListener('beforeinstallprompt', event => {
  event.preventDefault();
});

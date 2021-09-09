const urlsToCache = [
  'icon.png',
  'index.html',
];

self.addEventListener('install', e => {
  e.waitUntil(
      caches.open('basic-cache').then((cache) => {
        return cache.addAll(urlsToCache);
      }),
  );

  console.log('meow');
  yandex.messenger.isPanelEnabled((is_enabled) => {
    chrome.runtime.lastError ? console.log(chrome.runtime.lastError.message) :
                               console.log(is_enabled);
  });
});

self.addEventListener('fetch', e => {
  e.respondWith(
      caches.match(e.request).then((response) => {
        if (response) {
          return response;
        }
        return fetch(e.request);
      }),
  );

  console.log('meow');
  yandex.messenger.isPanelEnabled((is_enabled) => {
    chrome.runtime.lastError ? console.log(chrome.runtime.lastError.message) :
                               console.log(is_enabled);
  });
});

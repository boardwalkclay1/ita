const CACHE_NAME = "ita-arborist-v1";
const OFFLINE_URLS = [
  "/pages/index.html",
  "/assets/css/style.css",
  "/assets/js/language.js",
  "/assets/js/quiz.js",
  "/public/favicon.ico"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(OFFLINE_URLS))
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      )
    )
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => {
      return (
        cached ||
        fetch(event.request).catch(() =>
          caches.match("/pages/index.html")
        )
      );
    })
  );
});

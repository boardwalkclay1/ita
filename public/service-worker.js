// ===============================
// Ita’s Arborist Garden Service Worker
// Production‑Ready PWA Cache System
// ===============================

const CACHE_VERSION = "v4";
const CACHE_NAME = `ita-arborist-${CACHE_VERSION}`;

// Core offline shell
const OFFLINE_URLS = [
  "/index.html",
  "/pages/study-guide.html",
  "/pages/lesson.html",
  "/assets/css/style.css",
  "/assets/js/language.js",
  "/assets/js/study-guide.js",
  "/assets/js/modules/modules-index.js",
  "/public/favicon.ico"
];

// ===============================
// INSTALL — Precache core assets
// ===============================
self.addEventListener("install", (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(OFFLINE_URLS))
  );
});

// ===============================
// ACTIVATE — Clean old caches
// ===============================
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
  self.clients.claim();
});

// ===============================
// FETCH — Smart caching strategy
// ===============================
self.addEventListener("fetch", (event) => {
  const req = event.request;

  // Ignore non-GET requests (POST, PUT, DELETE)
  if (req.method !== "GET") return;

  const url = new URL(req.url);

  // Never cache API calls
  if (url.pathname.startsWith("/api/")) return;

  // Always try network first for HTML pages
  if (req.headers.get("accept")?.includes("text/html")) {
    event.respondWith(
      fetch(req)
        .then((resp) => {
          cachePut(req, resp.clone());
          return resp;
        })
        .catch(() => caches.match(req).then((c) => c || caches.match("/index.html")))
    );
    return;
  }

  // Cache‑first for static assets
  if (
    url.pathname.endsWith(".css") ||
    url.pathname.endsWith(".js") ||
    url.pathname.endsWith(".json")
  ) {
    event.respondWith(
      caches.match(req).then((cached) => {
        return (
          cached ||
          fetch(req)
            .then((resp) => {
              cachePut(req, resp.clone());
              return resp;
            })
            .catch(() => cached)
        );
      })
    );
    return;
  }

  // Stale‑while‑revalidate for images
  if (req.destination === "image") {
    event.respondWith(
      caches.match(req).then((cached) => {
        const fetchPromise = fetch(req)
          .then((resp) => {
            cachePut(req, resp.clone());
            return resp;
          })
          .catch(() => cached);

        return cached || fetchPromise;
      })
    );
    return;
  }

  // Default: try cache, then network, then fallback
  event.respondWith(
    caches.match(req).then((cached) => {
      return (
        cached ||
        fetch(req)
          .then((resp) => {
            cachePut(req, resp.clone());
            return resp;
          })
          .catch(() => cached || caches.match("/index.html"))
      );
    })
  );
});

// ===============================
// Helper: Cache writer
// ===============================
function cachePut(req, resp) {
  if (!resp || resp.status !== 200 || resp.type !== "basic") return;
  caches.open(CACHE_NAME).then((cache) => cache.put(req, resp));
}

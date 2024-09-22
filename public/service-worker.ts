import { registerRoute } from "workbox-routing";
import { NetworkFirst } from "workbox-strategies";
import { CacheableResponsePlugin } from "workbox-cacheable-response";
import { ExpirationPlugin } from "workbox-expiration";

// Declare Service Worker global scope
declare let self: ServiceWorkerGlobalScope;

// Define SyncEvent type if not available
interface SyncEvent extends Event {
  readonly tag: string;
  waitUntil(promise: Promise<unknown>): void;
}

// Cache GET requests
registerRoute(
  ({ request }) => request.method === "GET",
  new NetworkFirst({
    cacheName: "get-requests",
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new ExpirationPlugin({
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
        maxEntries: 100, // Max 100 entries
      }),
    ],
  })
);

// Handle POST requests
registerRoute(
  ({ request }) => request.method === "POST",
  async ({ request }) => {
    const clonedRequest = request.clone();
    const body = await clonedRequest.json();
    const url = clonedRequest.url;

    const cache = await caches.open("post-requests");
    const response = new Response(JSON.stringify(body), {
      headers: { "Content-Type": "application/json" },
    });

    await cache.put(url, response);

    return new Response(
      JSON.stringify({
        success: true,
        message: "Request cached and will be sent when online",
      }),
      { headers: { "Content-Type": "application/json" } }
    );
  }
);

// Use the standard Event type for event listeners
self.addEventListener("sync", (event: Event) => {
  // Type guard to check if event is SyncEvent
  if ((event as SyncEvent).tag === "sync-post-requests") {
    (event as SyncEvent).waitUntil(syncPostRequests());
  }
});

async function syncPostRequests() {
  const cache = await caches.open("post-requests");
  const requests = await cache.keys();

  await Promise.all(
    requests.map(async (request) => {
      const response = await cache.match(request);
      if (response) {
        const body = await response.json();

        await fetch(request.url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });

        await cache.delete(request);
      }
    })
  );
}

self.addEventListener("install", (event) => {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

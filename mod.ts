/// <reference path="./deployctl.d.ts" />

addEventListener("fetch", (event: FetchEvent) => {
  const response = new Response("Hello World!", {
    headers: { "content-type": "text/plain" },
  });
  event.respondWith(response);
});

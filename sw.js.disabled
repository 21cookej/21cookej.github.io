// // sw.js
// self.addEventListener("fetch", (event) => {
//   event.respondWith(
//     fetch(event.request).then((response) => {
//       if (!response.headers.get("content-type")?.includes("text/html")) {
//         return response;
//       }
//       return response.text().then((html) => {
//         const injected = html.replace(
//           "</body>",
//           `<script src="/injector.js"><\/script></body>`
//         );
//         return new Response(injected, {
//           headers: { "content-type": "text/html" },
//         });
//       });
//     })
//   );
// });

self.addEventListener('install', function(event) {
    console.log('[Service Worker] Installing Service Worker ...', event);
    event.waitUntil(
        caches.open("static")
            .then(function(cache){
                console.log("precaching");
                cache.add('/HomePage.html');
                cache.add('/');
            })
    )
  });
  self.addEventListener('activate', function(event) {
    console.log('[Service Worker] Activating Service Worker ...', event);
    return self.clients.claim();
 });
   self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
            .then(function(response) {
                if (response)
                    return response;
                else
                    return fetch(event.request);
            })
    )
  });


// // self.addEventListener('install', function(event) {
// //     console.log('[Service Worker] Installing Service Worker ...', event);
// //   });
//   self.addEventListener('activate', function(event) {
//  console.log('[Service Worker] Activating Service Worker ...', event);
//  return self.clients.claim();
//  });

// self.addEventListener('install', function(event){
//     console.log('[Service Worker] Installing Service Worker ...',
//     event.waitUntil(
//         caches.open("static")
//         .then(function(cache){
//             console.log("precaching");
//             cache.add("/responsive.css");
//             cache.add("/style.css");
//             cache.add('/');
//         })
//     ))
// });
// self.addEventListener('fetch', function(event) {
//     // console.log('[Service Worker] Fetching something ....', event);
//     // event.respondWith(fetch(event.request));
//     event.respondWith(
//         caches.match(event.request)
//         .then(function(response) {
//             if (response)
//                 return response;
//                 else
//                     return fetch(event.request);
//         })
//     );
//   });

// self.addEventListener('push', event => {
//     const notification = event.data.tetx();
//     self.registration.showNotification(notification,{});
//   });
 
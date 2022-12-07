/* eslint-disable-next-line no-redeclare */
/* global self */

import { precacheAndRoute } from 'workbox-precaching';
precacheAndRoute(self.__WB_MANIFEST);

self.__precacheManifest = [].concat(self.__precacheManifest || []);
precacheAndRoute(self.__precacheManifest, {});

self.addEventListener('push', function (event) {
  console.log('[Service Worker] Push Received.');
  console.log(`[Service Worker] Push had this data: "${event.data.text()}"`);

  let data = {};
  try {
    data = JSON.parse(event.data.text());
  } catch {
    data = {
      "text": "JSON parse problem."
    }
  }

  const title = 'J🌰 Bicycle Bell';
  const options = {
    body: data["text"],
    icon: 'https://j-nuts-bell.krueckl.de/img/icon.png',
    badge: 'https://j-nuts-bell.krueckl.de/img/icon.png'
  };


  event.waitUntil(self.registration.showNotification(title, options));

  fetch("/pushReceived", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: event.data.text()
  })
});

self.addEventListener('notificationclick', function (event) {
  console.log('[Service Worker] Notification click received.');

  event.notification.close();

  event.waitUntil(
    self.clients.openWindow('https://jazznuts.krueckl.de')
  );
});

self.addEventListener('message', (event) => {
  if (event.data && ((event.data === 'SKIP_WAITING') || (event.data.type && event.data.type === 'SKIP_WAITING'))) {
    console.log("trigger skipWaiting");
    self.skipWaiting();
  }
});



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

  const title = 'J🌰 Kalender';
  const options = {
    body: data["text"],
    icon: 'https://jazznuts.krueckl.de/img/icon.png',
    badge: 'https://jazznuts.krueckl.de/img/icon.png'
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



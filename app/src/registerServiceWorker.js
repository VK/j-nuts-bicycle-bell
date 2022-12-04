/* eslint-disable no-console, no-undef */

import { register } from 'register-service-worker';
let swRegistration = null;




// if (process.env.NODE_ENV === 'production') {
  register(`${process.env.BASE_URL}service-worker.js`, {
    ready() {
      console.log(
        'App is being served from cache by a service worker.'
      );


    },
    registered(reg) {
      console.log('Service worker has been registered.');
      swRegistration = reg;

      setTimeout(() =>
        document.dispatchEvent(new CustomEvent('swRegistered', { detail: reg })), 2000);

      setInterval(() => {
        reg.update();
      }, 1000 * 60); // e.g. checks every minute


    },
    cached() {
      console.log('Content has been cached for offline use.');
    },
    updatefound() {
      console.log('New content is downloading.');
    },
    updated(reg) {
      console.log('New content is available; please refresh.');
      document.dispatchEvent(
        new CustomEvent('swUpdated', { detail: reg.waiting })
      );
    },
    offline() {
      console.log(
        'No internet connection found. App is running in offline mode.'
      );
    },
    error(error) {
      console.error('Error during service worker registration:', error);
    }



  });
// }

export { swRegistration };
import { isDevMode } from '@angular/core';

/**
 * Returns firebase config for production vs. development
 *
 * @export
 * @class UrlConstants
 */
export class FirebaseCredentials {
  constructor() {

    if (isDevMode()) {
      //  Set development urls if is development build
      return {
        apiKey: 'AIzaSyARK9AyA55usexjvtgic8QcvJtqEUes3zk',
        authDomain: 'oli-advisory-dev.firebaseapp.com',
        databaseURL: 'https://oli-advisory-dev.firebaseio.com',
        projectId: 'oli-advisory-dev',
        storageBucket: 'oli-advisory-dev.appspot.com',
        messagingSenderId: '214883543516'
      };

    } else {

      //  Set production urls if is production build
      return {
        apiKey: 'AIzaSyBDH1hyZy-z5ls5jzppzUnOM-7hhVXjoRs',
        authDomain: 'oli-advisory.firebaseapp.com',
        databaseURL: 'https://oli-advisory.firebaseio.com',
        projectId: 'oli-advisory',
        storageBucket: 'oli-advisory.appspot.com',
        messagingSenderId: '847089941184'
      };

    }

  }

}

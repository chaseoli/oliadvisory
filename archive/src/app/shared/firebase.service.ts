// Note: Best to use firebase as a service rather than having to
// import firebase dependencies everywhere firebase is used which
// may result in larger module bundles where imported as dependency

import { Injectable } from '@angular/core';

import { FirebaseCredentials } from './constants/firebase.constant';

// Firebase imports (NOTE: use only what you need)
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// import { FirebasePhoneReCaptcha } from './helpers/firebase.phone-recaptcha';
// import { WindowService } from './window.service';
// import { Http } from '@angular/http';

@Injectable()
// export class FirebaseService extends FirebasePhoneReCaptcha {
export class FirebaseService {

    _firebase: firebase.app.App;

    constructor(
        // http: Http,
        // _window: WindowService
    ) {

        // super(http, _window);

        // console.log('init firebase service');

        this.init();
    }

    init() {

        // console.log('fbconfig: ', new FirebaseCredentials());

        this._firebase = firebase.initializeApp(new FirebaseCredentials());

        this._firebase.auth().useDeviceLanguage();
        // To apply the default browser preference instead of explicitly setting it.
        // firebase.auth().languageCode = 'en';

    }

    get app() {

        console.log('returning firebase');
        return this._firebase;

        /*
        First declare service in component constructor:
        constructor(
            private firebase: FirebaseService
        )
        {...

        // call firestore (or auth, storage, database)
        // in component method using:
        this.firebase.app.firestore().collection("users").add({
                    first: "Ada",
                    last: "Lovelace",
                    born: 1815
                });
        */

    }

    get firestore() {
        console.log('returning firebase firestore');
        const db = this._firebase.firestore();
        return db;

        /*
        // First declare service in component constructor:
            constructor(
                private firebase: FirebaseService
            )
            {...

        // call firestore (or auth, storage, database)
        // in component method using:
            this.firebase.firestore.collection("users").add({
                first: "chase",
                last: "Lovelace",
                born: 1815
            });
        */

    }

}


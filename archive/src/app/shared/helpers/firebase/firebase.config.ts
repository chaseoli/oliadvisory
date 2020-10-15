// import * as firebase from 'firebase-app';
import { FirebaseCredentials } from '../../constants/firebase.constant';

// Firebase imports (NOTE: use only what you need)
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

export class FirebaseConfig {

    constructor() {
        this.init();
    }

    init() {

        firebase.initializeApp(new FirebaseCredentials());

        firebase.auth().useDeviceLanguage();
        // To apply the default browser preference instead of explicitly setting it.
        // firebase.auth().languageCode = 'en';

    }

}

// IMPORTANT: ReCaptcha using firebase SDK only works
// when Authenticate with Firebase with a Phone Number Using JavaScript
// this is becuase when you use the Firebase SDK's
// RecaptchaVerifier object, Firebase automatically creates
// and handles any necessary client keys and secrets


/*
// To use in component first initialize the firebase service
    constructor(
            private firebase: FirebaseService
        ) { ...

// then, create a placeholder in component's
// html template for reCaptcha widget
    <!-- <div id="recaptcha-container"></div> -->

// then, init the widget from the component using the id attribute of a div in template
    initRecaptcha() {
        // this.spinner = false;
        this.firebase.renderRecaptcha('recaptcha-container')
            .then((widgetId) => {
                console.log(widgetId);
                setTimeout(() => {
                    console.log(widgetId);
                    this.spinner = false;
                    this.el.nativeElement.children["0"].scrollTop = 0
                }, 500);
            })

    }

// then, submit the request
    firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
        .then(function (confirmationResult) {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        }).catch(function (error) {
        // Error; SMS not sent
        // ...
        });

*/

// import { HttpClient } from '@angular/common/http';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { WindowService } from '../../window.service';
import { UrlConstants } from '../../constants/urls.constant';


export class FirebasePhoneReCaptcha {

    reCaptchaToken: string;
    urls: UrlConstants;

    constructor(
        // private http: HttpClient,
        private _window: WindowService
    ) { }

    // renderRecaptcha(htmlElementId: string): Promise<number> {

    //     return new Promise((resolve, reject) => {

    //         this._window.windowRef.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(htmlElementId, {
    //             'size': 'normal',
    //             'callback': (response) => {
    //                 // reCAPTCHA solved, allow signInWithPhoneNumber.
    //                 console.log('recaptcha response callback', response);
    //                 this.reCaptchaToken = response;
    //             },
    //             // 'expired-callback': () => {
    //             //     // Response expired. Ask user to solve reCAPTCHA again.
    //             //     // console.log('recaptcha expired');
    //             //     alert('reCAPTCHA expired. Please re-confirm that you are not a robot');
    //             // }
    //         });

    //         this._window.windowRef.recaptchaVerifier.verify()
    //             .then((token) => {
    //                 // console.log('recaptcha response token', token);
    //                 this.reCaptchaToken = token;
    //             });

    //         this._window.windowRef.recaptchaVerifier.render()
    //             .then((widgetId: number) => {
    //                 resolve(widgetId);
    //             });

    //     });

    // }

    // IMPORTANT: The following submitRecaptcha() won't work because
    // firebase sdk with recaptcha only works with phone auth,
    // see notes at the top of this page
    // submitRecaptcha(firestoreUriPath: string, obj: {}) {

    //     //  this.http.get(
    //     //     // this.urls.test,
    //     //     // 'https://us-central1-oli-advisory.cloudfunctions.net/api/test'
    //     //     'http://localhost:5000/oli-advisory/us-central1/api/test'
    //     // ).map(data => {
    //     //     // TODO: let user know if submission was a success or not
    //     //     console.log('test:', data)
    //     // }).subscribe();

    //     this.http.post(
    //         // this.urls.recaptcha,
    //         'http://localhost:5000/oli-advisory/us-central1/api/recaptcha',
    //         {
    //             recaptchaToken: this.reCaptchaToken,
    //             firestorePath: firestoreUriPath,
    //             data: obj
    //         }
    //     ).map(data => {
    //         // TODO: let user know if submission was a success or not
    //         console.log('recaptcha function response:', data)
    //     }).subscribe();

    // }

}

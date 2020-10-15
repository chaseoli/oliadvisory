import { isDevMode } from '@angular/core';

/**
 * Returns route urls based on environment being production vs. development
 *
 * @export
 * @class UrlConstants
 */
export class UrlConstants {
    // recaptcha: string;
    getStarted: string;
    test: string;
    yelp: string;

    constructor() {

        const envPrefix = this.apiPrefix();

        // this.recaptcha = envPrefix + 'recaptcha';
        this.getStarted = envPrefix + 'getstarted';
        this.test = envPrefix + 'test';
        this.yelp = envPrefix + 'yelp';

    }

    apiPrefix() {

        let envPrefix: string;

        if (isDevMode()) {

            //  Set development urls if is development build (run per firebase serve)
            // envPrefix = 'http://localhost:5000/oli-advisory/us-central1/api/';

            //  Set development urls if is development build (debug per google cloud function emulator)
            // envPrefix = 'http://localhost:8010/oli-advisory/us-central1/api/';

            //  Set development urls if is development build (using express server)
            envPrefix = 'http://localhost:3000/';

        } else {

            //  Set production urls if is production build
            envPrefix = 'https://us-central1-oli-advisory.cloudfunctions.net/api/';
            // see route handling config in firebase.json
            // ie: '/', so finally  "envPrefix + 'recaptcha' === '/recaptcha';

        }

        return envPrefix;
    }
}

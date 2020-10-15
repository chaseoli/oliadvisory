import * as https from 'https';
import { Constants } from '../constants';

export class Recaptcha {

    verify(recaptchaToken, recaptchaType, remoteAddress): Promise<{ success: boolean, msg: string }> {

        return new Promise((resolve, reject) => {

            // check if recaptcha token was provided
            if (
                recaptchaToken === undefined ||
                recaptchaToken === '' ||
                recaptchaToken === null
            ) {
                resolve({ 'success': false, 'msg': 'Please confirm that you are not a robot.' });
            } else {

                const constants = new Constants();

                let secretKey = '';

                if (recaptchaType === 'visible') {
                    // visible recaptcha secret key
                    secretKey = constants.recaptchaVisibleKey;
                }

                if (recaptchaType === 'invisible') {
                    // invisible recaptcha secret key
                    secretKey = constants.recaptchaInvisibleKey;
                }

                // verify url
                const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=
                    ${secretKey}&response=${recaptchaToken}&remoteip=${remoteAddress}`;

                // make request to verifyURL
                https.get(verifyUrl, (r) => {

                    r.setEncoding('utf8');

                    r.on('data', data => {

                        // console.log(data);

                        const body = JSON.parse(data as string);

                        // if not successful
                        if (body.success !== undefined && !body.success) {
                            resolve({ 'success': false, 'msg': 'Failed reCaptcha verification.' });
                        } else {

                            resolve({ 'success': true, 'msg': 'reCaptcha verification passed!' });

                        }

                    });

                });

            }

        });

    }

}

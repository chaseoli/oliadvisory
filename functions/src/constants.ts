import * as functions from 'firebase-functions';
import * as _ from 'lodash';

export class Constants {

    siteRoot: string;
    apiRoot: string;

    recaptchaVisibleKey = '6LcMaksUAAAAAD1erpbCDBT5HcwCux9SHVuU6Iyx';
    recaptchaInvisibleKey = '6LfWnEsUAAAAAHULvA8XpAH1LxW28n34iSD1gdqN';

    yelpApiKey = 'zTi5gBCYN19ZwzmrqaxhpRyu-cGV6296Ch-w-9Pa141gcqaPbtoU-sf3DDAgawur90CeHduUi-7BpGGc5I2EsVSIaogxQNL64BDdVI5f1PQZCGU7i2tWP5N4RsvGWnYx';
    yelpBusinessId = 'eWm4uk4fNY21DW-MSbr09g'; // oliphant advisory business id

    sendInBlueApiKey = "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";

    constructor() {

        const envConfig = functions.config();
        if (_.get(envConfig, 'env.build', 'development') !== 'production') {
            // Development configurations
            this.siteRoot = 'http://localhost:4200';
            this.apiRoot = 'http://localhost:3000';
            // this.apiRoot = 'http://localhost:5000/';
            // this.apiRoot = 'http://localhost:8010/';
        } else {
            // Production configurations
            this.siteRoot = 'https://oliadvisory.com';
            this.apiRoot = 'https://us-central1-oli-advisory.cloudfunctions.net/api';
        }
    }

} 

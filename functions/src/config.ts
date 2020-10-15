// node core
import * as cors from 'cors';

// 3rd party libs
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';
import * as _ from 'lodash';

export class Config {

    build: 'dev' | 'prod';

    express_app: express.Application;
    private allowedOrigins: string[];

    fs_db: FirebaseFirestore.Firestore;
    rt_db: admin.database.Database;

    constructor() {

        // log when server was started
        console.log('Started at: ', new Date + ' on ' + process.env.COMPUTERNAME);

        // create express app
        this.express_app = express();

        // set origins and firebase db
        this.setEnv();

        // body-parser - https://github.com/expressjs/body-parser
        this.express_app.use(bodyParser.json());

        // set cors
        this.express_app.use(this.corsConfig());

        // create firebase firestore ref
        const fs_db = admin.firestore();
        this.fs_db = fs_db;

        // create firebase real-time database ref
        const rt_db = admin.database();
        this.rt_db = rt_db;

    }

    setEnv() {

        // Firebase Environment Configuration
        // https://firebase.google.com/docs/functions/config-env
        // view current env variables,  terminal > `firebase functions:config:get`
        // set env variable, terminal > `firebase functions:config:set env.build=production`
        // IMPORTANT: configured environment variables are only stored using CLI in Firebase Cloud,
        // NOT in development environment ie: npm run serve.
        // Observe `console.log('env firebase config: ', config);` result in dev vs prod
        // In production firebase function 'config' = {env:{build:'production'}}
        // https://lodash.com/docs/4.17.5#get
        // _.get determines is 'env.build' is undefined and if so returns 'development'
        // so, if not production add development configurations else add production configurations

        const envConfig = functions.config();
        console.log('env firebase config: ', envConfig);

        if (_.get(envConfig, 'env.build', 'development') !== 'production') {
            // Development configurations
            this.devConfig();
        } else {
            // production configurations
            this.prodConfig(envConfig);
        }

    }

    prodConfig(envConfig: functions.config.Config) {

        this.build = 'prod';

        // cors domains to allow
        this.allowedOrigins = [
            'https://oliadvisory.com',
            'https://oli-advisory.firebaseapp.com',
            'https://oliadvisory.com/',
            'https://oli-advisory.firebaseapp.com/',
        ];

        // initialize firebase app
        admin.initializeApp(envConfig.firebase);
    }

    devConfig() {

        this.build = 'dev';

        console.log('adding development configuration');
        console.log(
            '---> Firebase-admin should be OK, running in development. ' +
            'Ignore warning: RE: "Warning, FIREBASE_CONFIG environment ' +
            'variable is missing. Initializing firebase-admin will fail" '
        );

        // // set and log server port 
        // const listener = this.express_app.listen(8888, function () {
        //     console.log('Listening on port ' + listener.address().port); //Listening on port 8888
        // });

        // not a production build, so add testing domains to cors
        this.allowedOrigins = [

            // angular app request
            'http://localhost:4200',
            'http://localhost:4200/',

            // firebase serve
            'http://localhost:5000',
            'http://localhost:5000/',

            // express app
            'http://localhost:3000',
            'http://localhost:3000/',

            // google cloud function emulator
            'http://localhost:8010',
            'http://localhost:8010/'
        ];

        // initialize firebase app
        // const serviceAccount = credentials;
        const serviceAccount = require('./../src/oli-advisory-dev-firebase-adminsdk-nh4oi-0aa18c12c4.json');

        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount),
            databaseURL: 'https://oli-advisory-dev.firebaseio.com'
        });

    }

    corsConfig(): express.RequestHandler {

        // set cors configuration for all routes
        return cors({
            origin: (origin, callback) => {
                // allow requests with no origin
                // (like mobile apps or curl requests)
                if (!origin) {
                    return callback(null, true);
                }

                if (this.allowedOrigins.indexOf(origin) === -1) {
                    const msg = 'The CORS policy for this site does not ' +
                        'allow access from the specified Origin.';
                    return callback(new Error(msg), false);
                }

                return callback(null, true);
            }
        });

    }

}
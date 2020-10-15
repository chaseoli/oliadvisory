// 3rd party libs
import * as functions from 'firebase-functions';

// classes
import { Config } from './config';
import { Yelp } from './yelp/yelp';
import { GetStarted } from './get-started/get-started';
import { Email } from './email/email';

const config = new Config();
const app = config.express_app;

const yelp = new Yelp();
const getStarted = new GetStarted(config.fs_db);
const email = new Email(config.fs_db);

// used to test if the server is working
app.get('/test', (req: any, res: any) => {
    console.log('fired test response');
    res.send('Hello from test!');
});

// used like a 'contact us' form 
app.post('/getstarted', (req: any, res: any) => {
    getStarted.create(req, res);
});

// gets yelp reviews for a business
app.get('/yelp', (req: any, res: any) => {
    yelp.reviews(req, res);
});

// used to unsubscribe from user portal
app.post('/unsubscribe', (req, res) => {
    email.unsubscribe(req.body.emailHash, req.body.mailingList, req.body.all)
        .then((data) => {
            res.send(data);
        });
});

// // used to unsubscribe directly from email unsubscribe link
// app.post('/unsubscribe/:emailHash/:mailingList', (req, res) => {
//     email.unsubscribe(req.params.emailHash, req.params.mailingList)
//         .then((data) => {
//             // return a string since this request is made directly to the api
//             res.send('We have unsubscribed you from our mailing list.');
//         });
// });

// if dev run express server on port 3000
// for better debugging experience
// goto: http://localhost:3000/test
if (config.build === 'dev') {
    console.log('starting express: on port 3000');
    app.listen(3000);
}

// set functions for firebase
export const api = functions.https.onRequest(app);


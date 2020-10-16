import * as yelp from 'yelp-fusion';
import { Constants } from '../constants';

export class Yelp {

    private apiKey: string;
    private businessId: string;
    private client: any;

    constructor() {
        // NOTE: View 'functions\node_modules\yelp-fusion\lib\index.js'
        // for all methods that can be called like "search(parameters)" for searching for a business
        // or "reviews(businessId)" for searching for a business's reviews

        // Place holder for Yelp Fusion's API Key. Grab them
        // from https://www.yelp.com/developers/v3/manage_app

        const constants = new Constants();
        this.apiKey = constants.yelpApiKey;
        this.businessId = constants.yelpBusinessId;

        this.client = yelp.client(this.apiKey);
    }

    /**
     * Searches for business details (including business id) given search parameters
     * 
     * @param {*} req 
     * @param {*} res 
     * @memberof Yelp
     */
    search(req: any, res: any) {

        const searchParams = {
            term: 'Oliphant Advisory',
            location: 'palm desert, ca'
        };

        this.client.search(searchParams).then(response => {
            const firstResult = response.jsonBody.businesses[0];
            const prettyJson = JSON.stringify(firstResult, null, 4);
            console.log(prettyJson);
            res.send(prettyJson);
        }).catch(e => {
            console.log(e);
        });


    }

    /**
     * Returns the last 3 yelp reviews for a specified business id
     * 
     * @param {*} req 
     * @param {*} res 
     * @memberof Yelp
     */
    reviews(req: any, res: any) {

        // client.reviews(businessId).then(response => {
        //     // console.log(response);
        //     res.send(response);
        // }).catch(e => {
        //     console.log(e);
        // });

        // client.business(businessId).then(response => {
        //     // console.log(response);
        //     res.send(response);
        // }).catch(e => {
        //     console.log(e);
        // });

        Promise.all([
            this.client.reviews(this.businessId),
            this.client.business(this.businessId),
            // client.search(searchRequest)
        ]).then(response => {
            // console.log(response);
            res.send(response);
        }).catch(e => {
            console.log('yelp error: ', e);
            res.send(null);
        });

    }
}

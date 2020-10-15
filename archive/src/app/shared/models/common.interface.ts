// import * as firebase from 'firebase';

export interface IAddress {

    type: 'billing' | 'shipping' | 'home' | 'work' | 'other';
    address1: string;
    address2: string;
    city: string;
    state: string;
    zip: string;
    primary: boolean;

}

export interface ISiteInfo extends IAddress {

    // long business name
    name: string;

    // short business name
    short: string;

    tagLine: string;

    email: string;

    phone: string;

    // see firestore GeoPoint
    geoLat: number;
    geoLon: number;

    // sunset_time: string;
    // tz: string;

    logo: string;
    url: string;

    hours: IHours;
    // hours_other: IHourDate[];

}

export interface IPhone {

    type: 'home' | 'mobile' | 'work' | 'other';
    number: string;
    primary: boolean;

}

// export interface INumUnit {
//     value: number;
//     unit: string; // INumUnit could potentially be used for all sorts of measures hence no enum here for lbs or kilos
// }

// export interface IFirestoreQuery {
//     fieldPath: string | firebase.firestore.FieldPath;
//     opStr: firebase.firestore.WhereFilterOp;
//     value: any;
// }

export interface IRequest {

    account: string; // id of account
    rejected: boolean;
    sent: boolean; // true means the current account sent the request, false means it was received

}

// hours of operation for day
export interface IHour {

    name: string;
    num: number; // 0 = sunday thru 6 = saturday
    start: string;
    end: string;
    closed: boolean;

}

// holidays
export interface IHourDate {

    name: string;
    date: string;
    start: string;
    end: string;
    closed: boolean;

}

export interface IHours {
    0: IHour;
    1: IHour;
    2: IHour;
    3: IHour;
    4: IHour;
    5: IHour;
    6: IHour;
}

// weekly hours.
// export interface IHours {

//     sunday: IHour;
//     monday: IHour;
//     tuesday: IHour;
//     wednesday: IHour;
//     thursday: IHour;
//     friday: IHour;
//     saturday: IHour;

// }

// // holidays
// export interface IHoursDates {

//     sunday: IHourDate;
//     monday: IHourDate;
//     tuesday: IHourDate;
//     wednesday: IHourDate;
//     thursday: IHourDate;
//     friday: IHourDate;
//     saturday: IHourDate;

// }

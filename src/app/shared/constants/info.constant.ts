// put general information about the site here:

import { ISiteInfo } from '../models/common.interface';

export const siteInfo: ISiteInfo = {
    name: 'Oliphant Advisory',
    tagLine: 'Technical Accounting + Technology',
    short: '',
    address1: '73161 Fred Waring Drive, STE 201',
    address2: '',
    city: 'Palm Desert',
    state: 'CA',
    zip: '92260',
    email: 'info@oliadvisory.com',
    geoLat: 0,
    geoLon: 0,
    hours: {
        0: {
            name: 'sunday',
            num: 0,
            start: '09:00',
            end: '05:00',
            closed: false,
        },
        1: {
            name: 'monday',
            num: 1,
            start: '09:00',
            end: '05:00',
            closed: false,
        },
        2: {
            name: 'tuesday',
            num: 2,
            start: '09:00',
            end: '05:00',
            closed: false,
        },
        3: {
            name: 'wednesday',
            num: 3,
            start: '09:00',
            end: '05:00',
            closed: false,
        },
        4: {
            name: 'thursday',
            num: 4,
            start: '09:00',
            end: '05:00',
            closed: false,
        },
        5: {
            name: 'friday',
            num: 5,
            start: '09:00',
            end: '05:00',
            closed: false,
        },
        6: {
            name: 'saturday',
            num: 6,
            start: '09:00',
            end: '05:00',
            closed: false,
        }
    },
    logo: '',
    phone: '14082902196',
    primary: true,
    type: 'work',
    url: 'www.oliadvisory.com'
};

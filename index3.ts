import 'dotenv/config';
import {differenceWith, isEqual, keys, mapValues} from 'lodash';
import {HH_PEOPLEDIGITS_COOKIE} from './constants/env';
import axios from 'axios';

(async () => {
    const requestHeaders = Object.freeze({
        "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
        "accept-language": "en-US,en;q=0.9,ru;q=0.8",
        "cache-control": "max-age=0",
        "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"100\", \"Google Chrome\";v=\"100\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-fetch-dest": "document",
        "sec-fetch-mode": "navigate",
        "sec-fetch-site": "none",
        "sec-fetch-user": "?1",
        "upgrade-insecure-requests": "1",
        "cookie": HH_PEOPLEDIGITS_COOKIE
    });

    const {data: profileData} = await axios.get<Record<string, any>>('https://peopledigits.hh.ru/profile/', {
        headers: requestHeaders
    })

    const {data: profileFullData} = await axios.get<Record<string, any>>('https://peopledigits.hh.ru/profile/full', {
        headers: requestHeaders
    })

    const mapEntries = (data: Record<string, any>) => {
        return mapValues(data, value => value === null ? 'null' : typeof value);
    };

    console.log(differenceWith(keys(profileFullData), keys(profileData), isEqual).join(', '));

    console.log(mapEntries(profileData))
    console.log(mapEntries(profileFullData))
})()

export {};

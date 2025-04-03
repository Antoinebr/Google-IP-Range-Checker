const axios = require('axios');
const fs = require('fs');


const specialCrawlers = `https://developers.google.com/search/apis/ipranges/special-crawlers.json`;

const googleBot = `https://developers.google.com/static/search/apis/ipranges/googlebot.json`;

const userTriggeredFetchers = `https://developers.google.com/static/search/apis/ipranges/user-triggered-fetchers.json`;

const userTriggeredFetchersGoogle = `https://developers.google.com/static/search/apis/ipranges/user-triggered-fetchers-google.json`;

(async () => {

    

    const crawlers = await axios(userTriggeredFetchersGoogle);

    const ipRangeToAdd = [];
    
    for ( const ipRange of crawlers.data.prefixes){

        const ip = ipRange.ipv6Prefix ? ipRange.ipv6Prefix : ipRange.ipv4Prefix;

        ipRangeToAdd.push(ip);
    }

    console.log(ipRangeToAdd.join('\n'));

    fs.writeFileSync('')



})(); 
const axios = require('axios');
const fs = require('fs');


const googleIpsGroups = [`https://developers.google.com/search/apis/ipranges/special-crawlers.json`, `https://developers.google.com/static/search/apis/ipranges/googlebot.json`, `https://developers.google.com/static/search/apis/ipranges/user-triggered-fetchers.json`, `https://developers.google.com/static/search/apis/ipranges/user-triggered-fetchers-google.json`];

(async () => {


    for (const googleIps of googleIpsGroups) {

        const crawlers = await axios(googleIps);

        const ipRangeToAdd = [];

        for (const ipRange of crawlers.data.prefixes) {

            const ip = ipRange.ipv6Prefix ? ipRange.ipv6Prefix : ipRange.ipv4Prefix;

            ipRangeToAdd.push(ip);
        }

        //console.log(ipRangeToAdd.join('\n'));

        const fileName = googleIps.split('/').slice(-1)[0].split('.')[0];

    
        fs.writeFileSync(`./${fileName}.log`,ipRangeToAdd.join('\n'));


    }


})();
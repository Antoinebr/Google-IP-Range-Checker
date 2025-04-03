const fs = require('fs');

const ipRangeCheck = require('ip-range-check');

const googleBotsRange = fs.readFileSync('googleBots.log','utf8').split('\n');

const commons = fs.readFileSync('commons.log','utf8').split('\n');



const userTriggeredFetchers = fs.readFileSync('userTriggeredFetchers.log','utf8').split('\n');

const userTriggeredFetchersGoogle = fs.readFileSync('userTriggeredFetchersGoogle.log','utf8').split('\n');


const ipToCheck = "66.249.84.12";



console.log(`Found in googleBots ?  `,ipRangeCheck(ipToCheck,googleBotsRange));

console.log(`Found in commons ?  `, ipRangeCheck(ipToCheck,commons));

console.log(`Found in userTriggeredFetchers ?  `,ipRangeCheck(ipToCheck,userTriggeredFetchers));

console.log(`Found in userTriggeredFetchersGoogle ?  `, ipRangeCheck(ipToCheck,userTriggeredFetchersGoogle));




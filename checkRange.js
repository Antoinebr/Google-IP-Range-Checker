const fs = require('fs');
const ipRangeCheck = require('ip-range-check');


// Read the IP from command line arguments
const ipToCheck = process.argv[2];

if (!ipToCheck) {
    console.error("Usage: node checkRange.js <IP_ADDRESS>");
    process.exit(1); // Exit if no IP is provided
}

// const ipToCheck = "66.249.84.12";


const googleBotsRange = fs.readFileSync('googlebot.log', 'utf8').split('\n');

const commons = fs.readFileSync('special-crawlers.log', 'utf8').split('\n');

const userTriggeredFetchers = fs.readFileSync('user-triggered-fetchers.log', 'utf8').split('\n');

const userTriggeredFetchersGoogle = fs.readFileSync('user-triggered-fetchers-google.log', 'utf8').split('\n');



console.log(`Found in googleBots ?  `, ipRangeCheck(ipToCheck, googleBotsRange));

console.log(`Found in commons ?  `, ipRangeCheck(ipToCheck, commons));

console.log(`Found in userTriggeredFetchers ?  `, ipRangeCheck(ipToCheck, userTriggeredFetchers));

console.log(`Found in userTriggeredFetchersGoogle ?  `, ipRangeCheck(ipToCheck, userTriggeredFetchersGoogle));
# Google IP Range Checker

This project provides a simple way to check if a given IP address belongs to Google's known IP ranges for crawlers and fetchers. It consists of two scripts:

- `getIps.js`: Fetches the latest Google IP ranges and stores them in local log files.
- `checkRange.js`: Checks if a given IP is within the downloaded IP ranges.

## Installation

### Prerequisites
- Node.js installed on your system

### Setup
1. Clone this repository or copy the scripts.
2. Install the required dependencies by running:
   ```sh
   npm install
   ```

## Usage

### Step 1: Fetch Google IP Ranges
Run the following command to download the latest Google IP ranges:
```sh
node getIps.js
```
This will generate four log files:
- `googlebot.log`
- `special-crawlers.log`
- `user-triggered-fetchers.log`
- `user-triggered-fetchers-google.log`

### Step 2: Check if an IP is in Google's Ranges
To check if a specific IP belongs to Google's known ranges, run:
```sh
node checkRange.js <IP_ADDRESS>
```
Example:
```sh
node checkRange.js 66.249.84.12
```

The script will output whether the IP is found in each of the Google categories:
- Googlebot
- Special crawlers
- User-triggered fetchers
- User-triggered fetchers (Google)

### Example Output
```
Found in googleBots ?  true
Found in commons ?  false
Found in userTriggeredFetchers ?  false
Found in userTriggeredFetchersGoogle ?  true
```

## Notes
- Ensure you run `getIps.js` periodically to keep the IP range logs up to date.
- If the script is unable to fetch the latest IP ranges, check your internet connection and try again.

## License
This project is provided as-is with no warranties. Use at your own risk.


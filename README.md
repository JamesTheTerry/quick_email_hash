# Quick Email Hash
Hash those emails! Now featuring SHA-256!

## Setup

1. Clone down this repo
2. Have [Node 10.x.x](https://nodejs.org/en/) installed on your local machine, as well as NPM. [Node Version Manager](https://github.com/nvm-sh/nvm) is my favorite way of installing Node.
3. Run `npm install`

## Run

Inside `hasher.js` you can modify the `main` function call to what you want to hash and where you want it to output. This is built to take in a csv that has the column header `Email Address`. It can have any other columns or no other columns, it just needs `Email Address`.

Once you've modified your filepaths, run `npm start` from Terminal. You should get a csv file with the hashed emails.

## Limitations

This reads and saves files synchronously. It can handle 50,000 rows on a MacBook Pro with no issue, but your experience may vary.

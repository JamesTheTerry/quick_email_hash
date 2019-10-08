const crypto = require('crypto');
const fs = require('fs');
const Papa = require('papaparse');

const createHash = (value_to_hash) => {
  if (typeof value_to_hash !== 'string') {
    console.error('No usable value was passed');
    throw error;
  } else {
    const hash = crypto.createHash('sha256').update(value_to_hash, 'binary').digest('hex');
    return hash;
  }
}

const main = (inputFilepath, outputFilepath) => {
  const inputData = fs.readFileSync(inputFilepath, 'utf8');
  const parsedData = Papa.parse(inputData, { header: true, skipEmptyLines: true }).data
  const hashedEmails = parsedData.map(row => {
    return { hashed_email: createHash(row['Email Address']) };
  });
  const csvOutputString = Papa.unparse(hashedEmails);
  fs.writeFileSync(outputFilepath, csvOutputString);
  console.log('done')
}

main('./samples/input.csv', './samples/output.csv');

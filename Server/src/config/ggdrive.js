const { google } = require('googleapis');
const path = require('path');
const fs = require('fs');

// Load client secrets from a local file.
const rawdata = fs.readFileSync(path.join(__dirname, 'ggconfig.json'));
const credentials = JSON.parse(rawdata);

const clientEmail = credentials.client_email;
const privateKey = credentials.private_key;
const clientID = credentials.client_id;

const jwtClient = new google.auth.JWT(
  clientEmail,
  null,
  privateKey,
  ['https://www.googleapis.com/auth/drive'],
  null
);

jwtClient.authorize(function (err, tokens) {
  if (err) {
    console.log(err);
    return;
  } else {
    console.log("Successfully connected!");
  }
});

const drive = google.drive({ version: 'v3', auth: jwtClient });
module.exports = drive

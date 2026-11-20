const url = require('url');
const helpers = require('surge/lib/util/helpers');
const localCreds = require('surge/lib/util/creds');
const surgeSDK = require('surge-sdk');

const email = 'sanjarbek.portfolio.it@gmail.com';
const password = 'SanjarbekIT2026!Secure';
const endpoint = url.parse('https://api.surge.sh');

console.log('Authenticating with Surge...');
helpers.fetchToken(endpoint)(email, password, function (error, creds) {
  if (error) {
    console.error('Auth error:', error);
    process.exit(1);
  }
  console.log('Surge Auth Success! Token:', creds.token ? 'Acquired' : 'None');
  localCreds(endpoint).set(email, creds.token);

  // Now deploy via surge CLI or surge-sdk
  const sdk = surgeSDK({ endpoint: endpoint.format() });
  console.log('Ready to publish domain.');
});


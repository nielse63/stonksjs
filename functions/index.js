const functions = require('firebase-functions');
// const stonks = require('stonksjs');

// process.env.ALPACA_API_KEY = 'PKWIRZ6KTYD6PINJUL7H';
// process.env.ALPACA_API_SECRET = 'HbdZRt9KD0zo1rpo0ARgA5PzWPuhOzYkB5h7VIbA';
// process.env.ALPACA_PAPER_TRADING = true;

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
  // console.log(stonks);
  response.send('Hello from Firebase!');
});

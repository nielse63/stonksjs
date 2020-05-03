const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.trade = functions.https.onRequest(async (request, response) => {
  const stonks = require('stonksjs');
  try {
    await stonks();
    response.send('Complete');
  } catch (error) {
    response.send(error).status(500);
  }
});

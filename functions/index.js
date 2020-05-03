const functions = require('firebase-functions');
const isWeekend = require('date-fns/isWeekend');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.trade = functions.pubsub
  .schedule('every 30 minutes from 09:30 to 15:30')
  .timeZone('America/New_York')
  .onRun(async () => {
    if (isWeekend(new Date())) {
      return null;
    }
    process.env.ALPACA_API_KEY = functions.config().alpaca.key;
    process.env.ALPACA_API_SECRET = functions.config().alpaca.secret;

    if (!process.env.ALPACA_API_KEY || !process.env.ALPACA_API_SECRET) {
      throw new Error('env vars ALPACA_API_KEY or ALPACA_API_SECRET missing');
    }

    const stonks = require('stonksjs');
    try {
      await stonks();
    } catch (error) {
      console.error(error);
    }
    return null;
  });

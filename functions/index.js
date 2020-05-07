const functions = require('firebase-functions');
const isWeekend = require('date-fns/isWeekend');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.initTrade = functions.pubsub
  .schedule('every 5 minutes from 09:30 to 15:30')
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

// Take the text parameter passed to this HTTP endpoint and insert it into the
// Realtime Database under the path /messages/:pushId/original
exports.tradingViewWebook = functions.https.onRequest(async (req, res) => {
  // console.log({ req });
  res.json({ messge: 'success', request: req });
});

const functions = require('firebase-functions');
const isWeekend = require('date-fns/isWeekend');
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors({ origin: true }));

app.post('/webhook', (req, res) => {
  res.json(req.body);
});

// Take the text parameter passed to this HTTP endpoint and insert it into the
// Realtime Database under the path /messages/:pushId/original
exports.tradingViewWebhook = functions.https.onRequest(app);


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.initTrade = functions.pubsub
  .schedule('every 1 hour from 09:30 to 15:55')
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

require('dotenv').config();
const Alpaca = require('@alpacahq/alpaca-trade-api');

let alpaca;
if (!alpaca) {
  alpaca = new Alpaca({
    keyId: process.env.ALPACA_API_KEY,
    secretKey: process.env.ALPACA_API_SECRET,
    paper: process.env.ALPACA_PAPER_TRADING,
  });
}

module.exports = alpaca;

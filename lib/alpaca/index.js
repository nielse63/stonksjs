require('dotenv').config();
const Alpaca = require('@alpacahq/alpaca-trade-api');

module.exports = new Alpaca({
  keyId: process.env.ALPACA_API_KEY,
  secretKey: process.env.ALPACA_API_SECRET,
  paper: process.env.ALPACA_PAPER_TRADING,
});

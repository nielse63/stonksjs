require('../../config/env');
const Alpaca = require('@alpacahq/alpaca-trade-api');

const config = {
  keyId: process.env.ALPACA_API_KEY,
  secretKey: process.env.ALPACA_API_SECRET,
};

if (process.env.ALPACA_PAPER_TRADING !== 'false') {
  config.paper = true;
}


module.exports = new Alpaca(config);

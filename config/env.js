require('dotenv').config();
const validateOptions = require('../lib/helpers/validateOptions');

if (process.env.ALPACA_PAPER_TRADING === undefined) {
  process.env.ALPACA_PAPER_TRADING = true;
}

validateOptions(process.env, ['ALPACA_API_KEY', 'ALPACA_API_SECRET']);

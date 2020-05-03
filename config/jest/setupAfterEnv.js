require('dotenv').config();

process.env.ALPACA_PAPER_TRADING = true;
process.env.ALPACA_API_KEY = process.env.TEST_ALPACA_API_KEY;
process.env.ALPACA_API_SECRET = process.env.TEST_ALPACA_API_SECRET;

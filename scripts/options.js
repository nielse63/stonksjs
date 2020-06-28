#!/usr/bin/env node
/**
 *  - Five minutes after market open:
 *      - Retrieve options contracts with the highest open interest from Yahoo! Finance, filter by calls
 *      - Retrieve the Robinhood user's portfolio and get their cash balance
 *      - Buy stock in the companies found in the first query
 *  - Five minutes before market close:
 *      - Sell all Robinhood user positions
 *
 * @author Torrey Leonard
 *
 */

// Dependencies
const env = require('../config/env');
const path = require('path');
const os = require('os');
const algotrader = require('algotrader');

const { Query } = algotrader.Data;
const { Scheduler } = algotrader.Algorithm;

const { Robinhood } = algotrader;
const { Order } = Robinhood;
const { Instrument } = Robinhood;

// Function to run daily on market open
async function open() {
  console.log('running highest-open interest options script');
  const options = await Query.getHighestOpenInterest(20);
  const tradableOptions = options.filter((option) => option.shortName.includes('call')
    && !option.underlyingSymbol.includes('^'));
  const instruments = [];
  for (const option of tradableOptions) {
    const instrument = await Instrument.getBySymbol(option.underlyingSymbol);
    instruments.push(instrument);
  }
  const myAccount = new Robinhood.User(
    env.ROBINHOOD_USERNAME,
    env.ROBINHOOD_PASSWORD,
    env.ROBINHOOD_DEVICE_TOKEN,
    {
      doNotSaveToDisk: false,
      serializedUserFile: path.resolve(os.tmpdir(), 'stonks-user.json'),
    },
  );
  await myAccount.authenticate();
  const slicedInstrument = instruments.slice(0, 3);
  const instrumentCount = slicedInstrument.length;
  const totalBuyingPower = await myAccount.getBuyingPower(); // Get buying power for the user
  const buyingPower = totalBuyingPower / 2;
  const amountPerShare = buyingPower / instrumentCount;
  for (const instrument of slicedInstrument) {
    const quote = await instrument.getQuote(myAccount);
    const lastPrice = quote.getLast();
    const quantity = (amountPerShare / lastPrice) - 1;
    const order = new Order(myAccount, { // Create a new order using available buying power
      instrument,
      quote,
      type: 'market',
      timeInForce: 'gfd',
      trigger: 'immediate',
      quantity: parseFloat(quantity).toFixed(2),
      side: 'buy',
    });
    await order.submit();
  }
}

const close = async () => { // Run every day on market close
  const myAccount = new Robinhood.User(
    env.ROBINHOOD_USERNAME,
    env.ROBINHOOD_PASSWORD,
    env.ROBINHOOD_DEVICE_TOKEN,
    {
      doNotSaveToDisk: false,
      serializedUserFile: path.resolve(os.tmpdir(), 'stonks-user.json'),
    },
  ); // Create and login user
  await myAccount.authenticate();

  const portfolio = myAccount.getPortfolio(); // Get user's portfolio
  portfolio.sellAll(); // Sell all positions
};

// Scheduler
const scheduler1 = new Scheduler(open);
scheduler1.onMarketOpen(1000 * 60 * 5);

const scheduler2 = new Scheduler(close);
scheduler2.onMarketClose(1000 * 60 * 5 * -1);

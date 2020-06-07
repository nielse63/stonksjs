// require('dotenv').config();
const env = require('../config/env');

const algotrader = require('algotrader');
const { formatISO, toDate } = require('date-fns');
const Alpaca = require('@alpacahq/alpaca-trade-api');
const dataForge = require('data-forge');
const _ = require('lodash');
require('data-forge-indicators');
const { backtest, analyze } = require('grademark');
const getMovers = require('../scripts/scrape-movers');

const debug = (...args) => {
  console.log(...args);
};

// api docs: https://github.com/torreyleonard/algotrader/blob/master/docs/ROBINHOOD.md
const { Robinhood } = algotrader;
const {
  User,
  Order,
  Instrument,
} = Robinhood;
const MAX_SERIES_INTERVALS = 100;
const SMA_INTERVALS = {
  fast: 20,
  slow: 50,
};
const alpaca = new Alpaca({
  keyId: env.ALPACA_API_KEY,
  secretKey: env.ALPACA_API_SECRET,
  paper: env.ALPACA_PAPER_TRADING,
  usePolygon: false,
});
let rhUser = new User(
  env.ROBINHOOD_USERNAME,
  env.ROBINHOOD_PASSWORD,
  env.ROBINHOOD_DEVICE_TOKEN,
  {
    doNotSaveToDisk: false,
    serializedUserFile: null,
  },
);

/**
 1. authenticate w/ broker
 2. get current portfolio
 3. run strategy against cuirent portfolio, selling if necessary
 3. get buying power
 4. get list of new stocks to test
 5. backtest new stocks w/ current buying power
 6. based on results, buy new stocks
 */

const cancelOpenOrders = async (user) => {
  const output = await user.cancelOpenOrders();
  return output;
};

const getBuyingPower = async (user) => {
  const buyingPower = await user.getBuyingPower();
  return buyingPower;
};

const parseBars = (barsArray) => {
  const series = new dataForge.DataFrame(barsArray)
    .transformSeries({
      startEpochTime: (value) => toDate(value * 1000),
    })
    .setIndex('startEpochTime')
    .renameSeries({
      startEpochTime: 'time',
      openPrice: 'open',
      highPrice: 'high',
      lowPrice: 'low',
      closePrice: 'close',
    });

  const smaFast = series
    .deflate((bar) => bar.close)
    .sma(SMA_INTERVALS.fast);
  const smaSlow = series
    .deflate((bar) => bar.close)
    .sma(SMA_INTERVALS.slow);

  return series
    .withSeries('smaFast', smaFast)
    .skip(SMA_INTERVALS.fast)
    .withSeries('smaSlow', smaSlow)
    .skip(SMA_INTERVALS.slow)
    .toArray();
};

const getAllBars = async (symbols) => {
  debug('getting symbols');
  const barsRaw = await alpaca.getBars(
    'day',
    symbols,
    { limit: MAX_SERIES_INTERVALS },
  );
  const output = Object.entries(barsRaw).reduce((object, [symbol, bars]) => {
    const parsedBars = parseBars(bars);
    return {
      ...object,
      [symbol]: parsedBars,
    };
  }, {});
  return output;
};

const strategy = {
  entryRule: (enterPosition, args) => {
    if (args.bar.smaFast > args.bar.smaSlow) { // Buy when price is below average.
      enterPosition();
    }
  },
  exitRule: (exitPosition, args) => {
    if (args.bar.smaFast < args.bar.smaSlow) {
      exitPosition(); // Sell when price is above average.
    }
  },
  stopLoss: (args) => args.entryPrice * (5 / 100),
};

const runBacktest = (barsObject, startingCapital) => {
  const output = Object.entries(barsObject).reduce((object, [symbol, bars]) => {
    const lastBar = _.last(bars);
    const { smaFast, smaSlow } = lastBar;
    if (smaFast < smaSlow) {
      return {
        ...object,
        [symbol]: {
          bars,
          trades: [],
          analysis: {},
          shouldBuy: false,
          shouldSell: true,
        },
      };
    }

    const inputSeries = new dataForge.DataFrame(bars);
    const trades = backtest(strategy, inputSeries);
    const analysis = analyze(startingCapital, trades);
    const shouldBuy = analysis.profitPct > 20;
    return {
      ...object,
      [symbol]: {
        bars,
        trades: trades.toArray(),
        analysis,
        shouldBuy,
        shouldSell: false,
      },
    };
  }, {});
  return output;
};

const executeBuys = async (barsObject, buyingPower) => {
  Object.entries(barsObject)
    .forEach(async ([symbol, data]) => {
      const { shouldBuy } = data;
      if (!shouldBuy) return;
      const instrument = await Instrument.getBySymbol(symbol);
      const quote = await instrument.getQuote(rhUser);
      const close = quote.getLast();
      const quantity = Math.floor((buyingPower / quote.getLast()));
      debug(`buying ${quantity} shares of ${symbol} @ ${close}`);
      const order = new Order(rhUser, {
        instrument,
        quote,
        type: 'market',
        timeInForce: 'gfd',
        trigger: 'immediate',
        quantity,
        side: 'buy',
      });
      await order.submit();
    });
};

const executeSell = async () => {
  const portfolio = await rhUser.getPortfolio();
  console.log(portfolio);
  const symbols = portfolio.getSymbols();
  if (!symbols.length) {
    debug('no existing positions to backtest');
    return;
  }
  const buyingPower = await getBuyingPower(rhUser);
  const bars = await getAllBars(symbols);
  const barsObject = runBacktest(bars, buyingPower);
  Object.entries(barsObject)
    .forEach(async ([symbol, { shouldSell }]) => {
      if (!shouldSell) return;
      const instrument = await Instrument.getBySymbol(symbol);
      const quote = await instrument.getQuote(rhUser);
      const quantity = portfolio.getQuantity(symbol);
      debug(`selling ${quantity} shares of ${symbol}`);
      const order = new Order(rhUser, {
        instrument,
        quote,
        type: 'market',
        timeInForce: 'gfd',
        trigger: 'immediate',
        quantity,
        side: 'sell',
      });
      await order.submit();
    });
};

const run = async () => {
  try {
    debug(`running sma @ ${formatISO(new Date())}`);
    const clock = await alpaca.getClock();
    if (!clock.is_open) {
      debug(`market not open - next open ${clock.next_open}`);
      return;
    }
    rhUser = await rhUser.authenticate();
    debug('cancelling open orders');
    await cancelOpenOrders(rhUser);
    const buyingPower = await getBuyingPower(rhUser);
    await executeSell();

    const newStocks = await getMovers();
    const initialCapital = buyingPower / 10;
    const newStockSymbols = newStocks
      .slice(0, 10)
      .filter(({ price }) => price < initialCapital)
      .map(({ symbol }) => symbol);
    const symbols = newStockSymbols.filter(Boolean);
    const backtestCapital = buyingPower / symbols.length;
    const allBars = await getAllBars(symbols);
    const backtestResults = runBacktest(allBars, backtestCapital);
    // trade
    const buySymbolQty = Object.values(backtestResults)
      .filter(({ shouldBuy }) => shouldBuy).length;
    const buyCapital = buyingPower / buySymbolQty;
    await executeBuys(backtestResults, buyCapital);
    debug(`success ${formatISO(new Date())}`);
  } catch (error) {
    console.error(error);
  }
};

module.exports = run;

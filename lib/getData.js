// gets the data for all assets we plan to trade
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


const MAX_SERIES_INTERVALS = 100;
const SMA_INTERVALS = {
  fast: 5,
  slow: 12,
};
const alpaca = new Alpaca({
  keyId: env.ALPACA_API_KEY,
  secretKey: env.ALPACA_API_SECRET,
  paper: env.ALPACA_PAPER_TRADING,
  usePolygon: false,
});

const setIndicatorValues = (dataFrame, indicators = []) => {
  indicators.forEach((indicator) => {
    const {label, method, value} = indicator;
    const indicatorSeries = dataFrame
    .deflate((bar) => bar.close)
    [method](value);
    dataFrame
    .withSeries(label, indicatorSeries)
    .skip(value);
  })
  
  return dataFrame;
};

const parseBars = (symbol, df) => {
  const dfSeries = df
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

  return dfSeries;
};

const getAllBars = async (symbols = [], indicators = []) => {
  debug('getting symbols');
  const barsObject = await alpaca.getBars(
    'day',
    symbols,
    { limit: MAX_SERIES_INTERVALS },
  );
  
  const output = Object.entries(barsObject).reduce((object, [symbol, bars]) => {
    const df = new dataForge.DataFrame(bars);
  const dfParsed = parseBars(df);
  const dfIndicators = setIndicatorValues(dfParsed, indicators);
  const series = dfIndicators.toArray();
  
  return {
    ...object,
    [symbol]: series,
  }, {});
  return output;
};

const run = async (symbols, indicators = []) => {
  try {
    const allBars = await getAllBars(symbols);
    return allBars;
  } catch (error) {
    console.error(error);
  }
};

module.exports = run;

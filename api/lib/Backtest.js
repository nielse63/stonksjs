const df = require('data-forge');
require('data-forge-indicators');
const _ = require('lodash');
const { backtest, analyze } = require('grademark');
const { toDate } = require('date-fns');
const Asset = require('./Asset');

const { DataFrame } = df;

const smaStrategy = ({ firstKey, lastKey }) => {
  const firstBarKey = firstKey === lastKey ? 'close' : firstKey;
  return {
    entryRule: (enterPosition, { bar }) => {
      if (bar[firstBarKey] > bar[lastKey]) { // Buy when price is below average.
        enterPosition();
      }
    },
    exitRule: (exitPosition, { bar }) => {
      if (bar[lastKey] > bar[firstBarKey]) {
        exitPosition();
      }
    },
    stopLoss: ({ entryPrice }) => entryPrice * (5 / 100),
  };
};

class Backtest extends Asset {
  static indicators = ['sma'];

  constructor(...args) {
    super(...args);

    this.startingCapital = 10000;
    this.indicator = '';
    this.periods = [];
    this.data = [];
    this.keys = [];
    this.series = null;
  }

  createMetaObject() {
    return {
      startingCapital: this.startingCapital,
      symbol: this.symbol,
      indicator: this.indicator,
      periods: this.periods,
    };
  }

  async _fetchBars() {
    const response = await this.alpaca.getBars(
      this.interval,
      this.symbol,
      { limit: Asset.MAX_HISTORY_COUNT },
    );
    const history = response[this.symbol];
    return history;
  }

  _createSeries() {
    const series = new DataFrame(this.data)
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
    return series;
  }

  _createKeys() {
    const keys = this.periods
      .map((value) => `${this.indicator} (${value})`);
    const firstKey = _.first(keys);
    const lastKey = _.last(keys);
    return { keys, firstKey, lastKey };
  }

  _createSMASeries = (period, i) => {
    const { keys } = this._createKeys();
    const key = keys[i];
    const movingAverage = this.series
      .deflate((bar) => bar.close)
      .sma(period);
    this.series = this.series
      .withSeries(key, movingAverage)
      .skip(period);
  }

  backtest() {
    const tradeSeries = backtest(this.strategy, this.series);
    const analysis = analyze(this.startingCapital, tradeSeries);
    const trades = tradeSeries.toArray();
    return { analysis, trades };
  }

  async sma(...args) {
    this.indicator = 'sma';
    this.periods = [...new Set([...args])].sort();
    this.data = await this._fetchBars();
    this.series = this._createSeries();

    const { firstKey, lastKey } = this._createKeys();
    this.periods.forEach(this._createSMASeries);

    this.strategy = smaStrategy({ firstKey, lastKey });
    const { analysis, trades } = this.backtest();
    const meta = this.createMetaObject();
    return { meta, analysis, trades };
  }
}

module.exports = Backtest;

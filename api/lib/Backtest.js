const df = require('data-forge');
require('data-forge-indicators');
const _ = require('lodash');
const { backtest, analyze } = require('grademark');
const { toDate } = require('date-fns');
const Asset = require('./Asset');

const { DataFrame } = df;

const smaStrategy = () => ({
  entryRule: (enterPosition, { bar }) => {
    if (bar.sma20 > bar.sma50) {
      enterPosition();
    }
  },
  exitRule: (exitPosition, { bar }) => {
    if (bar.sma20 < bar.sma50 || bar.sma50 < bar.sma200) {
      exitPosition();
    }
  },
  stopLoss: ({ entryPrice }) => entryPrice * 0.95,
});

class Backtest extends Asset {
  static indicators = ['sma'];

  static stopLossPct = 0.95;

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
    this.keys = this.periods
      .map((value) => `${this.indicator}${value}`);
    // const firstKey = _.first(this.keys);
    // const lastKey = _.last(this.keys);
    // return { keys: this.keys, firstKey, lastKey };
    return this.keys;
  }

  _createSMASeries = (period, i) => {
    // const { keys } = this._createKeys();
    const key = this.keys[i];
    const movingAverage = this.series
      .deflate((bar) => bar.close)
      .sma(period);
    this.series = this.series
      .withSeries(key, movingAverage)
      .skip(period);
    return this.series;
  }

  backtest() {
    if (!this.series.toArray().length) {
      return {
        analysis: {},
        trades: [],
      };
    }
    const tradeSeries = backtest(this.strategy, this.series);
    const rawAnalysis = analyze(this.startingCapital, tradeSeries);
    const trades = tradeSeries.toArray();
    const keysToOmit = [
      'startingCapital',
      'finalCapital',
      'profit',
      'totalTrades',
      'barCount',
      'maxDrawdown',
      'returnOnAccount',
    ];
    const analysis = _.omit(rawAnalysis, keysToOmit);
    return { analysis, trades };
  }

  async sma() {
    this.indicator = 'sma';
    this.periods = [20, 50, 200];
    this.data = await this._fetchBars();
    const maxPeriod = Math.max(...this.periods);
    this.series = this._createSeries();
    if (this.data.length < maxPeriod || this.series.toArray().length < maxPeriod) {
      return null;
    }

    this.keys = this._createKeys();
    this.periods.forEach(this._createSMASeries);

    this.strategy = smaStrategy(this.periods);
    const { analysis, trades } = this.backtest();
    const meta = this.createMetaObject();
    const seriesArray = this.series.toArray();
    const lastObject = _.last(seriesArray);
    const lastIndicator = this.keys.reduce((output, key) => {
      const value = lastObject[key];
      return {
        ...output,
        [key]: value,
      };
    }, {});
    return {
      meta,
      analysis,
      trades,
      lastIndicator,
    };
  }
}

module.exports = Backtest;

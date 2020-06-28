const df = require('data-forge');
require('data-forge-indicators');
const _ = require('lodash');
const { backtest, analyze } = require('grademark');
const Asset = require('./Asset');
const Yahoo = require('algotrader/objects/data/Yahoo');

const { DataFrame } = df;

const smaStrategy = () => ({
  entryRule: (enterPosition, { bar }) => {
    if (bar.period1 >= bar.period2) {
      enterPosition();
    }
  },
  exitRule: (exitPosition, { bar }) => {
    if (bar.period1 < bar.period2) {
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
    if (this.symbol === 'SPY' || this.symbol === 'QQQ' || this.symbol === 'IWM') return [];
    const bars = await Yahoo.getQuotes(this.symbol, '1y', '1d', false);
    const results = bars.map((quote) => ({
      ...quote.price,
      time: quote.date,
    }));
    return results;
    // try {
    //   if (this.symbol === 'SPY' || this.symbol === 'QQQ' || this.symbol === 'IWM') return [];
    //   const bars = await Yahoo.getQuotes(this.symbol, '3mo', '1d', false);
    //   const results = bars.map((quote) => ({
    //     ...quote.price,
    //     time: quote.date,
    //   }));
    //   return results;
    // } catch (error) {
    //   console.error(error);
    // }
    // return [];
  }

  _createSeries() {
    // const series = new DataFrame(this.data)
    //   .transformSeries({
    //     startEpochTime: (value) => toDate(value * 1000),
    //   })
    //   .setIndex('startEpochTime')
    //   .renameSeries({
    //     startEpochTime: 'time',
    //     openPrice: 'open',
    //     highPrice: 'high',
    //     lowPrice: 'low',
    //     closePrice: 'close',
    //   });
    this.series = new DataFrame(this.data).setIndex('time');
    return this.series;
  }

  _createKeys() {
    this.keys = this.periods
      .map((value, i) => `period${i + 1}`);
    return this.keys;
  }

  _createSMASeries = (period, i) => {
    // this.keys = this._createKeys();
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

  async sma(period1 = 20, period2 = 50, period3 = 200) {
    this.indicator = 'sma';
    this.periods = [period1, period2, period3];
    try {
      this.data = await this._fetchBars();
    } catch (error) {
      // console.error(error);
      return null;
    }
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

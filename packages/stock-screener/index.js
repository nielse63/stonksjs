const StockScreener = require('./lib/StockScreener');

const screener = new StockScreener();

module.exports = {
  screens: StockScreener.listScreens(),
  async get(...args) {
    return screener.getScreenerResults(...args);
  },
};

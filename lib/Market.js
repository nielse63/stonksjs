const { Robinhood } = require('algotrader');

class Market {
  static cache;

  static instance;

  constructor() {
    if (Market.instance) {
      return Market.instance;
    }
    Robinhood.Market.getByMIC('XNYS').then((response) => {
      Market.cache = response;
    });
    Market.instance = this;
  }

  async _getMarket() {
    if (Market.cache) {
      return Market.cache;
    }
    Market.cache = await Robinhood.Market.getByMIC('XNYS');
    return Market.cache;
  }

  async isOpen() {
    const market = await this._getMarket();
    return market.isOpenNow() || market.isExtendedOpenNow();
  }
}

module.exports = Market;

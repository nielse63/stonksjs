const parseObject = require('./parseObject');

// https://github.com/torreyleonard/algotrader/blob/master/docs/ROBINHOOD.md#Instrument

class Portfolio {
  static parseSingleObject(object = {}) {
    const {
      symbol,
      quantity,
      averageBuy: { price },
      dates: { originalPurchase: purchaseDate },
      InstrumentObject,
    } = object;
    const name = InstrumentObject.getSimpleName();
    const type = InstrumentObject.getType();
    const id = InstrumentObject.getID();
    const links = {
      path: `/api/assets/${symbol}`,
    };

    return parseObject({
      symbol,
      quantity,
      price,
      purchaseDate,
      name,
      type,
      id,
      links,
    });
  }

  static parseArray(array = []) {
    return array.map(Portfolio.parseSingleObject);
  }

  static parse(portfolioObject) {
    const { array } = portfolioObject;
    return Portfolio.parseArray(array);
  }
}

module.exports = Portfolio;

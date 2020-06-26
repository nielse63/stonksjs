const algotrader = require('algotrader');
const parseObject = require('./parseObject');
const Account = require('./Account');

const { Robinhood } = algotrader;

// https://github.com/torreyleonard/algotrader/blob/master/docs/ROBINHOOD.md#Instrument
// https://github.com/torreyleonard/algotrader/blob/master/docs/ROBINHOOD.md#Portfolio

class Portfolio {
  static MAX_DRAWDOWN = 0.9;

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

  constructor(username, password, deviceToken) {
    this.account = new Account(username, password, deviceToken);
    this.user = this.account.user;
    this.portfolio = [];
  }

  async getPortfolio() {
    try {
      this.portfolio = await this.account.getPortfolio();
    } catch (error) {
      console.error(error);
    }
    return this.portfolio;
  }

  async cancelOpenOrders() {
    try {
      const response = await this.user.cancelOpenOrders();
      console.log({ response });
      return response;
    } catch (error) {
      console.error(error);
    }
    return null;
  }

  async getSymbols() {
    this.portfolio = await this.getPortfolio();
    return this.portfolio.map(({ symbol }) => symbol);
  }

  async order(symbol, options) {
    try {
      if (!symbol) {
        throw new Error('`symbol` is undefined');
      }
      if (!options.quantity) {
        throw new Error('`quantity` is undefined');
      }
      if (!options.side) {
        throw new Error('`side` is undefined');
      }

      const defaults = {
        type: 'market',
        timeInForce: 'gfd',
        trigger: 'immediate',
        extendedHours: true,
      };
      // order config shape: https://github.com/torreyleonard/algotrader/blob/master/objects/broker/robinhood/Order.js#L11
      const orderConfig = {
        ...defaults,
        ...options,
      };
      await this.account.authenticate();
      const { Instrument, Order } = Robinhood;
      const instrument = await Instrument.getBySymbol(symbol);
      const quote = await instrument.getQuote(this.user);
      const order = new Order(this.user, {
        ...orderConfig,
        instrument,
        quote,
      });
      const response = await order.submit();
      return parseObject(response);
    } catch (error) {
      console.error(error.toString());
    }
    return null;
  }

  async sell(symbol, options) {
    try {
      const response = await this.order(symbol, {
        ...options,
        side: 'sell',
      });
      return response;
    } catch (error) {
      console.error(error.toString());
    }
    return null;
  }

  async buy(symbol, options) {
    try {
      console.log({ symbol, options });
      // return { symbol, options };
      const order = await this.order(symbol, {
        ...options,
        side: 'buy',
      });
      return order;

      // const { quantity, price } = buyOrder;
      // const stopPrice = Number.parseFloat(price * Portfolio.MAX_DRAWDOWN).toFixed(2);
      // const sellOptions = {
      //   quantity: Math.floor(quantity),
      //   type: 'limit',
      //   timeInForce: 'gtc',
      //   trigger: 'stop',
      //   side: 'sell',
      //   stopPrice,
      //   overrideDayTradeCheck: true,
      // };
      // const sellOrder = await this.order(symbol, sellOptions);
      // return { buyOrder, sellOrder };
      // return order;
    } catch (error) {
      console.error(error.toString());
    }
    return null;
  }
}

module.exports = Portfolio;

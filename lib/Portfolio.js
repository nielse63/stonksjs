const { Robinhood } = require('algotrader');
// const parseObject = require('./helpers/parseObject');
const Account = require('./Account');

// https://github.com/torreyleonard/algotrader/blob/master/docs/ROBINHOOD.md#Instrument
// https://github.com/torreyleonard/algotrader/blob/master/docs/ROBINHOOD.md#Portfolio

class Portfolio {
  static MAX_DRAWDOWN = 0.9;

  constructor() {
    this.account = new Account();
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
      return { order, response };
    } catch (error) {
      console.error(error);
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
      console.error(error);
    }
    return null;
  }

  async buy(symbol, options) {
    try {
      const order = await this.order(symbol, {
        ...options,
        side: 'buy',
      });
      return order;
    } catch (error) {
      console.error(error);
    }
    return null;
  }
}

module.exports = Portfolio;

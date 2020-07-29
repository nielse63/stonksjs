const { Robinhood } = require('algotrader');
const RobinhoodAccount = require('./RobinhoodAccount');

class RobinhoodOrder {
  constructor(user) {
    this.user = user || new RobinhoodAccount();
    if (!this.user.isAuthenticated) {
      this.user.authenticate();
    }
  }

  async submit(side, symbol, options) {
    if (!this.user.isAuthenticated) {
      throw new Error('User is not authenticated');
    }
    const instrument = await Robinhood.Instrument.getBySymbol(symbol);
    const quote = await instrument.getQuote(this.user);
    this.order = new Robinhood.Order(this.user, {
      ...options,
      instrument,
      quote,
      side,
    });
    this.response = await this.order.submit();
    return this.response;
  }

   buy = async (symbol, options) => {
     const response = await this.submit('buy', symbol, options);
     return response;
   }

   sell = async (symbol, options) => {
     const response = await this.submit('sell', symbol, options);
     return response;
   }
}

module.exports = RobinhoodOrder;

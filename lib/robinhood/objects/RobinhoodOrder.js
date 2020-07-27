const { Robinhood } = require('algotrader');

class RobinhoodOrder {
  constructor(user, options = {}) {
    if (!user) throw new Error('Undefined value for user');
    if (!['buy', 'sell'].includes(options.side)) throw new Error('Invalid value for order side');
    if (!options.symbol) throw new Error('Order symbol is undefined');
    if (!options.qty) throw new Error('Order qty is undefined');

    this.user = user;
    this.symbol = options.symbol;
    this.options = {
      type: 'market',
      timeInForce: 'gfd',
      trigger: 'immediate',
      extendedHours: true,
      ...options,
    };
  }

  async submit() {
    if (!this.user.isAuthenticated) {
      await this.user.authenticate();
    }

    const instrument = await Robinhood.Instrument.getBySymbol(this.symbol);
    const quote = await instrument.getQuote(this.user);
    this.order = new Robinhood.Order(this.user, {
      ...this.options,
      instrument,
      quote,
    });
    this.response = await this.order.submit();
    return this.response;
  }
}

module.exports = RobinhoodOrder;

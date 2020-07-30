const RobinhoodOrder = require('../RobinhoodOrder');
const RobinhoodAccount = require('../RobinhoodAccount');
const { Robinhood } = require('algotrader');

const account = new RobinhoodAccount();

describe('RobinhoodOrder', () => {
  it('should not throw error when user is undefined', () => {
    expect(() => {
      new RobinhoodOrder();
    }).not.toThrowError();
  });

  it('should set options property', () => {
    const order = new RobinhoodOrder(account.user);
    expect(order.user).toBeInstanceOf(Robinhood.User);
  });
});

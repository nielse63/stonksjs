const RobinhoodOrder = require('../RobinhoodOrder');
const RobinhoodAccount = require('../RobinhoodAccount');

const account = new RobinhoodAccount();

describe('RobinhoodOrder', () => {
  it('should not throw error when user is undefined', () => {
    expect(() => {
      new RobinhoodOrder();
    }).not.toThrowError();
  });

  it('should set options property', () => {
    const order = new RobinhoodOrder(account.user, {
      side: 'buy',
      qty: 1,
      symbol: 'MSFT',
    });
    expect(order.options).toBeObject();
    expect(order.options.symbol).toEqual('MSFT');
  });
});

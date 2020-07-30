const robinhood = require('..');

describe('robinhood', () => {
  it('should return an object', () => {
    expect(robinhood).toBeObject();
    expect(robinhood).toContainKeys([
      'getBuyingPower',
      'buy',
      'sell',
    ]);
  });

  it('should get buying power', async () => {
    const buyingPower = await robinhood.getBuyingPower();
    expect(buyingPower).toBeNumber();
  });
});

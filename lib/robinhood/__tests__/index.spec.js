const rh = require('..');

describe('robinhood', () => {
  let robinhood;
  beforeAll(async () => {
    robinhood = await rh(
      process.env.ROBINHOOD_USERNAME,
      process.env.ROBINHOOD_PASSWORD,
      process.env.ROBINHOOD_DEVICE_TOKEN,
    );
  });

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

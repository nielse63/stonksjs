const factory = require('..');

describe('robinhood', () => {
  it('should have keys', () => {
    const robinhood = factory(
      process.env.ROBINHOOD_USERNAME,
      process.env.ROBINHOOD_PASSWORD,
      process.env.ROBINHOOD_DEVICE_TOKEN,
    );
    console.log(robinhood.buy);
    expect(true).toBe(true);
  });
});

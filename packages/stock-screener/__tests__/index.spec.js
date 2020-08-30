const stockScreener = require('..');

describe('@stonksjs/stock-screener', () => {
  it('should be a function with a static prop', () => {
    expect(stockScreener).toBeFunction();
    expect(stockScreener.filters).toBeArray();
  });

  it('should return an array of symbols', async () => {
    const response = await stockScreener('HIGH_YIELD_DIVIDENDS');
    expect(response).toBeArray();
  });

  it('should return symbols (no other strings)', async () => {
    const response = await stockScreener('HIGH_YIELD_DIVIDENDS');
    response.forEach((symbol) => {
      expect(/[A-Z]{1,5}/.test(symbol)).toBe(true);
    });
  });
});

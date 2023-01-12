const stockScreener = require('../stock-screener');

describe('stock-screener', () => {
  it('should be an object with methods', () => {
    expect(stockScreener).toBeObject();
    expect(stockScreener.listFilters).toBeFunction();
    expect(stockScreener.getScreenerResults).toBeFunction();
  });

  describe('#listFilters', () => {
    it('should return an array of filters', () => {
      const filters = stockScreener.listFilters();
      expect(filters).toBeArray();
    });
  });

  describe('#getScreenerResults', () => {
    it('should be an async function that resolves to an array', async () => {
      const response = await stockScreener.getScreenerResults(
        'HIGH_YIELD_DIVIDENDS',
      );
      expect(response).toBeArray();
    });

    it('should reject if an invalid filter is passed', async () => {
      await expect(
        stockScreener.getScreenerResults('invalidFilter'),
      ).toReject();
    });
  });
});

import { getScreenerResults } from '../stock-screener';

describe('stock-screener', () => {
  describe('#getScreenerResults', () => {
    it('should be an async function that resolves to an array', async () => {
      const response = await getScreenerResults('HIGH_YIELD_DIVIDENDS');
      expect(response).toBeArray();
    });
  });
});

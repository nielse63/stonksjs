import finviz from '@stonksjs/finviz';
import Quote from '../Quote';
import mockQuote from '../__fixtures__/quote';

jest.mock('@stonksjs/finviz');

describe('Quote', () => {
  let quote;

  beforeEach(() => {
    quote = new Quote();
    (finviz.getQuote as jest.Mock).mockResolvedValueOnce({ ...mockQuote });
  });

  afterEach(() => {
    jest.clearAllMocks();
    quote.cache.clear();
  });

  describe('get', () => {
    it('should get quote data', async () => {
      const results = await quote.get('AAPL');
      expect(results).toBeObject();
    });

    it('should get from cache', async () => {
      const finvizSpy = jest.spyOn(finviz, 'getQuote');
      const cacheSpy = jest.spyOn(quote.cache, 'get');
      await quote.get('AAPL');
      expect(finvizSpy).toHaveBeenCalled();
      expect(cacheSpy).not.toHaveBeenCalled();
      finvizSpy.mockClear();
      await quote.get('AAPL');
      expect(finvizSpy).not.toHaveBeenCalled();
      expect(cacheSpy).toHaveBeenCalled();
    });
  });
});

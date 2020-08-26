const StonksFundamentalsAPI = require('../StonksFundamentalsAPI');

const symbol = 'msft';

describe('StonksFundamentalsAPI', () => {
  let fundamentalsApi;
  beforeEach(() => {
    fundamentalsApi = new StonksFundamentalsAPI(symbol);
  });

  it('should set url from given symbol', () => {
    fundamentalsApi.symbol = 'AAPL';
    expect(fundamentalsApi.url).toEqual(
      'https://finance-services.msn.com/Market.svc/ChartAndQuotes?symbols=126.1.AAPL&lang=en-US&chartType=1y'
    );
  });

  it('should return a data object', async () => {
    const response = await fundamentalsApi.get();
    expect(response).toBeDefined();
  });
});

const StonksQuote = require('../StonksQuote');

describe('StonksQuote', () => {
  let quote;
  beforeEach(() => {
    quote = new StonksQuote('msft');
  });

  it('should set symbol', () => {
    expect(quote.symbol).toEqual('MSFT');
  });

  // it('should get search results', async () => {
  //   const results = await quote.getFundamentals();
  //   expect(quote.symbol).toEqual('MSFT');
  // });

  it('should get key statistics', async () => {
    const results = await quote.getKeyStatistics();
    console.log(results);
    expect(quote.symbol).toEqual('MSFT');
  });
});

const StonksQuote = require('../StonksQuote');
const _ = require('lodash');

describe('StonksQuote', () => {
  let quote;
  beforeEach(() => {
    quote = new StonksQuote('msft');
  });

  it('should set symbol', () => {
    expect(quote.symbol).toEqual('MSFT');
  });

  it('should fetch asset fundamentals', async () => {
    const results = await quote.getFundamentals();
    expect(results).toBeObject();
    expect(_.isEmpty(results)).toBe(false);
  });
});

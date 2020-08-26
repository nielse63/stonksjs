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

  it('should throw error when no symbol provided', () => {
    expect(() => {
      new StonksQuote();
    }).toThrowError('Symbol must be defined');
  });

  it('should fetch asset fundamentals', async () => {
    const results = await quote.getFundamentals();
    expect(results).toBeObject();
    expect(_.isEmpty(results)).toBe(false);
  });

  it('should return empty object on invalid symbol', async () => {
    quote = new StonksQuote('invalid123');
    const results = await quote.getFundamentals();
    expect(results).toBeObject();
    expect(_.isEmpty(results)).toBe(true);
  });
});

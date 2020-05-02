const Alpaca = require('@alpacahq/alpaca-trade-api');
const alpaca = require('..');

describe('alpaca', () => {
  it('should return alpaca object', () => {
    expect(alpaca).toBeInstanceOf(Alpaca);
  });
});

const getPositionSymbols = require('../getPositionSymbols');

describe('getPositionSymbols', () => {
  let symbols;
  beforeAll(async () => {
    symbols = await getPositionSymbols();
  });

  it('should return array', () => {
    expect(Array.isArray(symbols)).toBe(true);
  });

  it('should be array of strings', () => {
    symbols.forEach((symbol) => {
      expect(typeof symbol).toEqual('string');
    });
  });
});

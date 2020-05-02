const isNumeric = require('../isNumeric');

describe('isNumeric', () => {
  it('should return true for numeric strings and numbers', () => {
    expect(isNumeric(1)).toBe(true);
    expect(isNumeric('1')).toBe(true);
    expect(isNumeric('1.5')).toBe(true);
    expect(isNumeric('-1')).toBe(true);
    expect(isNumeric('0')).toBe(true);
  });

  it('should return false for non-numeric strings', () => {
    expect(isNumeric('howdy')).toBe(false);
    expect(isNumeric({})).toBe(false);
  });
});

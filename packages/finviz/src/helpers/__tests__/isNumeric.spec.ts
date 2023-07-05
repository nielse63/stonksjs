import isNumeric from '../isNumeric';

describe('isNumeric', () => {
  it('should return true if the value is numeric', () => {
    expect(isNumeric(1)).toBeTrue();
    expect(isNumeric('1')).toBeTrue();
    expect(isNumeric('-1')).toBeTrue();
    expect(isNumeric('.1')).toBeTrue();
    expect(isNumeric('-0.001')).toBeTrue();
  });

  it('should return false if the value is not numeric', () => {
    expect(isNumeric('howdy')).toBeFalse();
    expect(isNumeric([])).toBeFalse();
    expect(isNumeric({})).toBeFalse();
    expect(isNumeric(null)).toBeFalse();
    expect(isNumeric(undefined)).toBeFalse();
    expect(isNumeric('')).toBeFalse();
  });
});

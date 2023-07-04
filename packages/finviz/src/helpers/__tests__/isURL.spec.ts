import isURL from '../isURL';

describe('isURL', () => {
  it('should return true if the string is a valid URL', () => {
    expect(isURL('https://google.com')).toBeTrue();
    expect(isURL('http://test.com')).toBeTrue();
    expect(isURL('http://localhost:8080')).toBeTrue();
  });

  it('should return false if the string is not a valid URL', () => {
    expect(isURL(1)).toBeFalse();
    expect(isURL('random string')).toBeFalse();
    expect(isURL(null)).toBeFalse();
  });
});

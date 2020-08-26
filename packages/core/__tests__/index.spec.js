const entry = require('..');
const StonksCore = require('../lib/StonksCore');

describe('entry', () => {
  it('should be a function', () => {
    expect(entry).toBeFunction();
  });

  it('should return a StonksCore instance', () => {
    const value = entry();
    expect(value).toBeInstanceOf(StonksCore);
  });
});

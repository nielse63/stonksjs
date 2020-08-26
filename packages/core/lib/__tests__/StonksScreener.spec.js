const StonksScreener = require('../StonksScreener');

describe('StonksScreener', () => {
  let instance;
  beforeEach(() => {
    instance = new StonksScreener();
  });

  it('should return a StonksScreener instance', () => {
    expect(instance).toBeInstanceOf(StonksScreener);
  });
});

const StonksCore = require('../StonksCore');

describe('entry', () => {
  let instance;
  beforeEach(() => {
    instance = new StonksCore();
  });

  it('should return a StonksCore instance', () => {
    expect(instance).toBeInstanceOf(StonksCore);
  });
});

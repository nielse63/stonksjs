const app = require('../app');

describe('app', () => {
  it('should be defined', () => {
    expect(app).toBeDefined();
  });

  it('should be function', () => {
    expect(app).toBeInstanceOf(Function);
  });
});

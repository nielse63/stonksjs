const collections = require('../robinhood-collections');

describe('collections', () => {
  it('should be object with desired function', () => {
    expect(collections).toBeObject();
    expect(collections).toContainKeys(['getCollection', 'collections']);
  });
});

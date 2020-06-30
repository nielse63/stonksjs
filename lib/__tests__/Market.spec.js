const Market = require('../Market');

describe('Market', () => {
  let market;
  beforeEach(() => {
    market = new Market();
  });

  describe('isOpen', () => {
    it('should have isOpen method', () => {
      expect(market.isOpen).toBeDefined();
    });

    it('should return boolean', async () => {
      const output = await market.isOpen();
      expect(typeof output).toEqual('boolean');
    });
  });
});

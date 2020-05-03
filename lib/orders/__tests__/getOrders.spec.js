const getOrders = require('../getOrders');

describe('getOrders', () => {
  it('should return array', async () => {
    const orders = await getOrders();
    expect(Array.isArray(orders)).toBe(true);
  });
});

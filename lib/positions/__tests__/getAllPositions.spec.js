const getAllPositions = require('../getAllPositions');
const alpaca = require('../../alpaca');
const mockAlpaca = require('../../../__mocks__/alpaca');

alpaca.getPositions = jest.fn(mockAlpaca.getPositions);

describe('getAllPositions', () => {
  it('should get positions', async () => {
    const positions = await getAllPositions();
    expect(positions).toBeDefined();
    expect(Array.isArray(positions)).toBe(true);
  });
});

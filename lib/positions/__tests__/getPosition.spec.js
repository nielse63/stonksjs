const getPosition = require('../getPosition');
const alpaca = require('../../alpaca');
const mockAlpaca = require('../../../__mocks__/alpaca');

alpaca.getPosition = jest.fn(mockAlpaca.getPosition);

const positionKeys = [
  'assetId',
  'symbol',
  'exchange',
  'assetClass',
  'qty',
  'avgEntryPrice',
  'side',
  'marketValue',
  'costBasis',
  'unrealizedPl',
  'unrealizedPlpc',
  'unrealizedIntradayPl',
  'unrealizedIntradayPlpc',
  'currentPrice',
  'lastdayPrice',
  'changeToday',
];

describe('getPosition', () => {
  it('should get position', async () => {
    const position = await getPosition('AMZN');
    expect(alpaca.getPosition).toHaveBeenCalledWith('AMZN');
    expect(position).toBeDefined();
    expect(position).toBeInstanceOf(Object);
  });

  it('should return parsed object', async () => {
    const position = await getPosition('AMZN');
    expect(Object.keys(position)).toEqual(positionKeys);
  });

  it('should handle invalid symbol', async () => {
    const position = await getPosition();
    expect(position).toBeNull();
  });
});

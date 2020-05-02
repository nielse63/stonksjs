const formatAssetData = require('../formatAssetData');
const bars = require('../__mocks__/bars.json');

const expectedKeys = [
  'timestamp',
  'date',
  'open',
  'high',
  'low',
  'close',
  'volume',
];

describe('formatAssetData', () => {
  let data;
  beforeAll(() => {
    data = formatAssetData(bars);
  });

  it('should handle undefined argument', () => {
    expect(formatAssetData()).toEqual([]);
  });

  it('should set correct keys on objects', () => {
    expect(Object.keys(data[0])).toEqual(expectedKeys);
  });
});

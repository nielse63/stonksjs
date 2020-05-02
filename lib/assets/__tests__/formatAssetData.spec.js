const formatAssetData = require('../formatAssetData');
const bars = require('../__mocks__/bars.json');

const expectedObject = {
  timestamp: 'number',
  date: 'date',
  open: 'number',
  high: 'number',
  low: 'number',
  close: 'number',
  volume: 'number',
};

describe('formatAssetData', () => {
  let data;
  beforeAll(() => {
    data = formatAssetData(bars);
  });

  it('should handle undefined argument', () => {
    expect(formatAssetData()).toEqual([]);
  });

  it('should set correct keys on objects', () => {
    expect(Object.keys(data[0])).toEqual(Object.keys(expectedObject));
  });

  it('should set correct data types', () => {
    Object.entries(expectedObject).forEach(([key, valueType]) => {
      const value = data[0][key];
      if (valueType === 'date') {
        expect(value instanceof Date).toBe(true);
      } else {
        expect(typeof value).toEqual(valueType);
      }
    });
  });
});

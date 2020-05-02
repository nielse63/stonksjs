const parseAssetData = require('../parseAssetData');
const bars = require('../__mocks__/bars');

const expectedObject = {
  timestamp: 'number',
  date: 'date',
  open: 'number',
  high: 'number',
  low: 'number',
  close: 'number',
  volume: 'number',
};

describe('parseAssetData', () => {
  let data;
  beforeAll(() => {
    data = parseAssetData(bars[0]);
  });

  it('should set correct keys on objects', () => {
    expect(Object.keys(data)).toEqual(Object.keys(expectedObject));
  });

  it('should set correct data types', () => {
    Object.entries(expectedObject).forEach(([key, valueType]) => {
      const value = data[key];
      if (valueType === 'date') {
        expect(value instanceof Date).toBe(true);
      } else {
        expect(typeof value).toEqual(valueType);
      }
    });
  });
});

const formatISO = require('date-fns/formatISO');
const parseObject = require('../parseObject');

describe('parseObject', () => {
  it('should parse numeric string', () => {
    const output = parseObject('123');
    expect(output).toEqual(123);
  });

  it('should parse object', () => {
    const input = { key: '123' };
    const expected = { key: 123 };
    const output = parseObject(input);
    expect(output).toEqual(expected);
  });

  it('should parse array', () => {
    const input = ['123'];
    const expected = [123];
    const output = parseObject(input);
    expect(output).toEqual(expected);
  });

  it('should parse date', () => {
    const input = new Date();
    const expected = formatISO(input);
    const output = parseObject(input);
    expect(output).toEqual(expected);
  });

  it('should parse boolean', () => {
    const input = false;
    const expected = input;
    const output = parseObject(input);
    expect(output).toEqual(expected);
  });

  it('should parse floats', () => {
    const input = 12.34;
    const expected = input;
    const output = parseObject(input);
    expect(output).toEqual(expected);
  });
});

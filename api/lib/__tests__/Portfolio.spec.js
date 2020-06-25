const _ = require('lodash');
const { Robinhood } = require('algotrader');
// const env = require('../env');
const Portfolio = require('../Portfolio');
const { response, mock } = require('../__mocks__/portfolio.mock');

describe('Portfolio', () => {
  beforeAll(async () => {
    response.InstrumentObject = await Robinhood.Instrument.getBySymbol('MSFT');
  });

  describe('parseSingleObject', () => {
    it('should return a plain object', () => {
      const output = Portfolio.parseSingleObject(response);
      expect(_.isPlainObject(output)).toBe(true);
    });

    it('should have expected keys in output', () => {
      const expected = Object.keys(mock[0]);
      const actual = Object.keys(Portfolio.parseSingleObject(response));
      expect(actual).toEqual(expected);
    });
  });

  describe('parseArray', () => {
    const input = [response];

    it('should parse array of response objects', () => {
      const output = Portfolio.parseArray(input);
      expect(output.length).toEqual(input.length);
    });

    it('should have expected keys in output', () => {
      const expected = Object.keys(mock[0]);
      const output = Portfolio.parseArray(input);
      const actual = Object.keys(output[0]);
      expect(actual).toEqual(expected);
    });

    it('should handle undefined arguments', () => {
      const output = Portfolio.parseArray();
      expect(Array.isArray(output)).toBe(true);
    });
  });

  describe('parse', () => {
    const input = {
      array: [response],
    };

    it('should parse given object', () => {
      const output = Portfolio.parse(input);
      expect(Array.isArray(output)).toBe(true);
      expect(output.length).toEqual(input.array.length);
    });
  });

  // describe('order', () => {
  //   let portfolio;
  //   beforeEach(() => {
  //     portfolio = new Portfolio(
  //       env.ROBINHOOD_USERNAME,
  //       env.ROBINHOOD_PASSWORD,
  //       env.ROBINHOOD_DEVICE_TOKEN,
  //     );
  //   });

  //   it('should submit a buy order', async () => {
  //     const res = await portfolio.buy('IDEX', {
  //       quantity: 1,
  //     });
  //     console.log(res);
  //     expect(res).toBeDefined();
  //   });
  // });
});

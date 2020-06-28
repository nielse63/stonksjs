const _ = require('lodash');
const env = require('../env');
const Asset = require('../Asset');
const mock = require('../__mocks__/asset.mock');

const symbol = 'MSFT';
const creds = {
  keyId: env.ALPACA_API_KEY,
  secretKey: env.ALPACA_API_SECRET,
  paper: env.ALPACA_PAPER_TRADING,
};

describe('Asset', () => {
  it('should be defined', () => {
    expect(Asset).toBeDefined();
  });

  describe('static props', () => {
    it('should have `MAX_HISTORY_COUNT` defined', () => {
      expect(Asset.MAX_HISTORY_COUNT).toEqual(1000);
    });
  });

  describe('constructor', () => {
    it('should throw error on undefined symbol', () => {
      expect(() => new Asset()).toThrow('`symbol` is undefined');
    });

    it('should throw error on undefined alpacaCreds', () => {
      expect(() => new Asset(symbol))
        .toThrow('`alpacaCreds` is missing one or more value');
      expect(() => new Asset(symbol, { keyId: env.ALPACA_API_KEY }))
        .toThrow('`alpacaCreds` is missing one or more value');
    });

    it('should not throw error when args are defined', () => {
      expect(() => new Asset(symbol, creds)).not.toThrow();
    });

    it('should define props during construction', () => {
      const props = {
        symbol: {
          typeValidation: (object) => typeof object === 'string',
        },
        options: {
          typeValidation: (object) => _.isPlainObject(object),
          defaultValue: {},
        },
        interval: {
          typeValidation: (object) => typeof object === 'string',
          defaultValue: 'day',
        },
        alpaca: {},
        history: {
          typeValidation: (object) => Array.isArray(object),
          defaultValue: [],
        },
        lastPrice: {
          typeValidation: (object) => typeof object === 'number',
          defaultValue: 0,
        },
      };
      const asset = new Asset(symbol, creds);
      Object.entries(props).forEach(([key, value]) => {
        const { typeValidation, defaultValue } = value;
        const classValue = asset[key];
        expect(classValue).toBeDefined();
        if (typeValidation !== undefined) {
          expect(typeValidation(classValue)).toBe(true);
        }
        if (defaultValue !== undefined) {
          expect(classValue).toEqual(defaultValue);
        }
      });
    });
  });

  describe('parseBarObject', () => {
    it('should be defined', () => {
      expect(Asset.parseBarObject).toBeDefined();
    });
  });

  describe('setIndicatorValue', () => {
    it('should be defined', () => {
      expect(Asset.setIndicatorValue).toBeDefined();
    });
  });

  describe('methods', () => {
    let asset;
    beforeAll(() => {
      asset = new Asset(symbol, creds);
    });

    describe('getHistory', () => {
      it('should be defined', () => {
        expect(asset.getHistory).toBeDefined();
        expect(asset.getHistory).toBeInstanceOf(Function);
      });

      it('should return array', async () => {
        const output = await asset.getHistory();
        expect(Array.isArray(output)).toBe(true);
      });

      it('should include objects that match the schema', async () => {
        const output = await asset.getHistory();
        const object = output[0];
        const keys = Object.keys(object);
        expect(keys).toEqual([
          'volume',
          'time',
          'open',
          'high',
          'low',
          'close',
        ]);
      });
    });

    describe('getCloseValues', () => {
      it('should be defined', () => {
        expect(asset.getCloseValues).toBeDefined();
        expect(asset.getCloseValues).toBeInstanceOf(Function);
      });

      it('should return array', async () => {
        const output = await asset.getCloseValues();
        expect(Array.isArray(output)).toBe(true);
      });

      it('should be the close values from history', async () => {
        const history = await asset.getHistory();
        const actual = await asset.getCloseValues();
        const expected = history.map(({ close }) => close);
        expect(actual).toEqual(expected);
      });
    });

    describe('getLastPrice', () => {
      it('should be defined', () => {
        expect(asset.getLastPrice).toBeDefined();
        expect(asset.getLastPrice).toBeInstanceOf(Function);
      });

      it('should return a number', async () => {
        const output = await asset.getLastPrice();
        expect(typeof output === 'number').toBe(true);
      });

      it('should not be 0', async () => {
        const output = await asset.getLastPrice();
        expect(output).toBeGreaterThan(0);
      });

      it('should be the lsat value from the closeValues array', async () => {
        const closeValues = await asset.getCloseValues();
        const expected = _.last(closeValues);
        const actual = await asset.getLastPrice();
        expect(actual).toEqual(expected);
      });
    });

    describe('toJSON', () => {
      it('should return an object', async () => {
        const json = await asset.toJSON();
        expect(_.isPlainObject(json)).toBe(true);
      });

      it('should match desired schema', async () => {
        const json = await asset.toJSON();
        const actual = Object.keys(json);
        const expected = Object.keys(mock);
        expect(actual).toEqual(expected);
      });
    });
  });
});

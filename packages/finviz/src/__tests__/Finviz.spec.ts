import axios from 'axios';
import Finviz from '../Finviz';
import quote from '../__fixtures__/quote';
import { error, success } from '../__fixtures__/response';

jest.mock('axios');

const SCREENER_URL = 'https://finviz.com/screener.ashx?v=111&s=ta_topgainers';
const TEST_SYMBOL = 'AACG';
const EXPECTED_KEYS = [
  '52WHigh',
  '52WLow',
  '52WRange',
  'atr',
  'avgVolume',
  'beta',
  'bookSh',
  'cashSh',
  'change',
  'currentRatio',
  'debtEq',
  'dividend',
  'earnings',
  'employees',
  'epsNext5Y',
  'epsNextQ',
  'epsNextY',
  'epsPast5Y',
  'epsQQ',
  'epsThisY',
  'epsTtm',
  'forwardPE',
  'grossMargin',
  'income',
  'index',
  'insiderOwn',
  'insiderTrans',
  'instOwn',
  'instTrans',
  'ltDebtEq',
  'marketCap',
  'operMargin',
  'optionable',
  'pB',
  'pC',
  'pE',
  'pFcf',
  'pS',
  'payout',
  'peg',
  'perfHalfY',
  'perfMonth',
  'perfQuarter',
  'perfWeek',
  'perfYear',
  'perfYtd',
  'prevClose',
  'price',
  'profitMargin',
  'quickRatio',
  'recom',
  'relVolume',
  'roa',
  'roe',
  'roi',
  'rsi14',
  'sales',
  'salesPast5Y',
  'salesQQ',
  'shortFloatRatio',
  'shortInterest',
  'shortable',
  'shsFloat',
  'shsOutstand',
  'sma20',
  'sma200',
  'sma50',
  'targetPrice',
  'volatility',
  'volume',
];

describe('Finviz', () => {
  let finviz: Finviz;

  beforeEach(() => {
    axios.create = jest.fn(() => {
      return {
        get: jest.fn((url) => {
          if (url.includes('quote')) {
            return Promise.resolve({ data: quote });
          }
          return Promise.resolve({ data: success });
        }),
      };
    }) as jest.Mock;
    finviz = new Finviz();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  describe('getQuote', () => {
    it('should be defined', () => {
      expect(finviz.getQuote).toBeFunction();
    });

    it('should return an object of data', async () => {
      const response = await finviz.getQuote(TEST_SYMBOL);
      expect(response).toBeObject();
    });

    it('data should have all expected keys', async () => {
      const response = await finviz.getQuote(TEST_SYMBOL);
      expect(response).toContainKeys(EXPECTED_KEYS);
    });

    it('should return data from cache', async () => {
      const spy = jest.spyOn(finviz.quoteCache, 'get');
      const response1 = await finviz.getQuote(TEST_SYMBOL);
      const response2 = await finviz.getQuote(TEST_SYMBOL);
      expect(spy).toHaveBeenCalled();
      expect(response1).toEqual(response2);
    });
  });

  describe('screener', () => {
    describe('getScreenersList', () => {
      it('should get a list of screeners', async () => {
        const response = await finviz.getScreenersList();
        expect(response).toBeArray();
        expect(response.length).toBeGreaterThan(0);
        response.forEach((object) => {
          expect(object).toBeObject();
          expect(object).toContainAllKeys(['name', 'url', 'id']);
        });
      });
    });

    describe('getUrlForScreener', () => {
      it('should return a url for a given screener name', async () => {
        const response = await finviz.getUrlForScreener('Top Gainers');
        expect(response).toBeString();
        expect(response).toEqual(SCREENER_URL);
      });

      it('should return a url for a given screener id', async () => {
        const response = await finviz.getUrlForScreener('topgainers');
        expect(response).toBeString();
        expect(response).toEqual(SCREENER_URL);
      });

      it('should throw an error if screener is not found', async () => {
        await expect(finviz.getUrlForScreener('not found')).rejects.toThrow(
          'Screener not found',
        );
      });
    });

    describe('getScreener', () => {
      it('should accept a screener name or id', async () => {
        const response = await finviz.getScreener('Top Gainers');
        expect(response).toBeArray();
        expect(response.length).toBeGreaterThan(0);
      });

      it('should return an array of symbols', async () => {
        const response = await finviz.getScreener(SCREENER_URL);
        expect(response).toBeArray();
        expect(response.length).toBeGreaterThan(0);
      });

      it('should have a max of 20 items', async () => {
        const response = await finviz.getScreener(SCREENER_URL);
        expect(response.length).toBeLessThanOrEqual(20);
      });

      it('should return symbols (no other strings)', async () => {
        const response = await finviz.getScreener(SCREENER_URL);
        response.forEach((ticker) => {
          expect(/[A-Z]{1,5}/.test(ticker as string)).toBeTrue();
        });
      });

      it('should get value from cache', async () => {
        const spy = jest.spyOn(finviz.screenerCache, 'get');
        const response1 = await finviz.getScreener(SCREENER_URL);
        const response2 = await finviz.getScreener(SCREENER_URL);
        expect(spy).toHaveBeenCalled();
        expect(response1).toEqual(response2);
      });

      it('should handle condition where only one cell is in a row', async () => {
        axios.create = jest.fn(() => {
          return {
            get: jest.fn(() => {
              return Promise.resolve({ data: error });
            }),
          };
        }) as jest.Mock;
        finviz = new Finviz();
        const response = await finviz.getScreener(SCREENER_URL);
        expect(response).toBeArrayOfSize(0);
      });
    });
  });
});

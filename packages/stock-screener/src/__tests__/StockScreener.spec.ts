import finviz from '@stonksjs/finviz';
import { StockScreener } from '../StockScreener';
import filters from '../__fixtures__/filters';

jest.mock('@stonksjs/finviz');

const methods = [
  'getTopGainers',
  'getTopLosers',
  'getNewHigh',
  'getNewLow',
  'getMostVolatile',
  'getMostActive',
  'getUnusualVolume',
  'getOverbought',
  'getOversold',
  'getDowngrades',
  'getUpgrades',
  'getEarningsBefore',
  'getEarningsAfter',
  'getRecentInsiderBuying',
  'getRecentInsiderSelling',
  'getMajorNews',
  'getHorizontalSR',
  'getTlResistance',
  'getTlSupport',
  'getWedgeUp',
  'getWedgeDown',
  'getTriangleAscending',
  'getTriangleDescending',
  'getWedge',
  'getChannelUp',
  'getChannelDown',
  'getChannel',
  'getDoubleTop',
  'getDoubleBottom',
  'getMultipleTop',
  'getMultipleBottom',
  'getHeadShoulders',
  'getHeadShouldersInverse',
];

describe('StockScreener', () => {
  let screener;

  beforeEach(() => {
    screener = new StockScreener();
    (finviz.getScreenersList as jest.Mock).mockResolvedValueOnce([...filters]);
    (finviz.getScreener as jest.Mock).mockResolvedValueOnce([
      'AAPL',
      'MSFT',
      'TSLA',
      'AMZN',
      'GOOG',
    ]);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('getFilters', () => {
    it('should call finviz.getScreenersList', async () => {
      await screener.getFilters();
      expect(finviz.getScreenersList).toHaveBeenCalledOnce();
    });
  });

  describe('screeners', () => {
    it.each(
      methods.map((method) => {
        return [method];
      }),
    )('screener.%s should call finviz.getScreener', async (method) => {
      await screener[method]();
      expect(finviz.getScreener).toHaveBeenCalledOnce();
    });
  });
});

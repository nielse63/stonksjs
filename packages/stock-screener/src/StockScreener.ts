import finviz from '@stonksjs/finviz';
import { type Screener } from './types';

export class StockScreener {
  filters = {
    HEAD_SHOULDERS_INVERSE: 'Head & Shoulders Inverse',
    HEAD_SHOULDERS: 'Head & Shoulders',
    MULTIPLE_BOTTOM: 'Multiple Bottom',
    MULTIPLE_TOP: 'Multiple Top',
    DOUBLE_BOTTOM: 'Double Bottom',
    DOUBLE_TOP: 'Double Top',
    CHANNEL: 'Channel',
    CHANNEL_DOWN: 'Channel Down',
    CHANNEL_UP: 'Channel Up',
    WEDGE: 'Wedge',
    TRIANGLE_DESCENDING: 'Triangle Descending',
    TRIANGLE_ASCENDING: 'Triangle Ascending',
    WEDGE_DOWN: 'Wedge Down',
    WEDGE_UP: 'Wedge Up',
    TL_SUPPORT: 'TL Support',
    TL_RESISTANCE: 'TL Resistance',
    HORIZONTAL_S_R: 'Horizontal S/R',
    MAJOR_NEWS: 'Major News',
    RECENT_INSIDER_SELLING: 'Recent Insider Selling',
    RECENT_INSIDER_BUYING: 'Recent Insider Buying',
    EARNINGS_AFTER: 'Earnings After',
    EARNINGS_BEFORE: 'Earnings Before',
    UPGRADES: 'Upgrades',
    DOWNGRADES: 'Downgrades',
    OVERSOLD: 'Oversold',
    OVERBOUGHT: 'Overbought',
    UNUSUAL_VOLUME: 'Unusual Volume',
    MOST_ACTIVE: 'Most Active',
    MOST_VOLATILE: 'Most Volatile',
    NEW_LOW: 'New Low',
    NEW_HIGH: 'New High',
    TOP_LOSERS: 'Top Losers',
    TOP_GAINERS: 'Top Gainers',
  };

  // eslint-disable-next-line class-methods-use-this
  async getFilters(): Promise<Screener[]> {
    return finviz.getScreenersList();
  }

  async getTopGainers(): Promise<string[]> {
    return finviz.getScreener(this.filters.TOP_GAINERS);
  }

  async getTopLosers(): Promise<string[]> {
    return finviz.getScreener(this.filters.TOP_LOSERS);
  }

  async getNewHigh(): Promise<string[]> {
    return finviz.getScreener(this.filters.NEW_HIGH);
  }

  async getNewLow(): Promise<string[]> {
    return finviz.getScreener(this.filters.NEW_LOW);
  }

  async getMostVolatile(): Promise<string[]> {
    return finviz.getScreener(this.filters.MOST_VOLATILE);
  }

  async getMostActive(): Promise<string[]> {
    return finviz.getScreener(this.filters.MOST_ACTIVE);
  }

  async getUnusualVolume(): Promise<string[]> {
    return finviz.getScreener(this.filters.UNUSUAL_VOLUME);
  }

  async getOverbought(): Promise<string[]> {
    return finviz.getScreener(this.filters.OVERBOUGHT);
  }

  async getOversold(): Promise<string[]> {
    return finviz.getScreener(this.filters.OVERSOLD);
  }

  async getDowngrades(): Promise<string[]> {
    return finviz.getScreener(this.filters.DOWNGRADES);
  }

  async getUpgrades(): Promise<string[]> {
    return finviz.getScreener(this.filters.UPGRADES);
  }

  async getEarningsBefore(): Promise<string[]> {
    return finviz.getScreener(this.filters.EARNINGS_BEFORE);
  }

  async getEarningsAfter(): Promise<string[]> {
    return finviz.getScreener(this.filters.EARNINGS_AFTER);
  }

  async getRecentInsiderBuying(): Promise<string[]> {
    return finviz.getScreener(this.filters.RECENT_INSIDER_BUYING);
  }

  async getRecentInsiderSelling(): Promise<string[]> {
    return finviz.getScreener(this.filters.RECENT_INSIDER_SELLING);
  }

  async getMajorNews(): Promise<string[]> {
    return finviz.getScreener(this.filters.MAJOR_NEWS);
  }

  async getHorizontalSR(): Promise<string[]> {
    return finviz.getScreener(this.filters.HORIZONTAL_S_R);
  }

  async getTlResistance(): Promise<string[]> {
    return finviz.getScreener(this.filters.TL_RESISTANCE);
  }

  async getTlSupport(): Promise<string[]> {
    return finviz.getScreener(this.filters.TL_SUPPORT);
  }

  async getWedgeUp(): Promise<string[]> {
    return finviz.getScreener(this.filters.WEDGE_UP);
  }

  async getWedgeDown(): Promise<string[]> {
    return finviz.getScreener(this.filters.WEDGE_DOWN);
  }

  async getTriangleAscending(): Promise<string[]> {
    return finviz.getScreener(this.filters.TRIANGLE_ASCENDING);
  }

  async getTriangleDescending(): Promise<string[]> {
    return finviz.getScreener(this.filters.TRIANGLE_DESCENDING);
  }

  async getWedge(): Promise<string[]> {
    return finviz.getScreener(this.filters.WEDGE);
  }

  async getChannelUp(): Promise<string[]> {
    return finviz.getScreener(this.filters.CHANNEL_UP);
  }

  async getChannelDown(): Promise<string[]> {
    return finviz.getScreener(this.filters.CHANNEL_DOWN);
  }

  async getChannel(): Promise<string[]> {
    return finviz.getScreener(this.filters.CHANNEL);
  }

  async getDoubleTop(): Promise<string[]> {
    return finviz.getScreener(this.filters.DOUBLE_TOP);
  }

  async getDoubleBottom(): Promise<string[]> {
    return finviz.getScreener(this.filters.DOUBLE_BOTTOM);
  }

  async getMultipleTop(): Promise<string[]> {
    return finviz.getScreener(this.filters.MULTIPLE_TOP);
  }

  async getMultipleBottom(): Promise<string[]> {
    return finviz.getScreener(this.filters.MULTIPLE_BOTTOM);
  }

  async getHeadShoulders(): Promise<string[]> {
    return finviz.getScreener(this.filters.HEAD_SHOULDERS);
  }

  async getHeadShouldersInverse(): Promise<string[]> {
    return finviz.getScreener(this.filters.HEAD_SHOULDERS_INVERSE);
  }
}

export default StockScreener;

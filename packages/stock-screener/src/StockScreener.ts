/* eslint-disable class-methods-use-this */
import finviz, { Screener } from '@stonksjs/finviz';

export class StockScreener {
  async getFilters(): Promise<Screener[]> {
    return finviz.getScreenersList();
  }

  async getTopGainers(): Promise<string[]> {
    return finviz.getScreener('topgainers');
  }

  async getTopLosers(): Promise<string[]> {
    return finviz.getScreener('toplosers');
  }

  async getNewHigh(): Promise<string[]> {
    return finviz.getScreener('newhigh');
  }

  async getNewLow(): Promise<string[]> {
    return finviz.getScreener('newlow');
  }

  async getMostVolatile(): Promise<string[]> {
    return finviz.getScreener('mostvolatile');
  }

  async getMostActive(): Promise<string[]> {
    return finviz.getScreener('mostactive');
  }

  async getUnusualVolume(): Promise<string[]> {
    return finviz.getScreener('unusualvolume');
  }

  async getOverbought(): Promise<string[]> {
    return finviz.getScreener('overbought');
  }

  async getOversold(): Promise<string[]> {
    return finviz.getScreener('oversold');
  }

  async getDowngrades(): Promise<string[]> {
    return finviz.getScreener('downgrades');
  }

  async getUpgrades(): Promise<string[]> {
    return finviz.getScreener('upgrades');
  }

  async getEarningsBefore(): Promise<string[]> {
    return finviz.getScreener('earningsbefore');
  }

  async getEarningsAfter(): Promise<string[]> {
    return finviz.getScreener('earningsafter');
  }

  async getRecentInsiderBuying(): Promise<string[]> {
    return finviz.getScreener('latestbuys');
  }

  async getRecentInsiderSelling(): Promise<string[]> {
    return finviz.getScreener('latestsales');
  }

  async getMajorNews(): Promise<string[]> {
    return finviz.getScreener('majornews');
  }

  async getHorizontalSR(): Promise<string[]> {
    return finviz.getScreener('horizontal');
  }

  async getTlResistance(): Promise<string[]> {
    return finviz.getScreener('tlresistance');
  }

  async getTlSupport(): Promise<string[]> {
    return finviz.getScreener('tlsupport');
  }

  async getWedgeUp(): Promise<string[]> {
    return finviz.getScreener('wedgeup');
  }

  async getWedgeDown(): Promise<string[]> {
    return finviz.getScreener('wedgedown');
  }

  async getTriangleAscending(): Promise<string[]> {
    return finviz.getScreener('wedgeresistance');
  }

  async getTriangleDescending(): Promise<string[]> {
    return finviz.getScreener('wedgesupport');
  }

  async getWedge(): Promise<string[]> {
    return finviz.getScreener('wedge');
  }

  async getChannelUp(): Promise<string[]> {
    return finviz.getScreener('channelup');
  }

  async getChannelDown(): Promise<string[]> {
    return finviz.getScreener('channeldown');
  }

  async getChannel(): Promise<string[]> {
    return finviz.getScreener('channel');
  }

  async getDoubleTop(): Promise<string[]> {
    return finviz.getScreener('doubletop');
  }

  async getDoubleBottom(): Promise<string[]> {
    return finviz.getScreener('doublebottom');
  }

  async getMultipleTop(): Promise<string[]> {
    return finviz.getScreener('multipletop');
  }

  async getMultipleBottom(): Promise<string[]> {
    return finviz.getScreener('multiplebottom');
  }

  async getHeadShoulders(): Promise<string[]> {
    return finviz.getScreener('headandshoulders');
  }

  async getHeadShouldersInverse(): Promise<string[]> {
    return finviz.getScreener('headandshouldersinv');
  }
}

export default StockScreener;

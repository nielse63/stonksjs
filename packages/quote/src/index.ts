/**
 * Detailed, real-time stock quote data
 *
 * @module @stonksjs/quote
 * @typicalname quote
 */
import finviz from '@stonksjs/finviz';

type Quote = {
  index: string;
  pE: string;
  epsTtm: string;
  insiderOwn: string;
  shsOutstand: string;
  perfWeek: string;
  marketCap: string;
  forwardPE: string;
  epsNextY: string;
  insiderTrans: string;
  shsFloat: string;
  perfMonth: string;
  income: string;
  peg: string;
  epsNextQ: string;
  instOwn: string;
  shortFloatRatio: string;
  perfQuarter: string;
  sales: string;
  pS: string;
  epsThisY: string;
  instTrans: string;
  shortInterest: string;
  perfHalfY: string;
  bookSh: string;
  pB: string;
  roa: string;
  targetPrice: string;
  perfYear: string;
  cashSh: string;
  pC: string;
  epsNext5Y: string;
  roe: string;
  '52WRange': string;
  perfYtd: string;
  dividend: string;
  pFcf: string;
  epsPast5Y: string;
  roi: string;
  '52WHigh': string;
  beta: string;
  quickRatio: string;
  salesPast5Y: string;
  grossMargin: string;
  '52WLow': string;
  atr: string;
  employees: string;
  currentRatio: string;
  salesQQ: string;
  operMargin: string;
  rsi14: string;
  volatility: string;
  optionable: string;
  debtEq: string;
  epsQQ: string;
  profitMargin: string;
  relVolume: string;
  prevClose: string;
  shortable: string;
  ltDebtEq: string;
  earnings: string;
  payout: string;
  avgVolume: string;
  price: string;
  recom: string;
  sma20: string;
  sma50: string;
  sma200: string;
  volume: string;
  change: string;
};

/**
 * Gets details quote information for a given ticker symbol
 *
 * @param {string} symbol - ticker symbol of the asset
 * @returns {Promise<Quote>} - data about the stock
 * @example
 * const quote = require('@stonksjs/quote');
 *
 * const data = await quote('MSFT'); // object of financial data
 */
export const quote = async (symbol: string): Promise<Quote> => {
  const response = await finviz.getQuote(symbol);
  return response as Quote;
};

export default quote;

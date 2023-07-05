/**
 * Unofficial finviz API
 * @module @stonksjs/finviz
 * @typicalname finviz
 */
import Finviz from './Finviz';
export { type Quote, type Screener } from './types';

const finviz = new Finviz();

export { Finviz };
export const getQuote = finviz.getQuote.bind(finviz);
export const getScreener = finviz.getScreener.bind(finviz);
export const getScreenersList = finviz.getScreenersList.bind(finviz);

// for backwards compatibility
export const quote = getQuote;
export const screener = getScreener;

export default finviz;

/**
 * Unofficial finviz API
 * @module @stonksjs/finviz
 * @typicalname finviz
 */
import quote from './quote';
import { getScreener, getScreenersList } from './screener';

export = { quote, screener: getScreener, getScreenersList };

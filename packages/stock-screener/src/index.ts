import { listFilters } from './helpers';
import { getScreenerResults } from './stock-screener';

/**
 * Fetch the latest results from the stock screener
 *
 * @param {string} filter - the name of the screener to search
 * @returns {Promise} - the latest screener data or an error
 * @fulfil {string[]} - array of ticket symbols
 * @reject {Error}
 * @example
 * const symbols = await stockScreener('HIGH_YIELD_DIVIDENDS');
 */
async function stockScreener(filter) {
  return getScreenerResults(filter);
}

/**
 * @property {string[]} filters - list of available filters to choose from
 */
stockScreener.filters = listFilters();

export = stockScreener;

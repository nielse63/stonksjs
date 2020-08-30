/**
 * Get the stock symbols for any Robinhood collection
 *
 * @module @stonksjs/robinhood-collections
 * @typicalname robinhoodCollections
 */
const collections = require('./collections');
const getCollection = require('./get-collection');

module.exports = {
  /**
   * An array of Robinhood collections, including the name and id
   *
   * @example
   * [
   *   { id: '100-most-popular', name: '100 Most Popular' },
   *   { id: 'upcoming-earnings', name: 'Upcoming Earnings' },
   *   { id: 'new-on-robinhood', name: 'New On Robinhood' },
   *   { id: 'technology', name: 'Technology' },
   *   { id: 'oil-and-gas', name: 'Oil and Gas' },
   *   { id: 'finance', name: 'Finance' },
   *   { id: 'software-service', name: 'Software Service' },
   *   { id: 'energy', name: 'Energy' },
   *   { id: 'manufacturing', name: 'Manufacturing' },
   *   { id: 'consumer-product', name: 'Consumer Products' },
   *   { id: 'etf', name: 'ETF' },
   *   { id: 'video-game', name: 'Video Games' },
   *   { id: 'social-media', name: 'Social Media' },
   *   { id: 'health', name: 'Health' },
   *   { id: 'entertainment', name: 'Entertainment' },
   *   { id: 'internet', name: 'Internet' },
   *   { id: 'electronics', name: 'Electronics' },
   *   { id: 'semiconductor', name: 'Semiconductors' },
   *   { id: 'pharmaceutical', name: 'Pharmaceutical' },
   *   { id: 'retail', name: 'Retail' },
   *   { id: 'automotive', name: 'Automotive' },
   *   { id: 'reit', name: 'REIT' },
   *   { id: 'banking', name: 'Banking' },
   *   { id: 'food', name: 'Food' },
   *   { id: 'material', name: 'Materials' },
   *   { id: 'aerospace', name: 'Aerospace' },
   * ];
   *
   * @type {object[]}
   */
  collections,

  /**
   * Get the ticker symbols from a given Robinhood collection
   *
   * @example
   * const robinhoodCollections = require('@stonksjs/robinhood-collections');
   * const symbols = await robinhoodCollections.getCollection('reit');
   *
   * @param {string} collection - the id of a robinhood collection
   * @returns {Promise} - array of ticket symbols from the collection
   * @fulfil {object} - company financial data
   * @reject {Error}
   */
  getCollection,
};

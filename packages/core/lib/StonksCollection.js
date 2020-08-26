const cheerio = require('cheerio');
const StonksRequest = require('./StonksRequest');
const StonksQuote = require('@stonksjs/quote');

/**
 * Retreives a collection of instruments, and their fundamental data, from a pre-defined Robinhood collection
 *
 * @class
 * @example
 * const StonksCollection = require('@stonksjs/quote');
 *
 * const collection = new StonksCollection('etf'); // get ETF instruments
 * const quotes = collection.fetch();
 */
class StonksCollection {
  /**
   * Creates an instance of StonksCollection.
   * @param {string} collection - The name of the Robinhood collection
   * @param {number} [limit=20] - Number of items to return. Defaults to 20
   */
  constructor(collection, limit = 20) {
    if (!collection) {
      throw new Error('Collection must be defined');
    }
    this.collection = collection;
    this.limit = limit;
    this.symbols = [];
    this.quotes = [];
  }

  /**
   * Makes a request for the latest symbols for the collection
   *
   * @returns {Promise} - Promise that resolves to an array of objects, each representing that instruments fundamental financial data.
   * @fulfil {Fundamentals[]}
   * @reject {Error}
   */
  async fetch() {
    this.symbols = await this.getSymbols();
    this.quotes = await this.createQuotes();
    return this.quotes;
  }

  /**
   * Creates StonksQuote objects for each symbol, fetching the latest data for that instrument in the process
   *
   * @param {string[]} symbols - Array of ticker symbols
   * @returns {Promise} - Promise that resolves to an array of fundamental financial data
   * @fulfil {Fundamentals[]}
   * @reject {Error}
   */
  async createQuotes() {
    const promises = this.symbols.map((symbol) => {
      const quote = new StonksQuote(symbol);
      return quote.getFundamentals();
    });
    const quotes = await Promise.all(promises);
    return quotes;
  }

  /**
   * Fetches the ticker symbols listed of the Robinhood collection
   *
   * @returns {Promise} - Promise that resolves to an array of ticker symbols
   * @fulfil {string[]}
   * @reject {Error}
   */
  async getSymbols() {
    const url = `https://robinhood.com/collections/${this.collection}`;
    const request = new StonksRequest(url);
    const response = await request.fetch();
    const html = response.data;
    const $ = cheerio.load(html);
    const selector = '.main-container .table tbody tr td:nth-child(2)';
    const results = [];
    $(selector).each((i, cell) => {
      if (i >= this.limit) return;
      results.push($(cell).text());
    });
    return results;
  }
}

module.exports = StonksCollection;

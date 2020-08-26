const cheerio = require('cheerio');
const StonksRequest = require('./StonksRequest');
const StonksQuote = require('@stonksjs/quote');

class StonksCollection {
  constructor(collection, limit = 20) {
    this.description = 'Collection of StonksQuote objects for a given Robinhood category.';
    if (!collection) {
      throw new Error('Collection must be defined');
    }
    this.collection = collection;
    this.limit = limit;
    this.quotes = [];
  }

  get url() {
    return `https://robinhood.com/collections/${this.collection}`;
  }

  async fetch() {
    try {
      this.request = new StonksRequest(this.url);
      const response = await this.request.fetch();
      const html = response.data;
      const symbols = this.getSymbols(html);
      this.quotes = await this.createQuotes(symbols);
    } catch (error) {
      console.error(error);
    }
    return this.quotes;
  }

  async createQuotes(symbols) {
    const promises = symbols.map((symbol) => {
      const quote = new StonksQuote(symbol);
      return quote.getFundamentals();
    });
    try {
      const quotes = await Promise.all(promises);
      return quotes;
    } catch (error) {
      console.error(error);
    }
    return [];
  }

  getSymbols(html) {
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

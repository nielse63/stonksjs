const cheerio = require('cheerio');
const _ = require('lodash');
const StonksRequest = require('./StonksRequest');
const StonksError = require('./StonksError');

class StonksCollection {
  constructor(collection) {
    this.description = 'Collection of StonksQuote objects for a given Robinhood category.';
    if (!collection) {
      throw new StonksError({ message: 'Collection must be defined' });
    }
    this.collection = collection;
    this.quotes = [];
  }

  get url() {
    return `https://robinhood.com/collections/${this.collection}`;
  }

  async fetch() {
    this.resetProperties();

    try {
      this.request = new StonksRequest(this.url);
      const response = await this.request.fetch();
      if (!_.isEmpty(response.error)) {
        throw new StonksError(response.error);
      }
      const html = response.data;
      this.quotes = this.getSymbols(html);
    } catch (error) {
      console.error(error);
    }
    return this.quotes;
  }

  resetProperties() {
    this.quotes = [];
  }

  getSymbols(html) {
    const $ = cheerio.load(html);
    const selector = '.main-container .table tbody tr td:nth-child(2)';
    const results = [];
    $(selector).each((i, cell) => {
      results.push($(cell).text());
    });
    return results;
  }
}

module.exports = StonksCollection;

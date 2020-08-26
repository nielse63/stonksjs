const _ = require('lodash');
const cheerio = require('cheerio');
const axios = require('axios');

class StonkRequest {
  static defaultOptions = {
    headers: {
      Connection: 'keep-alive',
      'Upgrade-Insecure-Requests': '1',
      'User-Agent':
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36',
    },
    gzip: true,
  };

  constructor(url, options = {}) {
    this.description = 'Shared request utility class';
    this.url = url;
    this.options = _.merge(
      StonkRequest.defaultOptions,
      {
        headers: {
          Host: this.host,
        },
      },
      options
    );
    this.response = {};
    this.error = {};
  }

  get host() {
    const urlObject = new URL(this.url);
    const { host } = urlObject;
    return host;
  }

  resetProperties() {
    this.response = {};
    this.error = {};
  }

  async fetch(url = this.url) {
    this.url = url;
    this.response = await axios.get(this.url, this.options);
    if (this.hasError()) {
      this.error = this.getError();
    }
    return this.response;
  }

  hasError() {
    const { data } = this.response;
    if (typeof data !== 'string') {
      return false;
    }
    this.$ = cheerio.load(data);
    return !!this.$('meta[name="robots"][content="noindex"]').length;
  }

  getError() {
    const elements = this.$('h1');
    if (!elements.length) {
      return {
        code: 500,
        message: 'Unknown error occured',
      };
    }
    const codeString = elements.first().text();
    const messageString = elements.last().text();
    return {
      code: parseInt(codeString, 10),
      message: messageString,
    };
  }
}

module.exports = StonkRequest;

const { StonksFundamentalsAPI } = require('@stonksjs/api');

class StonksQuote {
  constructor(symbol) {
    this.description = 'Object representing the data of a given security';
    if (!symbol) {
      throw new Error('Symbol must be defined');
    }
    this.symbol = symbol.toUpperCase();
  }

  async getFundamentals() {
    try {
      const api = new StonksFundamentalsAPI(this.symbol);
      const data = await api.fetch();
      return data;
    } catch (error) {
      console.error(error);
    }
    return {};
  }
}

module.exports = StonksQuote;

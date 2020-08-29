const Finviz = require('./lib/Finviz');

const finviz = new Finviz();

module.exports = {
  async quote(...args) {
    return finviz.getQuote(...args);
  },
  async search(...args) {
    return finviz.getScreenerResults(...args);
  },
};

const Finviz = require('./lib/Finviz');

const finviz = new Finviz();

module.exports = {
  quote(...args) {
    return finviz.getQuote(...args);
  },
  screener(...args) {
    return finviz.getScreener(...args);
  },
};

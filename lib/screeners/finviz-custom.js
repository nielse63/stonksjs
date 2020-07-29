const finvizScraper = require('../scrapers/finviz');

module.exports = async (url) => {
  const output = await finvizScraper(url);
  return output;
};

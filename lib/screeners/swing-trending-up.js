// equities that meet: price > 50 sma > 150 sma > 200 sma
const finvizScraper = require('../scrapers/finviz');
const { ScreenersURLs } = require('../helpers/constants');

module.exports = async () => {
  const output = await finvizScraper(ScreenersURLs.SwingTrending);
  return output;
};

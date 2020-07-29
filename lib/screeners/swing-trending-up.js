const finvizScraper = require('../scrapers/finviz');
const { ScreenersURLs } = require('../helpers/constants');

/**
 * Gets swing trades that are trending up. The criteria is:
 *   1. Analyst rating of buy or better
 *   2. Price is above 20 day SMA
 *   3. 20 day SMA is above 50 day SMA
 *   4. 50 day SMA is above 200 day SMA
 * @see https://finviz.com/screener.ashx?v=111&s=ta_topgainers&f=an_recom_buybetter,ta_sma20_pa,ta_sma200_sb50,ta_sma50_sb20&ft=4&o=-change
 *
 * @memberof stonksjs.screeners
 * @returns {Promise<string[]>} Array of ticker symbols
 */
const swingTrendingUp = async () => {
  const output = await finvizScraper(ScreenersURLs.SwingTrending);
  return output;
};

module.exports = swingTrendingUp;

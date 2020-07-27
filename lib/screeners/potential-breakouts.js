/*
equities that meets the following
- price > 50 sma > 150 sma > 200 sma
- 200 sma trending up for 1 month
- 50 sma > 150 sma > 200 sma
- price is 30% greater than 52 week high
*/
// https://finviz.com/screener.ashx?v=111&s=ta_topgainers&f=ta_highlow52w_b0to10h,ta_sma20_pa,ta_sma200_sb50,ta_sma50_sb20&ft=4&o=-change
const finvizScraper = require('../scrapers/finviz');
const { ScreenersURLs } = require('../helpers/constants');

module.exports = async () => {
  const output = await finvizScraper(ScreenersURLs.Breakout);
  return output;
};

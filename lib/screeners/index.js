/**
 * Stock screener functions
 * @module screeners
 * @memberof stonksjs
 */
const highYieldDividends = require('./high-yield-dividends');
const potentialBreakouts = require('./potential-breakouts');
const swingTrendingUp = require('./swing-trending-up');
const finvizCustom = require('./finviz-custom');

module.exports = {
  /**
   * @description
   * Screens for equities that meet the following criteria:
   *   - Positive projected growth over the next year
   *   - Positive growth over the last 5 years
   *   - Forward P/E < 20
   *   - Analysist recommendation is buy or better
   *   - Divident yield is > 5%
   * @see https://finviz.com/screener.ashx?v=111&f=an_recom_buybetter,fa_div_o5,fa_eps5years_pos,fa_epsyoy1_pos,fa_fpe_u20&ft=4&o=dividendyield
   * @function
   * @returns {Promise}
   * @fulfil {string[]} - array of ticker symbols
   * @reject {Error}
   */
  highYieldDividends,

  /**
   * @description
   * Screens for equities that meet the following criteria:
   *   - Analyst rating of buy or better
   *   - Price is above 20 day SMA
   *   - 20 day SMA is above 50 day SMA
   *   - 50 day SMA is above 200 day SMA
   *   - Current price is 0%-10% below 52 week high
   * @see https://finviz.com/screener.ashx?v=111&s=ta_topgainers&f=an_recom_buybetter,ta_highlow52w_b0to10h,ta_sma20_pa,ta_sma200_sb50,ta_sma50_sb20&ft=4&o=-change
   * @function
   * @returns {Promise}
   * @fulfil {string[]} - array of ticker symbols
   * @reject {Error}
   */
  potentialBreakouts,

  /**
   * @description
   * Screens for equities that meet the following criteria:
   *   - Analyst rating of buy or better
   *   - Price is above 20 day SMA
   *   - 20 day SMA is above 50 day SMA
   *   - 50 day SMA is above 200 day SMA
   * @see https://finviz.com/screener.ashx?v=111&s=ta_topgainers&f=an_recom_buybetter,ta_sma20_pa,ta_sma200_sb50,ta_sma50_sb20&ft=4&o=-change
   * @function
   * @returns {Promise}
   * @fulfil {string[]} - array of ticker symbols
   * @reject {Error}
   */
  swingTrendingUp,

  /**
   * Function that allows the user to pass a finviz URL and returns symbols from that search
   * @function
   * @param {string} url - the finviz screener URL
   * @returns {Promise}
   * @fulfil {string[]} - array of ticker symbols
   * @reject {Error}
   */
  finvizCustom,
};

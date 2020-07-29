const highYieldDividends = require('./high-yield-dividends');
const potentialBreakouts = require('./potential-breakouts');
const swingTrendingUp = require('./swing-trending-up');
const finvizCustom = require('./finviz-custom');

/**
 * Stock screener functions
 *
 * @name screeners
 * @memberof stonksjs
 * @example
 * const { screeners } = require('stonksjs');
 * const symbols = await screeners.highYieldDividends();
 */
module.exports = {
  highYieldDividends,
  potentialBreakouts,
  swingTrendingUp,
  finvizCustom,
};

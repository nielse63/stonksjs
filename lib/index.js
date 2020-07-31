/**
 * The stonksjs module
 * @module stonksjs
 */
const screeners = require('./screeners');
const Robinhood = require('./robinhood');
const scrapers = require('./scrapers');

module.exports = {
  screeners,
  scrapers,
  Robinhood,
};

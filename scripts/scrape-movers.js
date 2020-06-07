const assert = require('assert');
const path = require('path');
const cheerio = require('cheerio');
const axios = require('axios');
const fs = require('fs-extra');
const { URLS } = require('../lib/constants');
const parseYahooFinanceTable = require('../lib/parse-yahoo-finance-table');

const sortResults = (array) => array.sort((a, b) => {
  const changePercentA = a.changePercent;
  const changePercentB = b.changePercent;
  if (changePercentA < changePercentB) return 1;
  if (changePercentA > changePercentB) return -1;
  return 0;
});

const scraper = async (writeFile = false) => {
  try {
    const { data: html } = await axios(URLS.moversScreener);
    const $ = cheerio.load(html);
    const $table = $('#scr-res-table > *:first-child > table');
    assert.equal($table.length, 1, 'Could not find #scr-res-table element');

    const results = parseYahooFinanceTable($table);
    const output = sortResults(results);

    if (writeFile) {
      // constants
      const dirpath = path.resolve(__dirname, '../data');
      const filepath = path.join(dirpath, 'movers.json');

      // create the data dir
      fs.ensureDirSync(dirpath);
      fs.writeJSONSync(filepath, output, { spaces: 2 });
      console.log('updated data/movers.json');
    }

    return output;
  } catch (error) {
    console.error(error);
  }
  return [];
};

if (!module.parent) {
  /* eslint-disable no-console */
  (async () => {
    await scraper(true);
  })();
}

module.exports = scraper;

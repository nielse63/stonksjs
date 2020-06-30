#!/usr/bin/env node
const rp = require('request-promise');
const cheerio = require('cheerio');
const StonksLogger = require('../lib/StonksLogger');

const logger = new StonksLogger('finviz');

const defaultUrl = 'https://finviz.com/screener.ashx?v=112&f=an_recom_buybetter,exch_nyse,fa_epsyoy_high,fa_pe_u20,fa_peg_low,geo_usa&ft=4&o=-change';

const scraper = async (url = defaultUrl, maxLimit = 20) => {
  logger.log('running finviz scraper');
  try {
    const response = await rp({
      uri: url,
      headers: {
        Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'en-US',
        'Cache-Control': 'max-age=0',
        Connection: 'keep-alive',
        Host: 'finviz.com',
        'Upgrade-Insecure-Requests': '1',
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36',
      },
      gzip: true,
    });
    const $ = cheerio.load(response);
    const keys = [];
    const th = $('.table-top, .table-top-s');
    /* eslint-disable */
    th.each(function (i, elem) {
      const key = $(elem).text();
      keys.push(key);
    });
    /* eslint-enable */
    const headerRow = th.parent('tr');
    const bodyRows = headerRow.nextAll('tr');
    /* eslint-disable */
    const data = [];
    bodyRows.each(function (i, row) {
      if(i > maxLimit) return;
      const cells = $(row).find('> td');
      const object = {};
      cells.each(function (j, cell) {
        const value = $(cell).text();
        var key = keys[j];
        object[key] = value;
      });
      data.push(object);
    })
    /* eslint-enable */
    const symbols = data.map(({ Ticker }) => Ticker);
    logger.log('scraping complete');
    return symbols;
  } catch (error) {
    logger.error(error);
  }
  return [];
};

if (!module.parent) {
  (async () => {
    await scraper();
  })();
}

module.exports = scraper;

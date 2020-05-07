const rp = require('request-promise');
const cheerio = require('cheerio');
const path = require('path');
const fs = require('fs');

const url = 'https://finviz.com/screener.ashx?v=111&f=an_recom_buybetter,sh_price_10to50&ft=4&o=-change';

const scraper = async () => {
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
    const maxLimit = 10;
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
    fs.writeFileSync(
      path.resolve(__dirname, 'trending.json'),
      JSON.stringify(data, null, '  '),
    );

    const symbols = data.map(({ Ticker }) => Ticker);
    return symbols;
  } catch (error) {
    console.error(error);
  }
  return [];
};

if (!module.parent) {
  scraper();
}

module.exports = scraper;

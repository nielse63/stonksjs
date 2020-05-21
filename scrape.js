const rp = require('request-promise');
const cheerio = require('cheerio');

const url = 'https://finviz.com/screener.ashx?v=111&s=ta_topgainers&f=an_recom_buybetter,sh_price_1to10,ta_sma20_pa&ft=3&o=-change';

const scraper = async (maxLimit = 20) => {
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
    const symbols = data
      .filter((object) => {
        const change = parseFloat(object.Change.replace('%', ''));
        return change > 0;
      })
      .map(({ Ticker }) => Ticker);
    return symbols;
  } catch (error) {
    console.error(error);
  }
  return [];
};

if (!module.parent) {
  scraper().then((data) => console.log(data));
}

module.exports = scraper;

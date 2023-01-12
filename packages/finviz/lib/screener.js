const axios = require('axios');
const cheerio = require('cheerio');

const parseScreenerResponse = (html) => {
  const $ = cheerio.load(html);
  const rows = $('.table-light > tbody > tr:not(:first-child)');
  const data = new Set();
  rows.each((i, row) => {
    const cell = $(row).find('> td:nth-child(2)');
    if (cell.length) {
      data.add(cell.text());
    }
  });
  return [...data];
};

const screener = async (url) => {
  const { data } = await axios.get(url);
  const results = parseScreenerResponse(data);
  return results;
};

module.exports = screener;

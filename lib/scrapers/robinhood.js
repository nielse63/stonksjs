const cheerio = require('cheerio');
const request = require('./request');

const parseResponse = (html) => {
  const $ = cheerio.load(html);
  const selector = '.main-container .table tbody tr td:nth-child(2)';
  const symbols = [];
  $(selector).each((i, cell) => {
    symbols.push($(cell).text());
  });
  return symbols;
};

const robinhood = async (url) => {
  const html = await request(url);
  const data = parseResponse(html);
  return data;
};

module.exports = robinhood;

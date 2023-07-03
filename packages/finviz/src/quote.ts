import axios from 'axios';
import cheerio from 'cheerio';
import _ from 'lodash';

const parseQuoteData = (html) => {
  const $ = cheerio.load(html);
  const rows = $('.snapshot-table2 > tbody > tr');
  const data = {};
  let lastKey;
  rows.each((i, row) => {
    const cells = $(row).find('> td');
    cells.each((j, cell) => {
      const value = $(cell).text();
      if (j % 2 === 0) {
        lastKey = _.camelCase(value);
      } else {
        data[lastKey] = value;
      }
    });
  });
  return data;
};

const quote = async (symbol) => {
  const url = `https://finviz.com/quote.ashx?t=${symbol}`;
  const { data } = await axios.get(url);
  const results = parseQuoteData(data);
  return results;
};

export = quote;

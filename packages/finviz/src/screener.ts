import axios from 'axios';
import { load } from 'cheerio';

const parseScreenerResponse = (html: string) => {
  const $ = load(html);
  const rows = $('.table-light > tbody > tr:not(:first-child)');
  const data = new Set();
  rows.each((_, row) => {
    const cell = $(row).find('> td:nth-child(2)');
    if (cell.length) {
      data.add(cell.text());
    }
  });
  return [...data];
};

const screener = async (url: string) => {
  const { data } = await axios.get(url);
  const results = parseScreenerResponse(data);
  return results;
};

export = screener;

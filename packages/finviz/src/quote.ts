import axios from 'axios';
import { load } from 'cheerio';
import camelCase from 'lodash/camelCase';
import { contsants, isNumeric } from './helpers';
import { Quote } from './types';

const { DEFAULT_QUOTE } = contsants;

/**
 * Parses a given HTML string from Finviz and returns a Quote object
 * @param {string} html - html string
 * @returns {Quote} - quote object
 * @protected
 */
export const parseQuoteData = (html: string): Quote => {
  const $ = load(html);
  const rows = $('.snapshot-table2 > tbody > tr');
  const data = {};
  let lastKey = '';
  rows.each((_, row) => {
    const cells = $(row).find('> td');
    cells.each((j, cell) => {
      const value = $(cell).text();
      if (j % 2 === 0) {
        lastKey = camelCase(value);
      } else {
        const cleanValue = value.replace(/,/g, '');
        const parsedValue = isNumeric(cleanValue)
          ? parseFloat(cleanValue)
          : value;
        // @ts-ignore
        data[lastKey] = parsedValue;
      }
    });
  });
  return {
    ...DEFAULT_QUOTE,
    ...data,
  };
};

/**
 * Get quote data for a given symbol
 * @param {string} symbol - stock symbo, e.g. AAPL
 * @returns {Quote} - quote object
 */
export const getQuote = async (symbol: string): Promise<Quote> => {
  const url = `https://finviz.com/quote.ashx?t=${symbol}`;
  const { data } = await axios.get(url);
  const results = parseQuoteData(data);
  return results;
};

export default getQuote;

import axios from 'axios';
import { load } from 'cheerio';
import { contsants, isUrl } from './helpers';
import { Option, Screener } from './types';

const { FINVIZ_URL } = contsants;

/**
 *
 * Parses a given HTML string from Finviz and returns an array of symbols
 * @param {string} html - html string
 * @returns {string[]} - array of stock symbols
 */
export const parseScreenerResponse = (html: string) => {
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

/**
 * Gets a list of pre-defined screeners from Finviz
 * @returns {Screener[]} - array of available screeners
 */
export const getScreenersList = async (): Promise<Screener[]> => {
  const { data: html } = await axios.get(FINVIZ_URL);
  const $ = load(html);
  const options = $('#signalSelect > option');
  const output: Screener[] = [];
  options.each((_, option) => {
    const { value } = option.attribs;
    if (!value.includes('&s=')) return;

    const name = (option.children[0] as Option).data;
    const [, query] = value.split('&s=');
    const url = new URL(value, FINVIZ_URL).href;
    const id = query.split('_').pop() as string;
    output.push({ name, url, id });
  });
  return output;
};

/**
 * Returns a url for a given Finviz screener
 * @param {string} screener - Finviz screener name
 * @returns {string} - screener url
 */
export const getUrlForScreener = async (screener: string): Promise<string> => {
  const screeners = await getScreenersList();
  const output = screeners.find(
    (s) => s.name === screener || s.id === screener,
  );
  if (!output) {
    throw new Error(`Screener ${screener} not found`);
  }
  return output.url;
};

/**
 * Given a Finviz screener url, returns an array of symbols
 * @param {string} screener - Finviz screener name or url
 * @returns {string[]} - array of stock symbols
 */
export const getScreener = async (screener: string) => {
  let url = screener;
  if (!isUrl(url)) {
    url = await getUrlForScreener(screener);
  }
  const { data } = await axios.get(url);
  const results = parseScreenerResponse(data);
  return results;
};

export default getScreener;

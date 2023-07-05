import axios, { AxiosInstance } from 'axios';
import { load } from 'cheerio';
import camelCase from 'lodash/camelCase';
import { contsants, isNumeric, isUrl } from './helpers';
import { Option, Quote, Screener } from './types';

const { FINVIZ_URL, SCREENER_URL, DEFAULT_QUOTE } = contsants;

class Finviz {
  api: AxiosInstance;
  quoteCache: Map<string, Quote>;
  screenerCache: Map<string, string[]>;
  screenrerListCache: Set<Screener>;

  constructor() {
    this.api = axios.create({
      baseURL: FINVIZ_URL,
    });
    this.quoteCache = new Map();
    this.screenerCache = new Map();
    this.screenrerListCache = new Set();
  }

  /**
   * Parses a given HTML string from Finviz and returns a Quote object
   * @param {string} html - html string
   * @returns {Quote} - quote object
   */
  static parseQuoteData(html: string): Quote {
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
  }

  /**
   * Get quote data for a given symbol
   * @param {string} symbol - stock symbo, e.g. AAPL
   * @returns {Quote} - quote object
   */
  async getQuote(symbol: string) {
    if (this.quoteCache.has(symbol)) {
      return this.quoteCache.get(symbol);
    }
    const url = `/quote.ashx?t=${symbol}`;
    const response = await this.api.get(url);
    const data = Finviz.parseQuoteData(response.data);
    this.quoteCache.set(symbol, data);
    return data;
  }

  /**
   *
   * Parses a given HTML string from Finviz and returns an array of symbols
   * @param {string} html - html string
   * @returns {string[]} - array of stock symbols
   */
  static parseScreenerResponse(html: string): string[] {
    const $ = load(html);
    const rows = $('.table-light > tbody > tr:not(:first-child)');
    const output: string[] = [];
    rows.each((_, row) => {
      const cell = $(row).find('> td:nth-child(2)');
      if (cell.length) {
        output.push(cell.text() as string);
      }
    });
    return output;
  }

  /**
   * Gets a list of pre-defined screeners from Finviz
   * @returns {Screener[]} - array of available screeners
   */
  async getScreenersList(): Promise<Screener[]> {
    if (this.screenrerListCache.size) {
      return [...this.screenrerListCache];
    }
    const { data: html } = await this.api.get(SCREENER_URL);
    const $ = load(html);
    const options = $('#signalSelect > option');
    const output: Screener[] = [];
    options.each((_, option) => {
      const { value } = option.attribs;
      if (!value.includes('&s=')) return;

      const name = (option.children[0] as Option).data;
      const [, query] = value.split('&s=');
      const url = new URL(value, SCREENER_URL).href;
      const id = query.split('_').pop() as string;
      output.push({ name, url, id });
    });
    this.screenrerListCache = new Set(output);
    return output;
  }

  /**
   * Returns a url for a given Finviz screener
   * @param {string} screener - Finviz screener name
   * @returns {string} - screener url
   */
  async getUrlForScreener(screener: string): Promise<string> {
    const screeners = await this.getScreenersList();
    const output = screeners.find(
      (s) => s.name === screener || s.id === screener,
    );
    if (!output) {
      throw new Error(`Screener ${screener} not found`);
    }
    return output.url;
  }

  /**
   * Given a Finviz screener url, returns an array of symbols
   * @param {string} screener - Finviz screener name or url
   * @returns {string[]} - array of stock symbols
   */
  async getScreener(screener: string): Promise<string[]> {
    let url = screener;
    if (!isUrl(url)) {
      url = await this.getUrlForScreener(screener);
    }
    if (this.screenerCache.has(url)) {
      return this.screenerCache.get(url) as string[];
    }
    const { data } = await this.api.get(url);
    const results = Finviz.parseScreenerResponse(data);
    this.screenerCache.set(url, results);
    return results;
  }
}

export default Finviz;

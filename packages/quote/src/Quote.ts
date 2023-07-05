import finviz from '@stonksjs/finviz';
import Cache from './Cache';
import { type Quote as QuoteType } from './types';

export class Quote {
  cache: Cache = new Cache();

  async get(symbol: string): Promise<QuoteType> {
    if (this.cache.has(symbol)) {
      return this.cache.get(symbol) as QuoteType;
    }
    const results = await finviz.getQuote(symbol);
    this.cache.set(symbol, results);
    return results;
  }
}

export default Quote;

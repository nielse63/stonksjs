import finviz, { Quote as TQuote } from '@stonksjs/finviz';
import Cache from './Cache';

export class Quote {
  cache: Cache = new Cache();

  async get(symbol: string): Promise<TQuote> {
    if (this.cache.has(symbol)) {
      return this.cache.get(symbol) as TQuote;
    }
    const results = finviz.getQuote(symbol) as TQuote;
    this.cache.set(symbol, results);
    return results;
  }
}

export default Quote;

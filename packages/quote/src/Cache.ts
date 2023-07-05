/* eslint-disable class-methods-use-this */
import { Quote } from '@stonksjs/finviz';

export class Cache {
  static __cache: Map<string, Quote>;

  constructor() {
    if (!Cache.__cache) {
      Cache.__cache = new Map();
    }
  }

  clear() {
    Cache.__cache.clear();
  }

  has(key: string): boolean {
    return Cache.__cache.has(key);
  }

  get(key: string): Quote {
    return Cache.__cache.get(key);
  }

  set(key: string, value: unknown): Map<string, Quote> {
    return Cache.__cache.set(key, value);
  }
}

export default Cache;

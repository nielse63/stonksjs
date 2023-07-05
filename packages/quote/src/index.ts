/**
 * Detailed, real-time stock quote data
 * @module @stonksjs/quote
 * @typicalname quote
 */
import Quote from './Quote';

export { Quote };
export const quote = new Quote();
export const getQuote = quote.get.bind(quote);

export default quote;

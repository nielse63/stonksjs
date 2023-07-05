import Quote from './Quote';

export const quote = new Quote();
export const getQuote = quote.get.bind(quote);

export default quote;

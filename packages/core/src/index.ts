import { Finviz } from '@stonksjs/finviz';
import quote from '@stonksjs/quote';
import stockScreener from '@stonksjs/stock-screener';

const finviz = new Finviz();

export { finviz, quote, stockScreener };

export default {
  finviz,
  quote,
  stockScreener,
};

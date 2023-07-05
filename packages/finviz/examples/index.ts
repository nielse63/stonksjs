import * as finviz from '../src';

const getQuote = async () => {
  const quote = await finviz.quote('AAPL');
  console.log(quote);
};

const getScreener = async () => {
  const results = await finviz.screener(
    'https://finviz.com/screener.ashx?v=111&s=ta_topgainers',
  );
  console.log(results);
};

const getScreenersList = async () => {
  const results = await finviz.getScreenersList();
  console.log(results);
};

getQuote().catch(console.error);
getScreener().catch(console.error);
getScreenersList().catch(console.error);

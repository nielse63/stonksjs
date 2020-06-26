const { Data: { Query } } = require('algotrader');
const axios = require('axios');
const _ = require('lodash');
const df = require('data-forge');
const env = require('./env');
const { TICKERS: TickerConstants } = require('./constants');
const Backtest = require('./Backtest');
const Portfolio = require('./Portfolio');
const Account = require('./Account');

const creds = {
  keyId: env.ALPACA_API_KEY,
  secretKey: env.ALPACA_API_SECRET,
  paper: env.ALPACA_PAPER_TRADING,
};

// script is based on this article: https://medium.com/datadriveninvestor/create-the-ultimate-stock-investing-portfolio-with-machine-learning-1f8034648211

(async () => {
  const account = new Account(
    env.ROBINHOOD_USERNAME,
    env.ROBINHOOD_PASSWORD,
    env.ROBINHOOD_DEVICE_TOKEN,
  );
  const buyingPower = await account.getBuyingPower();
  if (!buyingPower) {
    console.log('no buying power - exiting');
    return;
  }

  const portfolio = new Portfolio(
    env.ROBINHOOD_USERNAME,
    env.ROBINHOOD_PASSWORD,
    env.ROBINHOOD_DEVICE_TOKEN,
  );
  // const portfolioSymbols = await portfolio.getSymbols();
  const recs = [];
  const trending = await Query.getTrendingSymbols(15);
  // const eftQuotes = await Query.getTopETFs(15);
  // const efts = eftQuotes.map(({ symbol }) => symbol);
  const tickers = [
    ...trending,
    // ...efts,
    ...TickerConstants,
    // 'IWB',
    // 'IWR',
    // 'IWM',
    // 'EFA',
    // 'EEM',
    // 'TIP',
    // 'TLT',
    // 'IEF',
    // 'SHY',
    // 'LQD',
    // 'IYR',
    // 'GLD',
    // 'GSG',
  ]
    .filter((symbol) => !symbol.includes('.'));
  for (const symbol of tickers) {
    try {
      const url = `https://query2.finance.yahoo.com/v10/finance/quoteSummary/${symbol}?formatted=true&crumb=swg7qs5y9UP&lang=en-US&region=US&modules=upgradeDowngradeHistory,recommendationTrend,financialData,earningsHistory,earningsTrend,industryTrend&corsDomain=finance.yahoo.com`;
      const { data } = await axios(url);
      const result = data.quoteSummary.result[0];

      // buy if if recommendationMean < 2
      // sell if if recommendationMean > 4
      const price = _.get(result, 'financialData.currentPrice.raw');
      const recommendationMean = _.get(result, 'financialData.recommendationMean.raw');
      const recommendationKey = _.get(result, 'financialData.recommendationKey');
      recs.push({
        symbol,
        price,
        recommendationMean,
        recommendationKey,
      });
    } catch (error) {}
  }
  const recommendations = new df.DataFrame(recs)
    .where(({ recommendationMean }) => !!recommendationMean)
    .where(({ recommendationMean }) => recommendationMean < 2)
    .orderBy((row) => row.recommendationMean)
    .toArray();
  console.log(`found ${recommendations.length} recommendations`);

  const assetsToBuy = [];
  for (const rec of recommendations) {
    const { symbol } = rec;
    const backtest = new Backtest(symbol, creds);
    const results = await backtest.sma();
    const profitPct = _.get(results, 'analysis.profitPct', 0);
    if (profitPct > 10) {
      assetsToBuy.push({
        ...rec,
        profitPct,
      });
    }
  }
  console.log(`attempting to purchase ${assetsToBuy.length} assets`);

  const assetsLength = assetsToBuy.length;
  if (!assetsLength) {
    console.log('no assets recommended to buy');
  }

  const amountAvailablePerAsset = buyingPower / assetsToBuy.length;
  await account.user.cancelOpenOrders();
  for (const asset of assetsToBuy) {
    const { symbol, price } = asset;
    const quantity = Math.floor(parseFloat((amountAvailablePerAsset / price).toFixed(2)));
    console.log(`purchasing ${quantity} shaares of ${symbol}`);
    if (quantity) {
      const order = await portfolio.buy(symbol, {
        quantity,
        type: 'limit',
      });
      console.log(order);
    }
  }
})();

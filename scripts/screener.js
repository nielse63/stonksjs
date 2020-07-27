#!/usr/bin/env node
require('dotenv').config();
const { Data: { Query } } = require('algotrader');
const debug = require('debug')('stonks:screener');
const axios = require('axios');
const _ = require('lodash');
const fs = require('fs-extra');
const path = require('path');
const df = require('data-forge');
const getFinvizData = require('./finviz');
const backtest = require('./backtest');

const getTrendingSymbols = async () => {
  const trending = await Query.getTrendingSymbols(100);
  const tickers = trending
    .filter((symbol) => !symbol.includes('.'));
  const output = [...new Set(tickers)];
  return output;
};

const getAssetData = async (symbol) => {
  const url = `https://query2.finance.yahoo.com/v10/finance/quoteSummary/${symbol}?formatted=true&crumb=swg7qs5y9UP&lang=en-US&region=US&modules=upgradeDowngradeHistory,recommendationTrend,financialData,earningsHistory,earningsTrend,industryTrend&corsDomain=finance.yahoo.com`;
  const { data } = await axios(url);
  const result = _.get(data, 'quoteSummary.result[0]');
  return result;
};

const sortRecommendations = (array) => {
  const results = new df.DataFrame(array)
    .orderBy((row) => row.recommendationMean)
    .where(({ recommendationMean }) => recommendationMean && recommendationMean < 2)
    .toArray();
  return results;
};

const getRecommendations = async (trending, screenerResults) => {
  const symbols = [...new Set([
    ...trending,
    ...screenerResults,
  ])];
  const recommendations = [];
  for (const symbol of symbols) {
    try {
      const result = await getAssetData(symbol);

      const recommendationMean = _.get(result, 'financialData.recommendationMean.raw', 6);
      if (recommendationMean <= 2) {
        const price = _.get(result, 'financialData.currentPrice.raw');
        const recommendationKey = _.get(result, 'financialData.recommendationKey', '');
        recommendations.push({
          symbol,
          price,
          recommendationMean,
          recommendationKey,
        });
      }
    } catch (error) {}
  }
  const sorted = sortRecommendations(recommendations);
  return sorted.slice(0, 5);
};

const saveRecommendations = (json) => {
  const dirpath = path.join(__dirname, 'data');
  const filepath = path.join(dirpath, 'screener.json');
  fs.ensureDirSync(dirpath);
  fs.writeJsonSync(filepath, json);
  debug('saved recommendations to `./screener.json`');
};

const screener = async () => {
  debug('running screener.js');
  const url = 'https://finviz.com/screener.ashx?v=112&f=an_recom_buybetter,exch_nyse,fa_epsyoy_high,fa_pe_u20,fa_peg_low,geo_usa&ft=4&o=-change';
  const screenerResults = await getFinvizData(url);
  const trending = await getTrendingSymbols();
  const universe = await getRecommendations(trending, screenerResults);
  saveRecommendations(universe);
  const recommendations = await backtest();
  return recommendations;
};

if (!module.parent) {
  (async () => {
    await screener();
  })();
}

module.exports = screener;

import get from 'lodash/get';
import { filters, isValidFilter, request } from './helpers';

type ScreenerQuote = {
  currency: string;
  timeLastUpdated: string;
  market: string;
  country: string;
  symbol: string;
  securityType: number;
  shortName: string;
  displayName: string;
  offeringStatus: number;
  exchangeName: string;
  exchangeCode: string;
  marketCapCurrency: string;
  marketCapSort: number;
  marketCap: number;
  icon: string;
  sourceExchangeName: string;
  sourceExchangeCode: string;
  return1Year: number;
  returnYTD: number;
  return6Month: number;
  return3Month: number;
  return1Month: number;
  return1Week: number;
  priceChange1Year: number;
  priceChangeYTD: number;
  priceChange6Month: number;
  priceChange3Month: number;
  priceChange1Month: number;
  priceChange1Week: number;
  yieldPercent: number;
  priceChangePreMarketPercent: number;
  priceChangePreMarket: number;
  pricePreMarket: number;
  price52wLow: number;
  price52wHigh: number;
  priceChangePercent: number;
  averageVolume: number;
  accumulatedVolume: number;
  bidSize: number;
  priceBid: number;
  askSize: number;
  priceAsk: number;
  datePreviousClose: string;
  pricePreviousClose: number;
  priceDayOpen: number;
  timeLastTraded: string;
  priceDayLow: number;
  priceDayHigh: number;
  priceChange: number;
  price: number;
};

const KEYS_TO_IGNORE = [
  'id',
  'localizedAttributes',
  'instrumentId',
  'exchangeId',
];

export const parseResponse = (json): ScreenerQuote[] => {
  const array = get(json, 'lists[0].quotes', []);
  return array.map((item) => {
    return Object.entries(item).reduce((output, [key, value]) => {
      if (key.startsWith('_') || KEYS_TO_IGNORE.includes(key)) {
        return { ...output };
      }
      return {
        [key]: value,
        ...output,
      };
    }, {});
  });
};

export const getScreenerResults = async (filter): Promise<ScreenerQuote[]> => {
  if (!isValidFilter(filter)) {
    return Promise.reject(new Error(`${filter} is not a valid option`));
  }
  const url = filters[filter];
  const json = await request(url);
  const quotes = parseResponse(json);
  return quotes;
};

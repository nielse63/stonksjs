import axios from 'axios';
import isObject from 'lodash/isObject';

export const filters = {
  HIGH_YIELD_DIVIDENDS:
    'https://assets.msn.com/service/Finance/ListPages/Details?apikey=0QfOX3Vn51YCzitbLaRkTTBadtWpgTN8NZLW0C1SEM&activityId=635B1710-D358-4A84-BFC8-1BF80418FFA6&ocid=finance-utils-peregrine&cm=en-us&it=web&listIds=4210ebac6782&wrapodata=false&requireQuoteDetail=true',
  BULLISH:
    'https://assets.msn.com/service/Finance/ListPages/Details?apikey=0QfOX3Vn51YCzitbLaRkTTBadtWpgTN8NZLW0C1SEM&activityId=FAA9BF29-5C7B-4CCD-AEC4-8AA76D9B066B&ocid=finance-utils-peregrine&cm=en-us&it=web&listIds=938eb9e4f4d5&wrapodata=false&requireQuoteDetail=true',
  '52_WEEK_HIGHS':
    'https://assets.msn.com/service/Finance/ListPages/Details?apikey=0QfOX3Vn51YCzitbLaRkTTBadtWpgTN8NZLW0C1SEM&activityId=3A6671F6-3F02-4969-B628-2F3711E12FF8&ocid=finance-utils-peregrine&cm=en-us&it=web&listIds=332e27279f36&wrapodata=false&requireQuoteDetail=true',
  '52_WEEK_LOWS':
    'https://assets.msn.com/service/Finance/ListPages/Details?apikey=0QfOX3Vn51YCzitbLaRkTTBadtWpgTN8NZLW0C1SEM&activityId=20A41E95-37A1-41AF-9907-2CBC316D9AA8&ocid=finance-utils-peregrine&cm=en-us&it=web&listIds=4c3298bcd920&wrapodata=false&requireQuoteDetail=true',
  HIGH_REVENUE_GROWTH:
    'https://assets.msn.com/service/Finance/ListPages/Details?apikey=0QfOX3Vn51YCzitbLaRkTTBadtWpgTN8NZLW0C1SEM&activityId=6FED85C8-986F-45AA-B2C7-3CE12FCDD1F1&ocid=finance-utils-peregrine&cm=en-us&it=web&listIds=944c649152e8&wrapodata=false&requireQuoteDetail=true',
  GROWTH_STOCKS:
    'https://assets.msn.com/service/Finance/ListPages/Details?apikey=0QfOX3Vn51YCzitbLaRkTTBadtWpgTN8NZLW0C1SEM&activityId=592BF0F5-290A-4797-84FD-E44271DAEEF6&ocid=finance-utils-peregrine&cm=en-us&it=web&listIds=b2340b8c101f&wrapodata=false&requireQuoteDetail=true',
};

export const listFilters = () => Object.keys(filters);

export const isValidFilter = (filter) => listFilters().includes(filter);

export const request = async (url) => {
  try {
    const { data } = await axios.get(url);
    if (!isObject(data)) {
      throw new Error(`Invalid response data type: ${typeof data}`);
    }
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
};

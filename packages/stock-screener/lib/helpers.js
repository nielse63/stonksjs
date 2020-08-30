const { StonksAPI } = require('@stonksjs/api');

const filters = {
  HIGH_YIELD_DIVIDENDS:
    'https://www.msn.com/en-us/money/getfilterresponse?filters=Ar%7CBuy%3BHold~Country%7CUSA&ranges=Dy%7C4%3B110~Mc%7C5000000000%3B610979266062&sortedby=Dy&sortorder=DSC&count=20&offset=0&market=USA&sectype=Stock',
  BARGAIN_STOCKS:
    'https://www.msn.com/en-us/money/getfilterresponse?filters=Ar%7CBuy%3BHold~Country%7CUSA&ranges=Dy%7C1%3B110~Pe%7C-100%3B15&sortedby=Mc&sortorder=DSC&count=100&offset=0&market=USA&sectype=Stock',
  BLUE_CHIPS:
    'https://www.msn.com/en-us/money/getfilterresponse?filters=Ar%7CBuy%3BHold~Country%7CUSA&ranges=Mc%7C1000000000%3B610979266062000~Dy%7C1%3B110~Roe%7C10%3B100~Pe%7C-10100%3B30&sortedby=Av&sortorder=DSC&count=100&offset=0&market=USA&sectype=Stock',
  '52_WEEK_HIGHS':
    'https://www.msn.com/en-us/money/getfilterresponse?filters=DiffYhDh%7CYes~ExSn%7CNAS%3BNYS%3BARCX~Country%7CUSA&ranges=Mc%7C0.01%3B781485682000000&sortedby=Mc&sortorder=DSC&count=100&offset=0&market=USA&sectype=Stock',
  '52_WEEK_LOWS':
    'https://www.msn.com/en-us/money/getfilterresponse?filters=DiffYlDl%7CYes~ExSn%7CNAS%3BNYS%3BARCX~Country%7CUSA&ranges=&sortedby=Mc&sortorder=DSC&count=100&offset=0&market=USA&sectype=Stock',
  PRICE_SHOCKERS:
    'https://www.msn.com/en-us/money/getfilterresponse?filters=ExSn%7CNAS%3BNYS%3BARCX~Country%7CUSA&ranges=Chp%7C10%3B150&sortedby=Chp&sortorder=DSC&count=100&offset=0&market=USA&sectype=Stock',
  TECH_GIANTS:
    'https://www.msn.com/en-us/money/getfilterresponse?filters=Sec%7CTechnology~Country%7CUSA&ranges=Mc%7C5000000000%3B610979266062~Re1YrGr%7C5%3B60&sortedby=Mc&sortorder=DSC&count=100&offset=0&market=USA&sectype=Stock',
};

const listFilters = () => Object.keys(filters);

const isValidFilter = (filter) => listFilters().includes(filter);

const request = async (url) => {
  const api = new StonksAPI();
  const { data, error } = await api.get(url);
  if (error) {
    return Promise.reject(new Error(error));
  }
  return data;
};

module.exports = {
  filters,
  listFilters,
  isValidFilter,
  request,
};

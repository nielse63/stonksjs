import quote from '..';

const symbol = 'MSFT';
const expectedKeys = [
  '52WHigh',
  '52WLow',
  '52WRange',
  'atr',
  'avgVolume',
  'beta',
  'bookSh',
  'cashSh',
  'change',
  'currentRatio',
  'debtEq',
  'dividend',
  'earnings',
  'employees',
  'epsNext5Y',
  'epsNextQ',
  'epsNextY',
  'epsPast5Y',
  'epsQQ',
  'epsThisY',
  'epsTtm',
  'forwardPE',
  'grossMargin',
  'income',
  'index',
  'insiderOwn',
  'insiderTrans',
  'instOwn',
  'instTrans',
  'ltDebtEq',
  'marketCap',
  'operMargin',
  'optionable',
  'pB',
  'pC',
  'pE',
  'pFcf',
  'pS',
  'payout',
  'peg',
  'perfHalfY',
  'perfMonth',
  'perfQuarter',
  'perfWeek',
  'perfYear',
  'perfYtd',
  'prevClose',
  'price',
  'profitMargin',
  'quickRatio',
  'recom',
  'relVolume',
  'roa',
  'roe',
  'roi',
  'rsi14',
  'sales',
  'salesPast5Y',
  'salesQQ',
  'shortFloatRatio',
  'shortInterest',
  'shortable',
  'shsFloat',
  'shsOutstand',
  'sma20',
  'sma200',
  'sma50',
  'targetPrice',
  'volatility',
  'volume',
];

describe('@stonksjs/quote', () => {
  it('should be a function', () => {
    expect(quote).toBeFunction();
  });

  it('should return an object', async () => {
    const response = await quote(symbol);
    expect(response).toBeObject();
  });

  it('response should have all expected keys', async () => {
    const response = await quote(symbol);
    expect(response).toContainKeys(expectedKeys);
  });
});

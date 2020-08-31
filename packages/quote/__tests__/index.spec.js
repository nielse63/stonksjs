const quote = require('..');

const expectedKeys = [
  'index',
  'pE',
  'epsTtm',
  'insiderOwn',
  'shsOutstand',
  'perfWeek',
  'marketCap',
  'forwardPE',
  'epsNextY',
  'insiderTrans',
  'shsFloat',
  'perfMonth',
  'income',
  'peg',
  'epsNextQ',
  'instOwn',
  'shortFloat',
  'perfQuarter',
  'sales',
  'pS',
  'epsThisY',
  'instTrans',
  'shortRatio',
  'perfHalfY',
  'bookSh',
  'pB',
  'roa',
  'targetPrice',
  'perfYear',
  'cashSh',
  'pC',
  'epsNext5Y',
  'roe',
  '52WRange',
  'perfYtd',
  'dividend',
  'pFcf',
  'epsPast5Y',
  'roi',
  '52WHigh',
  'beta',
  'quickRatio',
  'salesPast5Y',
  'grossMargin',
  '52WLow',
  'atr',
  'employees',
  'currentRatio',
  'salesQQ',
  'operMargin',
  'rsi14',
  'volatility',
  'optionable',
  'debtEq',
  'epsQQ',
  'profitMargin',
  'relVolume',
  'prevClose',
  'shortable',
  'ltDebtEq',
  'earnings',
  'payout',
  'avgVolume',
  'price',
  'recom',
  'sma20',
  'sma50',
  'sma200',
  'volume',
  'change',
];

describe('@stonksjs/quote', () => {
  it('should be a function', () => {
    expect(quote).toBeFunction();
  });

  it('should return an object', async () => {
    const response = await quote('MSFT');
    expect(response).toBeObject();
  });

  it('response should have all expected keys', async () => {
    const response = await quote('MSFT');
    expect(response).toContainKeys(expectedKeys);
  });
});

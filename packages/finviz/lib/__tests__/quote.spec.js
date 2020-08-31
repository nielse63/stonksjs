const quote = require('../quote');

const symbol = 'AACG';
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

describe('quote', () => {
  it('should be defined', () => {
    expect(quote).toBeFunction();
  });

  it('should return an object of data', async () => {
    const response = await quote(symbol);
    expect(response).toBeObject();
  });

  it('data should have all expected keys', async () => {
    const response = await quote(symbol);
    expect(response).toContainKeys(expectedKeys);
  });
});

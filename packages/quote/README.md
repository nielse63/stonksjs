# @stonksjs/quote

> Detailed, real-time stock quote data

## Installation

```bash
npm install --save @stonksjs/quote
```

## Usage

```js
import quote, { getQuote } from '@stonksjs/quote';

// get stock quote data
const data = await quote('MSFT');

// alias of `quote` function
const data = await getQuote('MSFT');
```

### Response Schema

The response schema for the `quote` function is as follows:

```ts
type Quote = {
  index: string;
  pE: number;
  epsTtm: number;
  insiderOwn: string;
  shsOutstand: string;
  perfWeek: string;
  marketCap: string;
  forwardPE: number;
  epsNextY: string;
  insiderTrans: string;
  shsFloat: string;
  perfMonth: string;
  income: string;
  peg: number;
  epsNextQ: number;
  instOwn: string;
  shortFloatRatio: string;
  perfQuarter: string;
  sales: string;
  pS: number;
  epsThisY: string;
  instTrans: string;
  shortInterest: string;
  perfHalfY: string;
  bookSh: number;
  pB: number;
  roa: string;
  targetPrice: number;
  perfYear: string;
  cashSh: number;
  pC: number;
  epsNext5Y: string;
  roe: string;
  '52WRange': string;
  perfYtd: string;
  dividend: string;
  pFcf: number;
  epsPast5Y: string;
  roi: string;
  '52WHigh': string;
  beta: number;
  quickRatio: number;
  salesPast5Y: string;
  grossMargin: string;
  '52WLow': string;
  atr: number;
  employees: number;
  currentRatio: number;
  salesQQ: string;
  operMargin: string;
  rsi14: number;
  volatility: string;
  optionable: string;
  debtEq: number;
  epsQQ: string;
  profitMargin: string;
  relVolume: number;
  prevClose: number;
  shortable: string;
  ltDebtEq: number;
  earnings: string;
  payout: string;
  avgVolume: string;
  price: number;
  recom: number;
  sma20: string;
  sma50: string;
  sma200: string;
  volume: number;
  change: string;
};
```

## API

Full API docs can be found at
[`docs/modules`](https://github.com/nielse63/stonksjs/blob/main/packages/quote/docs/modules.md)

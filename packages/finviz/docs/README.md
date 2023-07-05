@stonksjs/finviz / [Exports](modules.md)

# @stonksjs/finviz

> Unofficial finviz API

![npm (scoped)](https://img.shields.io/npm/v/@stonksjs/finviz?color=brightgreen&style=flat-square)

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
  - [Available Screener Filters](#available-screener-filters)
  - [Quote Response Schema](#quote-response-schema)
- [API](#api)

## Features

- Get detailed company financial data
- Use the URL from a custom finviz screener fetch the results in node

## Installation

```bash
npm install --save @stonksjs/finviz
```

## Usage

```js
import finviz from '@stonksjs/finviz';

// get company financial data
const data = await finviz.getQuote('MSFT');

// get results from a pre-defined finviz screener
const symbols = await finviz.getScreener('Top Gainers');
```

### Available Screener Filters

- [Top Gainers](https://finviz.com/screener.ashx?v=111&s=ta_topgainers)
- [Top Losers](https://finviz.com/screener.ashx?v=111&s=ta_toplosers)
- [New High](https://finviz.com/screener.ashx?v=111&s=ta_newhigh)
- [New Low](https://finviz.com/screener.ashx?v=111&s=ta_newlow)
- [Most Volatile](https://finviz.com/screener.ashx?v=111&s=ta_mostvolatile)
- [Most Active](https://finviz.com/screener.ashx?v=111&s=ta_mostactive)
- [Unusual Volume](https://finviz.com/screener.ashx?v=111&s=ta_unusualvolume)
- [Overbought](https://finviz.com/screener.ashx?v=111&s=ta_overbought)
- [Oversold](https://finviz.com/screener.ashx?v=111&s=ta_oversold)
- [Downgrades](https://finviz.com/screener.ashx?v=111&s=n_downgrades)
- [Upgrades](https://finviz.com/screener.ashx?v=111&s=n_upgrades)
- [Earnings Before](https://finviz.com/screener.ashx?v=111&s=n_earningsbefore)
- [Earnings After](https://finviz.com/screener.ashx?v=111&s=n_earningsafter)
- [Recent Insider Buying](https://finviz.com/screener.ashx?v=111&s=it_latestbuys)
- [Recent Insider Selling](https://finviz.com/screener.ashx?v=111&s=it_latestsales)
- [Major News](https://finviz.com/screener.ashx?v=111&s=n_majornews)
- [Horizontal S/R](https://finviz.com/screener.ashx?v=111&s=ta_p_horizontal)
- [TL Resistance](https://finviz.com/screener.ashx?v=111&s=ta_p_tlresistance)
- [TL Support](https://finviz.com/screener.ashx?v=111&s=ta_p_tlsupport)
- [Wedge Up](https://finviz.com/screener.ashx?v=111&s=ta_p_wedgeup)
- [Wedge Down](https://finviz.com/screener.ashx?v=111&s=ta_p_wedgedown)
- [Triangle Ascending](https://finviz.com/screener.ashx?v=111&s=ta_p_wedgeresistance)
- [Triangle Descending](https://finviz.com/screener.ashx?v=111&s=ta_p_wedgesupport)
- [Wedge](https://finviz.com/screener.ashx?v=111&s=ta_p_wedge)
- [Channel Up](https://finviz.com/screener.ashx?v=111&s=ta_p_channelup)
- [Channel Down](https://finviz.com/screener.ashx?v=111&s=ta_p_channeldown)
- [Channel](https://finviz.com/screener.ashx?v=111&s=ta_p_channel)
- [Double Top](https://finviz.com/screener.ashx?v=111&s=ta_p_doubletop)
- [Double Bottom](https://finviz.com/screener.ashx?v=111&s=ta_p_doublebottom)
- [Multiple Top](https://finviz.com/screener.ashx?v=111&s=ta_p_multipletop)
- [Multiple Bottom](https://finviz.com/screener.ashx?v=111&s=ta_p_multiplebottom)
- [Head & Shoulders](https://finviz.com/screener.ashx?v=111&s=ta_p_headandshoulders)
- [Head & Shoulders Inverse](https://finviz.com/screener.ashx?v=111&s=ta_p_headandshouldersinv)

### Quote Response Schema

The response schema for the `getQuote` function is as follows:

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

Full API docs can be found at [`docs/modules`](./docs/modules.md)

# @stonksjs/finviz

> Unofficial finviz API

![npm (scoped)](https://img.shields.io/npm/v/@stonksjs/finviz?color=brightgreen&style=flat-square)

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
- [Response schema](#response-schema)

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
const data = await finviz.quote('MSFT');

// get results from a custom finviz screener
const symbols = await finviz.screener(
  'https://finviz.com/screener.ashx?v=111&s=ta_topgainers',
);
```

## API

Full API docs can be found at
[https://nielse63.github.io/stonksjs](https://nielse63.github.io/stonksjs/modules/_stonksjs_finviz.html)

## Response schema

```js
// pulled from https://finviz.com/quote.ashx?t=AACG
{
  index: '',
  pE: '',
  epsTtm: '',
  insiderOwn: '',
  shsOutstand: '',
  perfWeek: '',
  marketCap: '',
  forwardPE: '',
  epsNextY: '',
  insiderTrans: '',
  shsFloat: '',
  perfMonth: '',
  income: '',
  peg: '',
  epsNextQ: '',
  instOwn: '',
  shortFloat: '',
  perfQuarter: '',
  sales: '',
  pS: '',
  epsThisY: '',
  instTrans: '',
  shortRatio: '',
  perfHalfY: '',
  bookSh: '',
  pB: '',
  roa: '',
  targetPrice: '',
  perfYear: '',
  cashSh: '',
  pC: '',
  epsNext5Y: '',
  roe: '',
  '52WRange': '',
  perfYtd: '',
  dividend: '',
  pFcf: '',
  epsPast5Y: '',
  roi: '',
  '52WHigh': '',
  beta: '',
  quickRatio: '',
  salesPast5Y: '',
  grossMargin: '',
  '52WLow': '',
  atr: '',
  employees: '',
  currentRatio: '',
  salesQQ: '',
  operMargin: '',
  rsi14: '',
  volatility: '',
  optionable: '',
  debtEq: '',
  epsQQ: '',
  profitMargin: '',
  relVolume: '',
  prevClose: '',
  shortable: '',
  ltDebtEq: '',
  earnings: '',
  payout: '',
  avgVolume: '',
  price: '',
  recom: '',
  sma20: '',
  sma50: '',
  sma200: '',
  volume: '',
  change: ''
}
```

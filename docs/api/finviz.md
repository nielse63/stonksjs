# @stonksjs/finviz

> Stock screener and company data from finviz

![npm (scoped)](https://img.shields.io/npm/v/@stonksjs/finviz?color=brightgreen&style=flat-square)

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
  - [finviz.quote(symbol) ⇒ Promise](#finvizquotesymbol--promise)
  - [finviz.screener(url) ⇒ Promise](#finvizscreenerurl--promise)
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
const finviz = require('@stonksjs/finviz');

// get company financial data
const data = await finviz.quote('MSFT');
// see below for example response object

// get results from a custom finviz screener
const symbols = await finviz.screener(
  'https://finviz.com/screener.ashx?v=111&s=ta_topgainers',
);
// ['AAPL', 'MSFT', 'TSLA', ...]
```

## API

**Example**

```js
const finviz = require('@stonksjs/finviz');
```

### finviz.quote(symbol) ⇒ <code>Promise</code>

Get detailed company financial data

<!-- prettier-ignore-start -->
**Kind**: static method of [<code>@stonksjs/finviz</code>](#module_@stonksjs/finviz)
**Returns**: <code>Promise</code> - resolves to a plain object, rejects with an Error
**Fulfil**: <code>object</code> - company financial data
**Reject**: <code>Error</code>
**See**: [Response schema](#response-schema)
<!-- prettier-ignore-end -->

| Param  | Type                | Description                  |
| ------ | ------------------- | ---------------------------- |
| symbol | <code>string</code> | ticker symbol of the company |

**Example**

```js
const data = await finviz.quote('MSFT'); // {Promise<object>}
```

### finviz.screener(url) ⇒ <code>Promise</code>

Get ticker symbols from the results of a custom finviz screener

<!-- prettier-ignore-start -->
**Kind**: static method of [<code>@stonksjs/finviz</code>](#module_@stonksjs/finviz)
**Returns**: <code>Promise</code> - resolves to an array of strings, rejects with an Error
**Fulfil**: <code>string[]</code> - array of ticker symbols for each row of results
**Reject**: <code>Error</code>
<!-- prettier-ignore-end -->

| Param | Type                | Description                                      |
| ----- | ------------------- | ------------------------------------------------ |
| url   | <code>string</code> | the url from the screener page you want to query |

**Example**

```js
const symbols = await finviz.screener(
  'https://finviz.com/screener.ashx?v=111&s=ta_topgainers',
); // {Promise<string[]>}
```

## Response schema

<!-- TODO: update this schedma -->

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

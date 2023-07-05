# @stonksjs/stock-screener

> Pre-defined industry standard stock screeners from Finviz

![npm (scoped)](https://img.shields.io/npm/v/@stonksjs/stock-screener?color=brightgreen&style=flat-square)

- [Installation](#installation)
- [Usage](#usage)
  - [Available Screener Filters](#available-screener-filters)
- [API](#api)

<!-- ## Features

- TODO: add features... -->

## Installation

```bash
npm install --save @stonksjs/stock-screener
```

## Usage

```js
import stockScreener from '@stonksjs/stock-screener';

// get an array of all available filters (see below)
const filters = stockScreener.filters;

// get the symbols found on a high-yield dividend screener
const symbols = await stockScreener(filters.HIGH_YIELD_DIVIDENDS);
```

### Available Screener Filters

- [`HIGH_YIELD_DIVIDENDS`][HIGH_YIELD_DIVIDENDS]
- [`BULLISH`][BULLISH]
- [`52_WEEK_HIGHS`][52_WEEK_HIGHS]
- [`52_WEEK_LOWS`][52_WEEK_LOWS]
- [`HIGH_REVENUE_GROWTH`][HIGH_REVENUE_GROWTH]
- [`GROWTH_STOCKS`][GROWTH_STOCKS]

## API

Full API docs can be found at [`docs/modules`](./docs/modules.md)

<!-- references -->

<!-- prettier-ignore-start -->
[HIGH_YIELD_DIVIDENDS]: https://www.msn.com/en-us/money/listdetails/Highest%205year%20Dividend%20Growth/fl-4210ebac6782?ocid=hpmsn&cvid=09ce823c382944c2929477b2bac8205c&ei=21
[BULLISH]: https://www.msn.com/en-us/money/listdetails/Stocks%20Analysts%20are%20Bullish%20On/fl-938eb9e4f4d5?ocid=hpmsn&cvid=09ce823c382944c2929477b2bac8205c&ei=25
[52_WEEK_HIGHS]: https://www.msn.com/en-us/money/listdetails/52week%20High/fl-332e27279f36?ocid=hpmsn&cvid=09ce823c382944c2929477b2bac8205c&ei=38
[52_WEEK_LOWS]: https://www.msn.com/en-us/money/listdetails/52week%20Low/fl-4c3298bcd920?ocid=hpmsn&cvid=09ce823c382944c2929477b2bac8205c&ei=47
[HIGH_REVENUE_GROWTH]: https://www.msn.com/en-us/money/listdetails/High%20Revenue%20Growth/fl-944c649152e8?ocid=hpmsn&cvid=09ce823c382944c2929477b2bac8205c&ei=88
[GROWTH_STOCKS]: https://www.msn.com/en-us/money/listdetails/Growth%20Stocks/fl-b2340b8c101f?ocid=hpmsn&cvid=09ce823c382944c2929477b2bac8205c&ei=128
<!-- prettier-ignore-end -->

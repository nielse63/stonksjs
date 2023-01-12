# @stonksjs/stock-screener

> Pre-defined industry standard stock screeners from MSN Money

![npm (scoped)](https://img.shields.io/npm/v/@stonksjs/stock-screener?color=brightgreen&style=flat-square)

- [Installation](#installation)
- [Usage](#usage)
  - [Available Screener Filters](#available-screener-filters)
- [API](#api)
  - [@stonksjs/stock-screener](#stonksjsstock-screener)
  - [stockScreener(filter) ⇒ <code>Promise<string[]></code>](#stockscreenerfilter--promisestring)
  - [stockScreener.filters](#stockscreenerfilters)

<!-- ## Features

- TODO: add features... -->

## Installation

```bash
npm install --save @stonksjs/stock-screener
```

## Usage

```js
const stockScreener = require('@stonksjs/stock-screener');

// get an array of all available filters (see below)
const filters = stockScreener.filters;

// get the symbols found on a high-yield dividend screener
const symbols = await stockScreener('HIGH_YIELD_DIVIDENDS');
```

### Available Screener Filters

| Key                    | Results                                                                                                                                          |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `HIGH_YIELD_DIVIDENDS` | [https://www.msn.com/en-us/money/stockscreener/hdys?market=USA](https://www.msn.com/en-us/money/stockscreener/hdys?market=USA)                   |
| `BARGAIN_STOCKS`       | [https://www.msn.com/en-us/money/stockscreener/bargainstck?market=USA](https://www.msn.com/en-us/money/stockscreener/bargainstck?market=USA)     |
| `BLUE_CHIPS`           | [https://www.msn.com/en-us/money/stockscreener/blueblood?market=USA](https://www.msn.com/en-us/money/stockscreener/blueblood?market=USA)         |
| `52_WEEK_HIGHS`        | [https://www.msn.com/en-us/money/stockscreener/52weekhighs?market=USA](https://www.msn.com/en-us/money/stockscreener/52weekhighs?market=USA)     |
| `52_WEEK_LOWS`         | [https://www.msn.com/en-us/money/stockscreener/52weeklows?market=USA](https://www.msn.com/en-us/money/stockscreener/52weeklows?market=USA)       |
| `PRICE_SHOCKS`         | [https://www.msn.com/en-us/money/stockscreener/priceshockers?market=USA](https://www.msn.com/en-us/money/stockscreener/priceshockers?market=USA) |
| `TECH_GIANTS`          | [https://www.msn.com/en-us/money/stockscreener/techtit?market=USA](https://www.msn.com/en-us/money/stockscreener/techtit?market=USA)             |

## API

<a name="module_@stonksjs/stock-screener"></a>

### @stonksjs/stock-screener

Pre-defined industry standard stock screeners from MSN Money

<dl>
<dt><a href="#stockScreener">stockScreener(filter)</a> ⇒ <code>Promise</code></dt>
<dd><p>Fetch the latest results from the stock screener</p>
</dd>
<dt><a href="#filters">stockScreener.filters</a></dt>
<dd><p>A list of available filters to chose from</p></dd>
</dl>

<a name="stockScreener"></a>

### stockScreener(filter) ⇒ <code>Promise<string[]></code>

Fetch the latest results from the stock screener

**Kind**: global function **Returns**: <code>Promise</code> - - the latest
screener data or an error **Fulfil**: <code>string[]</code> - array of ticket
symbols **Reject**: <code>Error</code>

| Param  | Type                | Description                        |
| ------ | ------------------- | ---------------------------------- |
| filter | <code>string</code> | the name of the screener to search |

**Example**

```js
const symbols = await stockScreener('HIGH_YIELD_DIVIDENDS');
```

<a name="filters"></a>

### stockScreener.filters

list of available filters to choose from

**Type**: `Array.string`

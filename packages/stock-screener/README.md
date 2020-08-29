# @stonksjs/stock-screener

> Pre-defined industry standard stock screeners from MSN Money

![npm (scoped)](https://img.shields.io/npm/v/@stonksjs/stock-screener?color=brightgreen&style=flat-square)

- [Installation](#installation)
- [Usage](#usage)
  - [Available Screener Filters](#available-screener-filters)
- [API](#api)
  - [@stonksjs/stock-screener](#stonksjsstock-screener)

<!-- ## Features

- TODO: add features... -->

## Installation

```bash
npm install --save @stonksjs/stock-screener
```

## Usage

```js
const stockScreener = require('@stonksjs/stock-screener');

console.log(stockScreener.screens); // array of available pre-defined filters - see below for values

// get the symbols found on a high-yield dividend screener
const symbols = await stockScreener.get('highYieldDividends');
```

### Available Screener Filters

| Key                  | Results                                                                                                                                          |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `highYieldDividends` | [https://www.msn.com/en-us/money/stockscreener/hdys?market=USA](https://www.msn.com/en-us/money/stockscreener/hdys?market=USA)                   |
| `bargainStocks`      | [https://www.msn.com/en-us/money/stockscreener/bargainstck?market=USA](https://www.msn.com/en-us/money/stockscreener/bargainstck?market=USA)     |
| `blueChips`          | [https://www.msn.com/en-us/money/stockscreener/blueblood?market=USA](https://www.msn.com/en-us/money/stockscreener/blueblood?market=USA)         |
| `high52weeks`        | [https://www.msn.com/en-us/money/stockscreener/52weekhighs?market=USA](https://www.msn.com/en-us/money/stockscreener/52weekhighs?market=USA)     |
| `low52weeks`         | [https://www.msn.com/en-us/money/stockscreener/52weeklows?market=USA](https://www.msn.com/en-us/money/stockscreener/52weeklows?market=USA)       |
| `priceShockers`      | [https://www.msn.com/en-us/money/stockscreener/priceshockers?market=USA](https://www.msn.com/en-us/money/stockscreener/priceshockers?market=USA) |
| `techGiants`         | [https://www.msn.com/en-us/money/stockscreener/techtit?market=USA](https://www.msn.com/en-us/money/stockscreener/techtit?market=USA)             |

To use any of the pre-defined screener filters:

```js
stockScreener.get(<filterName>);
```

## API

<a name="module_@stonksjs/stock-screener"></a>

### @stonksjs/stock-screener

Pre-defined industry standard stock screeners from MSN Money

<a name="module_@stonksjs/stock-screener.screens"></a>

#### stockScreener.screens

**Kind**: static property of
[<code>@stonksjs/stock-screener</code>](#module_@stonksjs/stock-screener) **Properties**

| Type                              | Description                               |
| --------------------------------- | ----------------------------------------- |
| <code>Array.&lt;string&gt;</code> | array of pre-defined stock screener names |

<a name="module_@stonksjs/stock-screener.get"></a>

#### stockScreener.get(filterName) ⇒ <code>Promise</code>

Fetch the latest results from the stock screener

**Kind**: static method of [<code>@stonksjs/stock-screener</code>](#module_@stonksjs/stock-screener)
**Returns**: <code>Promise</code> - - the latest screener data or an error **Fulfil**:
<code>string[]</code> - array of ticket symbols **Reject**: <code>Error</code>

| Param      | Type                | Description                        |
| ---------- | ------------------- | ---------------------------------- |
| filterName | <code>string</code> | the name of the screener to search |

**Example**

```js
const symbols = await stockScreener.get('highYieldDividends');
```

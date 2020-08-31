# @stonksjs/quote

> Detailed real-time stock data

## Installation

```bash
npm install --save @stonksjs/quote
```

## Usage

```js
const quote = require('@stonksjs/quote');

const data = await quote('MSFT'); // object of financial data
```

## API

<a name="module_@stonksjs/quote"></a>

### @stonksjs/quote

<!-- prettier-ignore-start -->
**Kind**: global function
**Returns**: <code>Promise.&lt;object&gt;</code> - - data about the stock
**See**: [Quote response schema](https://nielse63.github.io/stonksjs/#/api/finviz?id=response-schema)
<!-- prettier-ignore-end -->

| Param  | Type                | Description                |
| ------ | ------------------- | -------------------------- |
| symbol | <code>string</code> | ticker symbol of the asset |

**Example**

```js
const quote = require('@stonksjs/quote');

const data = await quote('MSFT'); // object of financial data
```

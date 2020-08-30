# @stonksjs/robinhood-collections

> Get the stock symbols for any Robinhood collection

- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
  - [@stonksjs/robinhood-collections](#stonksjsrobinhood-collections)
    <code>Array.&lt;object&gt;</code>
  - [.getCollection](#module_@stonksjs/robinhood-collections.getCollection) ⇒ <code>Promise</code>

![npm (scoped)](https://img.shields.io/npm/v/@stonksjs/robinhood-collections?color=brightgreen&style=flat-square)

## Installation

```bash
npm install --save @stonksjs/robinhood-collections
```

## Usage

```js
const robinhoodCollections = require('@stonksjs/robinhood-collections');

// get all valid Robinhood collections
console.log(robinhoodCollections.collections); // [{ id: '100-most-popular', name: '100 Most Popular'}, ...]

const symbols = await robinhoodCollections.getCollection('reit'); // returns array of ticket symbols
```

## API

<a name="module_@stonksjs/robinhood-collections"></a>

### @stonksjs/robinhood-collections

Get the stock symbols for any Robinhood collection

<a name="module_@stonksjs/robinhood-collections.collections"></a>

#### robinhoodCollections.collections : <code>Array.&lt;object&gt;</code>

An array of Robinhood collections, including the name and id

**Kind**: static property of
[<code>@stonksjs/robinhood-collections</code>](#module_@stonksjs/robinhood-collections) **Example**

```js
[
  { id: '100-most-popular', name: '100 Most Popular' },
  { id: 'upcoming-earnings', name: 'Upcoming Earnings' },
  { id: 'new-on-robinhood', name: 'New On Robinhood' },
  { id: 'technology', name: 'Technology' },
  { id: 'oil-and-gas', name: 'Oil and Gas' },
  { id: 'finance', name: 'Finance' },
  { id: 'software-service', name: 'Software Service' },
  { id: 'energy', name: 'Energy' },
  { id: 'manufacturing', name: 'Manufacturing' },
  { id: 'consumer-product', name: 'Consumer Products' },
  { id: 'etf', name: 'ETF' },
  { id: 'video-game', name: 'Video Games' },
  { id: 'social-media', name: 'Social Media' },
  { id: 'health', name: 'Health' },
  { id: 'entertainment', name: 'Entertainment' },
  { id: 'internet', name: 'Internet' },
  { id: 'electronics', name: 'Electronics' },
  { id: 'semiconductor', name: 'Semiconductors' },
  { id: 'pharmaceutical', name: 'Pharmaceutical' },
  { id: 'retail', name: 'Retail' },
  { id: 'automotive', name: 'Automotive' },
  { id: 'reit', name: 'REIT' },
  { id: 'banking', name: 'Banking' },
  { id: 'food', name: 'Food' },
  { id: 'material', name: 'Materials' },
  { id: 'aerospace', name: 'Aerospace' },
];
```

<a name="module_@stonksjs/robinhood-collections.getCollection"></a>

#### robinhoodCollections.getCollection ⇒ <code>Promise</code>

Get the ticker symbols from a given Robinhood collection

**Kind**: static property of
[<code>@stonksjs/robinhood-collections</code>](#module_@stonksjs/robinhood-collections) **Returns**:
<code>Promise</code> - - array of ticket symbols from the collection **Fulfil**:
<code>object</code> - company financial data **Reject**: <code>Error</code>

| Param      | Type                | Description                      |
| ---------- | ------------------- | -------------------------------- |
| collection | <code>string</code> | the id of a robinhood collection |

**Example**

```js
const robinhoodCollections = require('@stonksjs/robinhood-collections');
const symbols = await robinhoodCollections.getCollection('reit');
```

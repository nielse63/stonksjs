# API

## Classes

<dl>
<dt><a href="#StonksQuote">StonksQuote</a></dt>
<dd><p>Object representing a single financial instrument, given a valid ticker symbol is provided</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#Fundamentals">Fundamentals</a> : <code>object</code></dt>
<dd></dd>
</dl>

<a name="StonksQuote"></a>

## StonksQuote

Object representing a single financial instrument, given a valid ticker symbol is provided

**Kind**: global class

- [StonksQuote](#StonksQuote)
  - [new StonksQuote(symbol)](#new_StonksQuote_new)
  - [.getFundamentals([refresh])](#StonksQuote+getFundamentals) ⇒
    [<code>Fundamentals</code>](#Fundamentals)

<a name="new_StonksQuote_new"></a>

### new StonksQuote(symbol)

Creates an instance of StonksQuote.

| Param  | Type                | Description                  |
| ------ | ------------------- | ---------------------------- |
| symbol | <code>string</code> | Ticker symbol for instrument |

**Example**

```js
const StonksQuote = require('@stonksjs/quote');

const quote = new StonksQuote('MSFT');
const fundamentals = await quote.getFundamentals();
```

<a name="StonksQuote+getFundamentals"></a>

### stonksQuote.getFundamentals([refresh]) ⇒ [<code>Fundamentals</code>](#Fundamentals)

Request the latest data from MSN Money

**Kind**: instance method of [<code>StonksQuote</code>](#StonksQuote) **Returns**:
[<code>Fundamentals</code>](#Fundamentals) - - A [Fundamentals](#Fundamentals) object with data for
the instrument

| Param     | Type                 | Default            | Description                           |
| --------- | -------------------- | ------------------ | ------------------------------------- |
| [refresh] | <code>boolean</code> | <code>false</code> | Whether or not to force a new request |

<a name="Fundamentals"></a>

## Fundamentals : <code>object</code>

**Kind**: global typedef **Properties**

| Name               | Type                | Description                                                    |
| ------------------ | ------------------- | -------------------------------------------------------------- |
| beta               | <code>number</code> | The beta value                                                 |
| change             | <code>number</code> | Daily change                                                   |
| changePercent      | <code>number</code> | Daily change as a percent                                      |
| fullCompanyName    | <code>string</code> | Full company name                                              |
| currency           | <code>string</code> | Currency code of the security                                  |
| dailyHigh          | <code>number</code> | Value of the daily high                                        |
| dailyLow           | <code>number</code> | Value of the daily low                                         |
| dividendRate       | <code>number</code> | Dividend rate of return                                        |
| dividendYield      | <code>number</code> | Dividend yield value                                           |
| eps                | <code>number</code> | Earnings per share                                             |
| symbol             | <code>string</code> | Ticker symbol for the security                                 |
| forwardPe          | <code>number</code> | Forwards price-to-earnings ratio                               |
| name               | <code>string</code> | Short/common company name                                      |
| industry           | <code>string</code> | Instrument industry                                            |
| assetType          | <code>string</code> | Type of asset (equity, ETF, etc.)                              |
| exchange           | <code>string</code> | Name of the exchange                                           |
| lastPrice          | <code>number</code> | Most recent price available                                    |
| peRatio            | <code>number</code> | P/E ratio                                                      |
| priceChange1Mo     | <code>number</code> | Price change in the last month                                 |
| priceChange3Mo     | <code>number</code> | Price change in the last 3 months                              |
| priceChange6Mo     | <code>number</code> | Price change in the last 6 months                              |
| sector             | <code>string</code> | Financial sector of the security (technology, utilities, etc.) |
| volume             | <code>number</code> | Trading volume for the day                                     |
| yearHigh           | <code>number</code> | 52-week price high                                             |
| yearLow            | <code>number</code> | 52-week price low                                              |
| averageVolume      | <code>number</code> | Average trading volume per day                                 |
| timezone           | <code>string</code> | Timezone code the security is traded in                        |
| askPrice           | <code>number</code> | Latest asking price                                            |
| askSize            | <code>number</code> | Lastest asking size                                            |
| bidPrice           | <code>number</code> | Latest bid price                                               |
| bidSize            | <code>number</code> | Latest bid size                                                |
| openingPrice       | <code>number</code> | Latest opening price                                           |
| previousClosePrice | <code>number</code> | Last previous closing price                                    |
| yearToDateChange   | <code>number</code> | Year-to-date change in value                                   |
| market             | <code>string</code> | Country the security is based in                               |

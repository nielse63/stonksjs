<a name="module_@stonksjs/quote"></a>

## @stonksjs/quote

Detailed real-time market data

<a name="module_@stonksjs/quote..quote"></a>

### @stonksjs/quote~quote(symbol) ⇒ <code>Promise.&lt;object&gt;</code>

Executes `@stocksjs/finviz` quote method to get detailed data

**Kind**: inner method of
[<code>@stonksjs/quote</code>](#module_@stonksjs/quote) **Returns**:
<code>Promise.&lt;object&gt;</code> - - data about the stock **See**:
[@stonksjs/finviz.quote](https://nielse63.github.io/stonksjs/#/api/finviz?id=response-schema)

| Param  | Type                | Description                |
| ------ | ------------------- | -------------------------- |
| symbol | <code>string</code> | ticker symbol of the asset |

**Example**

```js
const quote = require('@stonksjs/quote');

const data = await quote('MSFT'); // object of financial data
```

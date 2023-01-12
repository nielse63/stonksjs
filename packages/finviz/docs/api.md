<a name="module_@stonksjs/finviz"></a>

## @stonksjs/finviz

Stock screener and company data from finviz

- [@stonksjs/finviz](#module_@stonksjs/finviz)
  - [.quote(symbol)](#module_@stonksjs/finviz.quote) ⇒ <code>Promise</code>
  - [.screener(url)](#module_@stonksjs/finviz.screener) ⇒ <code>Promise</code>

<a name="module_@stonksjs/finviz.quote"></a>

### finviz.quote(symbol) ⇒ <code>Promise</code>

Get detailed company financial data

**Kind**: static method of
[<code>@stonksjs/finviz</code>](#module_@stonksjs/finviz)  
**Returns**: <code>Promise</code> - - resolves to a plain object, rejects with
an Error  
**Fulfil**: <code>object</code> - company financial data  
**Reject**: <code>Error</code>

| Param  | Type                | Description                  |
| ------ | ------------------- | ---------------------------- |
| symbol | <code>string</code> | ticker symbol of the company |

**Example**

```js
const data = await quote('MSFT'); // {Promise<object>}
```

<a name="module_@stonksjs/finviz.screener"></a>

### finviz.screener(url) ⇒ <code>Promise</code>

Get ticker symbols from the results of a custom finviz screener

**Kind**: static method of
[<code>@stonksjs/finviz</code>](#module_@stonksjs/finviz)  
**Returns**: <code>Promise</code> - - resolves to an array of strings, rejects
with an Error  
**Fulfil**: <code>string[]</code> - array of ticker symbols for each row of
results  
**Reject**: <code>Error</code>

| Param | Type                | Description                                      |
| ----- | ------------------- | ------------------------------------------------ |
| url   | <code>string</code> | the url from the screener page you want to query |

**Example**

```js
const symbols = await screener(
  'https://finviz.com/screener.ashx?v=111&s=ta_topgainers',
); // {Promise<string[]>}
```

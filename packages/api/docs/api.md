# @stonksjs/api API Documentation

## Classes

<dl>
<dt><a href="#StonksAPI">StonksAPI</a></dt>
<dd><p>Utility class to fetch data</p>
</dd>
<dt><a href="#StonksFundamentalsAPI">StonksFundamentalsAPI</a> ⇐ <code><a href="#StonksAPI">StonksAPI</a></code></dt>
<dd><p>Handles requests to get fundamental data for a single asset</p>
</dd>
</dl>

<a name="StonksAPI"></a>

## StonksAPI

Utility class to fetch data

**Kind**: global class

- [StonksAPI](#StonksAPI)
  - [new StonksAPI([options])](#new_StonksAPI_new)
  - [.get(url)](#StonksAPI+get) ⇒ <code>Promise</code>

<a name="new_StonksAPI_new"></a>

### new StonksAPI([options])

Creates an instance of StonksAPI

| Param     | Type                | Default         | Description                    |
| --------- | ------------------- | --------------- | ------------------------------ |
| [options] | <code>object</code> | <code>{}</code> | Config object to pass to axios |

**Example**

```js
const { StonksAPI } = require('@stonksjs/api');

const api = new StonksAPI();
const data = await api.get('https://some-url.com/api/data');
```

<a name="StonksAPI+get"></a>

### stonksAPI.get(url) ⇒ <code>Promise</code>

Makes a request to the provided URL

**Kind**: instance method of [<code>StonksAPI</code>](#StonksAPI)  
**Returns**: <code>Promise</code> - - Resolves to the data type from the requested endpoint  
**Fulfil**: <code>\*</code>  
**Reject**: <code>Error</code>

| Param | Type                | Description                |
| ----- | ------------------- | -------------------------- |
| url   | <code>string</code> | The URL to fetch data from |

<a name="StonksFundamentalsAPI"></a>

## StonksFundamentalsAPI ⇐ [<code>StonksAPI</code>](#StonksAPI)

Handles requests to get fundamental data for a single asset

**Kind**: global class  
**Extends**: [<code>StonksAPI</code>](#StonksAPI)

- [StonksFundamentalsAPI](#StonksFundamentalsAPI) ⇐ [<code>StonksAPI</code>](#StonksAPI)
  - [new StonksFundamentalsAPI(symbol)](#new_StonksFundamentalsAPI_new)
  - [.toJSON()](#StonksFundamentalsAPI+toJSON) ⇒ <code>Fundamentals</code>
  - [.get()](#StonksFundamentalsAPI+get) ⇒ <code>Promise</code>

<a name="new_StonksFundamentalsAPI_new"></a>

### new StonksFundamentalsAPI(symbol)

Creates an instance of StonksFundamentalsAPI.

| Param  | Type                | Description                   |
| ------ | ------------------- | ----------------------------- |
| symbol | <code>string</code> | Ticker symbol to get data for |

**Example**

```js
const { StonksFundamentalsAPI } = require('@stonksjs/api');

const api = new StonksFundamentalsAPI('MSFT');
const quotes = await api.get();
```

<a name="StonksFundamentalsAPI+toJSON"></a>

### stonksFundamentalsAPI.toJSON() ⇒ <code>Fundamentals</code>

Parses the api response into a standard plain object

**Kind**: instance method of [<code>StonksFundamentalsAPI</code>](#StonksFundamentalsAPI)  
**Returns**: <code>Fundamentals</code> - - Fundamental data object  
<a name="StonksFundamentalsAPI+get"></a>

### stonksFundamentalsAPI.get() ⇒ <code>Promise</code>

Fetch data for the instance symbol

**Kind**: instance method of [<code>StonksFundamentalsAPI</code>](#StonksFundamentalsAPI)  
**Overrides**: [<code>get</code>](#StonksAPI+get)  
**Returns**: <code>Promise</code> - - Resolves a Fundamental data object  
**Fulfil**: <code>Fundamentals</code>  
**Reject**: <code>Error</code>

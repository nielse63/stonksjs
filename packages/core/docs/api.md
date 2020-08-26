# @stonksjs/core API Documentation

<a name="StonksCollection"></a>

## StonksCollection

Retreives a collection of instruments, and their fundamental data, from a pre-defined Robinhood
collection

**Kind**: global class  
**Properties**

| Name       | Type                                    | Description                                                     |
| ---------- | --------------------------------------- | --------------------------------------------------------------- |
| collection | <code>string</code>                     | A Robinhood collection                                          |
| limit      | <code>number</code>                     | The maximum number of entries to include                        |
| quotes     | <code>Array.&lt;string&gt;</code>       | Array of ticker symbols in the collection                       |
| quotes     | <code>Array.&lt;Fundamentals&gt;</code> | An array of objects containing fundamental data for each record |

- [StonksCollection](#StonksCollection)
  - [new StonksCollection(collection, [limit])](#new_StonksCollection_new)
  - [.fetch()](#StonksCollection+fetch) ⇒ <code>Promise</code>
  - [.createQuotes(symbols)](#StonksCollection+createQuotes) ⇒ <code>Promise</code>
  - [.getSymbols()](#StonksCollection+getSymbols) ⇒ <code>Promise</code>

<a name="new_StonksCollection_new"></a>

### new StonksCollection(collection, [limit])

Creates an instance of StonksCollection.

| Param      | Type                | Default         | Description                               |
| ---------- | ------------------- | --------------- | ----------------------------------------- |
| collection | <code>string</code> |                 | The name of the Robinhood collection      |
| [limit]    | <code>number</code> | <code>20</code> | Number of items to return. Defaults to 20 |

**Example**

```js
const StonksCollection = require('@stonksjs/quote');

const collection = new StonksCollection('etf'); // get ETF instruments
const quotes = collection.fetch();
```

<a name="StonksCollection+fetch"></a>

### stonksCollection.fetch() ⇒ <code>Promise</code>

Makes a request for thee latest symbols for the collection

**Kind**: instance method of [<code>StonksCollection</code>](#StonksCollection)  
**Returns**: <code>Promise</code> - - Promise that resolves to an array of objects, each
representing that instruments fundamental financial data.  
**Fulfil**: <code>Fundamentals[]</code>  
**Reject**: <code>Error</code>  
<a name="StonksCollection+createQuotes"></a>

### stonksCollection.createQuotes(symbols) ⇒ <code>Promise</code>

Creates StonksQuote objects for each symbol, fetching the latest data for that instrument in the
process

**Kind**: instance method of [<code>StonksCollection</code>](#StonksCollection)  
**Returns**: <code>Promise</code> - - Promise that resolves to an array of fundamental financial
data  
**Fulfil**: <code>Fundamentals[]</code>  
**Reject**: <code>Error</code>

| Param   | Type                              | Description             |
| ------- | --------------------------------- | ----------------------- |
| symbols | <code>Array.&lt;string&gt;</code> | Array of ticker symbols |

<a name="StonksCollection+getSymbols"></a>

### stonksCollection.getSymbols() ⇒ <code>Promise</code>

Fetches the ticker symbols listed of the Robinhood collection

**Kind**: instance method of [<code>StonksCollection</code>](#StonksCollection)  
**Returns**: <code>Promise</code> - - Promise that resolves to an array of ticker symbols  
**Fulfil**: <code>string[]</code>  
**Reject**: <code>Error</code>

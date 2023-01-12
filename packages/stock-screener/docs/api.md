<a name="stockScreener"></a>

## stockScreener(filter) ⇒ <code>Promise</code>

Fetch the latest results from the stock screener

**Kind**: global function  
**Returns**: <code>Promise</code> - - the latest screener data or an error  
**Fulfil**: <code>string[]</code> - array of ticket symbols  
**Reject**: <code>Error</code>

| Param  | Type                | Description                        |
| ------ | ------------------- | ---------------------------------- |
| filter | <code>string</code> | the name of the screener to search |

**Example**

```js
const symbols = await stockScreener('HIGH_YIELD_DIVIDENDS');
```

<a name="stockScreener.filters"></a>

### stockScreener.filters

**Kind**: static property of [<code>stockScreener</code>](#stockScreener)  
**Properties**

| Name    | Type                              | Description                              |
| ------- | --------------------------------- | ---------------------------------------- |
| filters | <code>Array.&lt;string&gt;</code> | list of available filters to choose from |

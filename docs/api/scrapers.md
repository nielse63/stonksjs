<a name="stonksjs.module_screeners"></a>

# screeners

Stock screener functions

- [screeners](#stonksjs.module_screeners)
  - [.finviz(url)](#stonksjs.module_screeners.finviz) ⇒
    <code>Promise.&lt;Array.&lt;string&gt;&gt;</code>
  - [.robinhood(url)](#stonksjs.module_screeners.robinhood) ⇒
    <code>Promise.&lt;Array.&lt;string&gt;&gt;</code>
  - [.dividends(url)](#stonksjs.module_screeners.dividends) ⇒
    <code>Promise.&lt;Array.&lt;string&gt;&gt;</code>

<a name="stonksjs.module_screeners.finviz"></a>

## screeners.finviz(url) ⇒ <code>Promise.&lt;Array.&lt;string&gt;&gt;</code>

Scrapes the finviz.com screener to return an array of ticker symbols

**Kind**: static method of [<code>screeners</code>](#stonksjs.module_screeners)  
**Returns**: <code>Promise.&lt;Array.&lt;string&gt;&gt;</code> - - array of ticker symbols

| Param | Type                | Description                                         |
| ----- | ------------------- | --------------------------------------------------- |
| url   | <code>string</code> | The URL of the screener. Must be a full URL string. |

<a name="stonksjs.module_screeners.robinhood"></a>

## screeners.robinhood(url) ⇒ <code>Promise.&lt;Array.&lt;string&gt;&gt;</code>

Pulls symbols from any of Robinhood collections pages

**Kind**: static method of [<code>screeners</code>](#stonksjs.module_screeners)  
**Returns**: <code>Promise.&lt;Array.&lt;string&gt;&gt;</code> - - array of ticker symbols

| Param | Type                | Description                                         |
| ----- | ------------------- | --------------------------------------------------- |
| url   | <code>string</code> | The URL of the screener. Must be a full URL string. |

<a name="stonksjs.module_screeners.dividends"></a>

## screeners.dividends(url) ⇒ <code>Promise.&lt;Array.&lt;string&gt;&gt;</code>

Gets the latest entries on the dividendvaluebuilder.com site

**Kind**: static method of [<code>screeners</code>](#stonksjs.module_screeners)  
**Returns**: <code>Promise.&lt;Array.&lt;string&gt;&gt;</code> - - array of ticker symbols

| Param | Type                | Description                                         |
| ----- | ------------------- | --------------------------------------------------- |
| url   | <code>string</code> | The URL of the screener. Must be a full URL string. |

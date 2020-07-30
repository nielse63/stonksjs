<a name="stonksjs.module_robinhood"></a>

# robinhood

Functions used to interaact with Robinhood

- [robinhood](#stonksjs.module_robinhood)
  - [.account](#stonksjs.module_robinhood.account) : <code>RobinhoodAccount</code>
  - [.getBuyingPower()](#stonksjs.module_robinhood.getBuyingPower) ⇒
    <code>Promise.&lt;number&gt;</code>
  - [.buy(symbol, options)](#stonksjs.module_robinhood.buy) ⇒ <code>Promise.&lt;object&gt;</code>
  - [.sell(symbol, options)](#stonksjs.module_robinhood.sell) ⇒ <code>Promise.&lt;object&gt;</code>

<a name="stonksjs.module_robinhood.account"></a>

## robinhood.account : <code>RobinhoodAccount</code>

An instance of the RobinhoodAccount class

**Kind**: static property of [<code>robinhood</code>](#stonksjs.module_robinhood)  
<a name="stonksjs.module_robinhood.getBuyingPower"></a>

## robinhood.getBuyingPower() ⇒ <code>Promise.&lt;number&gt;</code>

Get buying power in your Robinhood account

**Kind**: static method of [<code>robinhood</code>](#stonksjs.module_robinhood)  
**Returns**: <code>Promise.&lt;number&gt;</code> - Available buying power  
<a name="stonksjs.module_robinhood.buy"></a>

## robinhood.buy(symbol, options) ⇒ <code>Promise.&lt;object&gt;</code>

Buy an equity

**Kind**: static method of [<code>robinhood</code>](#stonksjs.module_robinhood)  
**Returns**: <code>Promise.&lt;object&gt;</code> - The order response object

| Param   | Type                | Description                 |
| ------- | ------------------- | --------------------------- |
| symbol  | <code>string</code> | Ticker symbol for the stock |
| options | <code>object</code> | Pptions passed to order     |

<a name="stonksjs.module_robinhood.sell"></a>

## robinhood.sell(symbol, options) ⇒ <code>Promise.&lt;object&gt;</code>

Sell an equity

**Kind**: static method of [<code>robinhood</code>](#stonksjs.module_robinhood)  
**Returns**: <code>Promise.&lt;object&gt;</code> - The order response object

| Param   | Type                | Description                 |
| ------- | ------------------- | --------------------------- |
| symbol  | <code>string</code> | Ticker symbol for the stock |
| options | <code>object</code> | Pptions passed to order     |

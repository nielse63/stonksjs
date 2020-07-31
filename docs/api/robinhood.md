## Classes

<dl>
<dt><a href="#Robinhood">Robinhood</a></dt>
<dd></dd>
<dt><a href="#Robinhood">Robinhood</a></dt>
<dd></dd>
</dl>

# Typedefs

<dl>
<dt><a href="#RobinhoodUser">RobinhoodUser</a> : <code>Object</code></dt>
<dd></dd>
</dl>

<a name="Robinhood"></a>

# Robinhood

**Kind**: global class

- [Robinhood](#Robinhood)
  - [new Robinhood()](#new_Robinhood_new)
  - [new Robinhood([username], [password], [deviceToken])](#new_Robinhood_new)
  - [.isAuthenticated](#Robinhood+isAuthenticated) ⇒ <code>boolean</code>
  - [.authenticate()](#Robinhood+authenticate) ⇒
    [<code>Promise.&lt;RobinhoodUser&gt;</code>](#RobinhoodUser)
  - [.getBuyingPower()](#Robinhood+getBuyingPower) ⇒ <code>Promise.&lt;number&gt;</code>
  - [.getBalances()](#Robinhood+getBalances) ⇒ <code>Promise.&lt;object&gt;</code>
  - [.getPortfolio()](#Robinhood+getPortfolio) ⇒ <code>Promise.&lt;object&gt;</code>
  - [.getOrders()](#Robinhood+getOrders) ⇒ <code>Promise.&lt;array&gt;</code>
  - [.submitOrder(side, symbol, options)](#Robinhood+submitOrder) ⇒
    <code>Promise.&lt;object&gt;</code>
  - [.buy(symbol, options)](#Robinhood+buy) ⇒ <code>Promise.&lt;object&gt;</code>
  - [.sell(symbol, options)](#Robinhood+sell) ⇒ <code>Promise.&lt;object&gt;</code>

<a name="new_Robinhood_new"></a>

## new Robinhood()

A class that enables interaction with your Robinhood account

<a name="new_Robinhood_new"></a>

## new Robinhood([username], [password], [deviceToken])

Creates an instance of Robinhood.

| Param         | Type                | Default                                                     |
| ------------- | ------------------- | ----------------------------------------------------------- |
| [username]    | <code>string</code> | <code>&quot;process.env.ROBINHOOD_USERNAME&quot;</code>     |
| [password]    | <code>string</code> | <code>&quot;process.env.ROBINHOOD_PASSWORD&quot;</code>     |
| [deviceToken] | <code>string</code> | <code>&quot;process.env.ROBINHOOD_DEVICE_TOKEN&quot;</code> |

<a name="Robinhood+isAuthenticated"></a>

## robinhood.isAuthenticated ⇒ <code>boolean</code>

Whether the user is authenticated with Robinhood or not

**Kind**: instance property of [<code>Robinhood</code>](#Robinhood)  
**Read only**: true  
<a name="Robinhood+authenticate"></a>

## robinhood.authenticate() ⇒ [<code>Promise.&lt;RobinhoodUser&gt;</code>](#RobinhoodUser)

Authenticate the user with Robinhood

**Kind**: instance method of [<code>Robinhood</code>](#Robinhood)  
<a name="Robinhood+getBuyingPower"></a>

## robinhood.getBuyingPower() ⇒ <code>Promise.&lt;number&gt;</code>

Get the amount you have available to purchase new assets in Robinhood

**Kind**: instance method of [<code>Robinhood</code>](#Robinhood)  
<a name="Robinhood+getBalances"></a>

## robinhood.getBalances() ⇒ <code>Promise.&lt;object&gt;</code>

An object of various balances

**Kind**: instance method of [<code>Robinhood</code>](#Robinhood)  
<a name="Robinhood+getPortfolio"></a>

## robinhood.getPortfolio() ⇒ <code>Promise.&lt;object&gt;</code>

Returns an array of ticker symbols in your portfolio

**Kind**: instance method of [<code>Robinhood</code>](#Robinhood)  
<a name="Robinhood+getOrders"></a>

## robinhood.getOrders() ⇒ <code>Promise.&lt;array&gt;</code>

Gets all your recent orders

**Kind**: instance method of [<code>Robinhood</code>](#Robinhood)  
<a name="Robinhood+submitOrder"></a>

## robinhood.submitOrder(side, symbol, options) ⇒ <code>Promise.&lt;object&gt;</code>

Place anorder with Robinhood

**Kind**: instance method of [<code>Robinhood</code>](#Robinhood)

| Param   | Type                | Description                      |
| ------- | ------------------- | -------------------------------- |
| side    | <code>string</code> | buy or sell                      |
| symbol  | <code>string</code> | ticker symbol                    |
| options | <code>object</code> | additional options for the order |

<a name="Robinhood+buy"></a>

## robinhood.buy(symbol, options) ⇒ <code>Promise.&lt;object&gt;</code>

Buy an asset in Robinhood

**Kind**: instance method of [<code>Robinhood</code>](#Robinhood)

| Param   | Type                | Description                      |
| ------- | ------------------- | -------------------------------- |
| symbol  | <code>string</code> | ticker symbol                    |
| options | <code>object</code> | additional options for the order |

<a name="Robinhood+sell"></a>

## robinhood.sell(symbol, options) ⇒ <code>Promise.&lt;object&gt;</code>

Sell an asset in Robinhood

**Kind**: instance method of [<code>Robinhood</code>](#Robinhood)

| Param   | Type                | Description                      |
| ------- | ------------------- | -------------------------------- |
| symbol  | <code>string</code> | ticker symbol                    |
| options | <code>object</code> | additional options for the order |

<a name="Robinhood"></a>

# Robinhood

**Kind**: global class

- [Robinhood](#Robinhood)
  - [new Robinhood()](#new_Robinhood_new)
  - [new Robinhood([username], [password], [deviceToken])](#new_Robinhood_new)
  - [.isAuthenticated](#Robinhood+isAuthenticated) ⇒ <code>boolean</code>
  - [.authenticate()](#Robinhood+authenticate) ⇒
    [<code>Promise.&lt;RobinhoodUser&gt;</code>](#RobinhoodUser)
  - [.getBuyingPower()](#Robinhood+getBuyingPower) ⇒ <code>Promise.&lt;number&gt;</code>
  - [.getBalances()](#Robinhood+getBalances) ⇒ <code>Promise.&lt;object&gt;</code>
  - [.getPortfolio()](#Robinhood+getPortfolio) ⇒ <code>Promise.&lt;object&gt;</code>
  - [.getOrders()](#Robinhood+getOrders) ⇒ <code>Promise.&lt;array&gt;</code>
  - [.submitOrder(side, symbol, options)](#Robinhood+submitOrder) ⇒
    <code>Promise.&lt;object&gt;</code>
  - [.buy(symbol, options)](#Robinhood+buy) ⇒ <code>Promise.&lt;object&gt;</code>
  - [.sell(symbol, options)](#Robinhood+sell) ⇒ <code>Promise.&lt;object&gt;</code>

<a name="new_Robinhood_new"></a>

## new Robinhood()

A class that enables interaction with your Robinhood account

<a name="new_Robinhood_new"></a>

## new Robinhood([username], [password], [deviceToken])

Creates an instance of Robinhood.

| Param         | Type                | Default                                                     |
| ------------- | ------------------- | ----------------------------------------------------------- |
| [username]    | <code>string</code> | <code>&quot;process.env.ROBINHOOD_USERNAME&quot;</code>     |
| [password]    | <code>string</code> | <code>&quot;process.env.ROBINHOOD_PASSWORD&quot;</code>     |
| [deviceToken] | <code>string</code> | <code>&quot;process.env.ROBINHOOD_DEVICE_TOKEN&quot;</code> |

<a name="Robinhood+isAuthenticated"></a>

## robinhood.isAuthenticated ⇒ <code>boolean</code>

Whether the user is authenticated with Robinhood or not

**Kind**: instance property of [<code>Robinhood</code>](#Robinhood)  
**Read only**: true  
<a name="Robinhood+authenticate"></a>

## robinhood.authenticate() ⇒ [<code>Promise.&lt;RobinhoodUser&gt;</code>](#RobinhoodUser)

Authenticate the user with Robinhood

**Kind**: instance method of [<code>Robinhood</code>](#Robinhood)  
<a name="Robinhood+getBuyingPower"></a>

## robinhood.getBuyingPower() ⇒ <code>Promise.&lt;number&gt;</code>

Get the amount you have available to purchase new assets in Robinhood

**Kind**: instance method of [<code>Robinhood</code>](#Robinhood)  
<a name="Robinhood+getBalances"></a>

## robinhood.getBalances() ⇒ <code>Promise.&lt;object&gt;</code>

An object of various balances

**Kind**: instance method of [<code>Robinhood</code>](#Robinhood)  
<a name="Robinhood+getPortfolio"></a>

## robinhood.getPortfolio() ⇒ <code>Promise.&lt;object&gt;</code>

Returns an array of ticker symbols in your portfolio

**Kind**: instance method of [<code>Robinhood</code>](#Robinhood)  
<a name="Robinhood+getOrders"></a>

## robinhood.getOrders() ⇒ <code>Promise.&lt;array&gt;</code>

Gets all your recent orders

**Kind**: instance method of [<code>Robinhood</code>](#Robinhood)  
<a name="Robinhood+submitOrder"></a>

## robinhood.submitOrder(side, symbol, options) ⇒ <code>Promise.&lt;object&gt;</code>

Place anorder with Robinhood

**Kind**: instance method of [<code>Robinhood</code>](#Robinhood)

| Param   | Type                | Description                      |
| ------- | ------------------- | -------------------------------- |
| side    | <code>string</code> | buy or sell                      |
| symbol  | <code>string</code> | ticker symbol                    |
| options | <code>object</code> | additional options for the order |

<a name="Robinhood+buy"></a>

## robinhood.buy(symbol, options) ⇒ <code>Promise.&lt;object&gt;</code>

Buy an asset in Robinhood

**Kind**: instance method of [<code>Robinhood</code>](#Robinhood)

| Param   | Type                | Description   |
| ------- | ------------------- | ------------- |
| symbol  | <code>string</code> | ticker symbol |
| options | <code>object</cod   |

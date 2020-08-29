<a name="stonksjs.module_screeners"></a>

# screeners

Stock screener functions

- [screeners](#stonksjs.module_screeners)
  - [.highYieldDividends()](#stonksjs.module_screeners.highYieldDividends) ⇒ <code>Promise</code>
  - [.potentialBreakouts()](#stonksjs.module_screeners.potentialBreakouts) ⇒ <code>Promise</code>
  - [.swingTrendingUp()](#stonksjs.module_screeners.swingTrendingUp) ⇒ <code>Promise</code>
  - [.finvizCustom(url)](#stonksjs.module_screeners.finvizCustom) ⇒ <code>Promise</code>

<a name="stonksjs.module_screeners.highYieldDividends"></a>

## screeners.highYieldDividends() ⇒ <code>Promise</code>

Screens for equities that meet the following criteria:

- Positive projected growth over the next year
- Positive growth over the last 5 years
- Forward P/E < 20
- Analysist recommendation is buy or better
- Divident yield is > 5%

**Kind**: static method of [<code>screeners</code>](#stonksjs.module_screeners)  
**Fulfil**: <code>string[]</code> - array of ticker symbols  
**Reject**: <code>Error</code>  
**See**:
https://finviz.com/screener.ashx?v=111&f=an_recom_buybetter,fa_div_o5,fa_eps5years_pos,fa_epsyoy1_pos,fa_fpe_u20&ft=4&o=dividendyield  
<a name="stonksjs.module_screeners.potentialBreakouts"></a>

## screeners.potentialBreakouts() ⇒ <code>Promise</code>

Screens for equities that meet the following criteria:

- Analyst rating of buy or better
- Price is above 20 day SMA
- 20 day SMA is above 50 day SMA
- 50 day SMA is above 200 day SMA
- Current price is 0%-10% below 52 week high

**Kind**: static method of [<code>screeners</code>](#stonksjs.module_screeners)  
**Fulfil**: <code>string[]</code> - array of ticker symbols  
**Reject**: <code>Error</code>  
**See**:
https://finviz.com/screener.ashx?v=111&s=ta_topgainers&f=an_recom_buybetter,ta_highlow52w_b0to10h,ta_sma20_pa,ta_sma200_sb50,ta_sma50_sb20&ft=4&o=-change  
<a name="stonksjs.module_screeners.swingTrendingUp"></a>

## screeners.swingTrendingUp() ⇒ <code>Promise</code>

Screens for equities that meet the following criteria:

- Analyst rating of buy or better
- Price is above 20 day SMA
- 20 day SMA is above 50 day SMA
- 50 day SMA is above 200 day SMA

**Kind**: static method of [<code>screeners</code>](#stonksjs.module_screeners)  
**Fulfil**: <code>string[]</code> - array of ticker symbols  
**Reject**: <code>Error</code>  
**See**:
https://finviz.com/screener.ashx?v=111&s=ta_topgainers&f=an_recom_buybetter,ta_sma20_pa,ta_sma200_sb50,ta_sma50_sb20&ft=4&o=-change  
<a name="stonksjs.module_screeners.finvizCustom"></a>

## screeners.finvizCustom(url) ⇒ <code>Promise</code>

Function that allows the user to pass a finviz URL and returns symbols from that search

**Kind**: static method of [<code>screeners</code>](#stonksjs.module_screeners)  
**Fulfil**: <code>string[]</code> - array of ticker symbols  
**Reject**: <code>Error</code>

| Param | Type                | Description             |
| ----- | ------------------- | ----------------------- |
| url   | <code>string</code> | the finviz screener URL |

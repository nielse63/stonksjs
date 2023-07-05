@stonksjs/stock-screener / [Exports](modules.md)

# @stonksjs/stock-screener

> Pre-defined industry standard stock screeners from Finviz

![npm (scoped)](https://img.shields.io/npm/v/@stonksjs/stock-screener?color=brightgreen&style=flat-square)

- [Installation](#installation)
- [Usage](#usage)
  - [Available Screener Filters](#available-screener-filters)
- [API](#api)

<!-- ## Features

- TODO: add features... -->

## Installation

```bash
npm install --save @stonksjs/stock-screener
```

## Usage

```js
import stockScreener from '@stonksjs/stock-screener';

// the object of key/value pairs of finviz stock screeners
const { filters } = stockScreener;
console.log(filters);

// get the latest available filters
const filters = await stockScreener.getFilters();
console.log(filters);

// get results from "Top Gainers" screener
const symbols = await stockScreener.getTopGainers();
console.log(symbols);
```

### Available Screener Filters

- [Top Gainers](https://finviz.com/screener.ashx?v=111&s=ta_topgainers):
  `TOP_GAINERS`
- [Top Losers](https://finviz.com/screener.ashx?v=111&s=ta_toplosers):
  `TOP_LOSERS`
- [New High](https://finviz.com/screener.ashx?v=111&s=ta_newhigh): `NEW_HIGH`
- [New Low](https://finviz.com/screener.ashx?v=111&s=ta_newlow): `NEW_LOW`
- [Most Volatile](https://finviz.com/screener.ashx?v=111&s=ta_mostvolatile):
  `MOST_VOLATILE`
- [Most Active](https://finviz.com/screener.ashx?v=111&s=ta_mostactive):
  `MOST_ACTIVE`
- [Unusual Volume](https://finviz.com/screener.ashx?v=111&s=ta_unusualvolume):
  `UNUSUAL_VOLUME`
- [Overbought](https://finviz.com/screener.ashx?v=111&s=ta_overbought):
  `OVERBOUGHT`
- [Oversold](https://finviz.com/screener.ashx?v=111&s=ta_oversold): `OVERSOLD`
- [Downgrades](https://finviz.com/screener.ashx?v=111&s=n_downgrades):
  `DOWNGRADES`
- [Upgrades](https://finviz.com/screener.ashx?v=111&s=n_upgrades): `UPGRADES`
- [Earnings Before](https://finviz.com/screener.ashx?v=111&s=n_earningsbefore):
  `EARNINGS_BEFORE`
- [Earnings After](https://finviz.com/screener.ashx?v=111&s=n_earningsafter):
  `EARNINGS_AFTER`
- [Recent Insider Buying](https://finviz.com/screener.ashx?v=111&s=it_latestbuys):
  `RECENT_INSIDER_BUYING`
- [Recent Insider Selling](https://finviz.com/screener.ashx?v=111&s=it_latestsales):
  `RECENT_INSIDER_SELLING`
- [Major News](https://finviz.com/screener.ashx?v=111&s=n_majornews):
  `MAJOR_NEWS`
- [Horizontal S/R](https://finviz.com/screener.ashx?v=111&s=ta_p_horizontal):
  `HORIZONTAL_S_R`
- [TL Resistance](https://finviz.com/screener.ashx?v=111&s=ta_p_tlresistance):
  `TL_RESISTANCE`
- [TL Support](https://finviz.com/screener.ashx?v=111&s=ta_p_tlsupport):
  `TL_SUPPORT`
- [Wedge Up](https://finviz.com/screener.ashx?v=111&s=ta_p_wedgeup): `WEDGE_UP`
- [Wedge Down](https://finviz.com/screener.ashx?v=111&s=ta_p_wedgedown):
  `WEDGE_DOWN`
- [Triangle Ascending](https://finviz.com/screener.ashx?v=111&s=ta_p_wedgeresistance):
  `TRIANGLE_ASCENDING`
- [Triangle Descending](https://finviz.com/screener.ashx?v=111&s=ta_p_wedgesupport):
  `TRIANGLE_DESCENDING`
- [Wedge](https://finviz.com/screener.ashx?v=111&s=ta_p_wedge): `WEDGE`
- [Channel Up](https://finviz.com/screener.ashx?v=111&s=ta_p_channelup):
  `CHANNEL_UP`
- [Channel Down](https://finviz.com/screener.ashx?v=111&s=ta_p_channeldown):
  `CHANNEL_DOWN`
- [Channel](https://finviz.com/screener.ashx?v=111&s=ta_p_channel): `CHANNEL`
- [Double Top](https://finviz.com/screener.ashx?v=111&s=ta_p_doubletop):
  `DOUBLE_TOP`
- [Double Bottom](https://finviz.com/screener.ashx?v=111&s=ta_p_doublebottom):
  `DOUBLE_BOTTOM`
- [Multiple Top](https://finviz.com/screener.ashx?v=111&s=ta_p_multipletop):
  `MULTIPLE_TOP`
- [Multiple Bottom](https://finviz.com/screener.ashx?v=111&s=ta_p_multiplebottom):
  `MULTIPLE_BOTTOM`
- [Head & Shoulders](https://finviz.com/screener.ashx?v=111&s=ta_p_headandshoulders):
  `HEAD_SHOULDERS`
- [Head & Shoulders Inverse](https://finviz.com/screener.ashx?v=111&s=ta_p_headandshouldersinv):
  `HEAD_SHOULDERS_INVERSE`

## API

Full API docs can be found at
[`docs/modules`](https://github.com/nielse63/stonksjs/blob/main/packages/stock-screener/docs/modules.md)

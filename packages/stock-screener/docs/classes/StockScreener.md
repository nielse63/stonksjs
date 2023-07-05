[@stonksjs/stock-screener](../README.md) / [Exports](../modules.md) /
StockScreener

# Class: StockScreener

## Table of contents

### Constructors

- [constructor](StockScreener.md#constructor)

### Properties

- [filters](StockScreener.md#filters)

### Methods

- [getFilters](StockScreener.md#getfilters)
- [getTopGainers](StockScreener.md#gettopgainers)
- [getTopLosers](StockScreener.md#gettoplosers)
- [getNewHigh](StockScreener.md#getnewhigh)
- [getNewLow](StockScreener.md#getnewlow)
- [getMostVolatile](StockScreener.md#getmostvolatile)
- [getMostActive](StockScreener.md#getmostactive)
- [getUnusualVolume](StockScreener.md#getunusualvolume)
- [getOverbought](StockScreener.md#getoverbought)
- [getOversold](StockScreener.md#getoversold)
- [getDowngrades](StockScreener.md#getdowngrades)
- [getUpgrades](StockScreener.md#getupgrades)
- [getEarningsBefore](StockScreener.md#getearningsbefore)
- [getEarningsAfter](StockScreener.md#getearningsafter)
- [getRecentInsiderBuying](StockScreener.md#getrecentinsiderbuying)
- [getRecentInsiderSelling](StockScreener.md#getrecentinsiderselling)
- [getMajorNews](StockScreener.md#getmajornews)
- [getHorizontalSR](StockScreener.md#gethorizontalsr)
- [getTlResistance](StockScreener.md#gettlresistance)
- [getTlSupport](StockScreener.md#gettlsupport)
- [getWedgeUp](StockScreener.md#getwedgeup)
- [getWedgeDown](StockScreener.md#getwedgedown)
- [getTriangleAscending](StockScreener.md#gettriangleascending)
- [getTriangleDescending](StockScreener.md#gettriangledescending)
- [getWedge](StockScreener.md#getwedge)
- [getChannelUp](StockScreener.md#getchannelup)
- [getChannelDown](StockScreener.md#getchanneldown)
- [getChannel](StockScreener.md#getchannel)
- [getDoubleTop](StockScreener.md#getdoubletop)
- [getDoubleBottom](StockScreener.md#getdoublebottom)
- [getMultipleTop](StockScreener.md#getmultipletop)
- [getMultipleBottom](StockScreener.md#getmultiplebottom)
- [getHeadShoulders](StockScreener.md#getheadshoulders)
- [getHeadShouldersInverse](StockScreener.md#getheadshouldersinverse)

## Constructors

### constructor

• **new StockScreener**()

## Properties

### filters

• **filters**: `Object`

#### Type declaration

| Name                     | Type     |
| :----------------------- | :------- |
| `HEAD_SHOULDERS_INVERSE` | `string` |
| `HEAD_SHOULDERS`         | `string` |
| `MULTIPLE_BOTTOM`        | `string` |
| `MULTIPLE_TOP`           | `string` |
| `DOUBLE_BOTTOM`          | `string` |
| `DOUBLE_TOP`             | `string` |
| `CHANNEL`                | `string` |
| `CHANNEL_DOWN`           | `string` |
| `CHANNEL_UP`             | `string` |
| `WEDGE`                  | `string` |
| `TRIANGLE_DESCENDING`    | `string` |
| `TRIANGLE_ASCENDING`     | `string` |
| `WEDGE_DOWN`             | `string` |
| `WEDGE_UP`               | `string` |
| `TL_SUPPORT`             | `string` |
| `TL_RESISTANCE`          | `string` |
| `HORIZONTAL_S_R`         | `string` |
| `MAJOR_NEWS`             | `string` |
| `RECENT_INSIDER_SELLING` | `string` |
| `RECENT_INSIDER_BUYING`  | `string` |
| `EARNINGS_AFTER`         | `string` |
| `EARNINGS_BEFORE`        | `string` |
| `UPGRADES`               | `string` |
| `DOWNGRADES`             | `string` |
| `OVERSOLD`               | `string` |
| `OVERBOUGHT`             | `string` |
| `UNUSUAL_VOLUME`         | `string` |
| `MOST_ACTIVE`            | `string` |
| `MOST_VOLATILE`          | `string` |
| `NEW_LOW`                | `string` |
| `NEW_HIGH`               | `string` |
| `TOP_LOSERS`             | `string` |
| `TOP_GAINERS`            | `string` |

#### Defined in

[src/StockScreener.ts:5](https://github.com/nielse63/stonksjs/blob/main/packages/stock-screener/src/StockScreener.ts#L5)

## Methods

### getFilters

▸ `Static` **getFilters**(): `Promise`<[`Screener`](../modules.md#screener)[]\>

#### Returns

`Promise`<[`Screener`](../modules.md#screener)[]\>

#### Defined in

[src/StockScreener.ts:41](https://github.com/nielse63/stonksjs/blob/main/packages/stock-screener/src/StockScreener.ts#L41)

---

### getTopGainers

▸ **getTopGainers**(): `Promise`<`string`[]\>

#### Returns

`Promise`<`string`[]\>

#### Defined in

[src/StockScreener.ts:45](https://github.com/nielse63/stonksjs/blob/main/packages/stock-screener/src/StockScreener.ts#L45)

---

### getTopLosers

▸ **getTopLosers**(): `Promise`<`string`[]\>

#### Returns

`Promise`<`string`[]\>

#### Defined in

[src/StockScreener.ts:49](https://github.com/nielse63/stonksjs/blob/main/packages/stock-screener/src/StockScreener.ts#L49)

---

### getNewHigh

▸ **getNewHigh**(): `Promise`<`string`[]\>

#### Returns

`Promise`<`string`[]\>

#### Defined in

[src/StockScreener.ts:53](https://github.com/nielse63/stonksjs/blob/main/packages/stock-screener/src/StockScreener.ts#L53)

---

### getNewLow

▸ **getNewLow**(): `Promise`<`string`[]\>

#### Returns

`Promise`<`string`[]\>

#### Defined in

[src/StockScreener.ts:57](https://github.com/nielse63/stonksjs/blob/main/packages/stock-screener/src/StockScreener.ts#L57)

---

### getMostVolatile

▸ **getMostVolatile**(): `Promise`<`string`[]\>

#### Returns

`Promise`<`string`[]\>

#### Defined in

[src/StockScreener.ts:61](https://github.com/nielse63/stonksjs/blob/main/packages/stock-screener/src/StockScreener.ts#L61)

---

### getMostActive

▸ **getMostActive**(): `Promise`<`string`[]\>

#### Returns

`Promise`<`string`[]\>

#### Defined in

[src/StockScreener.ts:65](https://github.com/nielse63/stonksjs/blob/main/packages/stock-screener/src/StockScreener.ts#L65)

---

### getUnusualVolume

▸ **getUnusualVolume**(): `Promise`<`string`[]\>

#### Returns

`Promise`<`string`[]\>

#### Defined in

[src/StockScreener.ts:69](https://github.com/nielse63/stonksjs/blob/main/packages/stock-screener/src/StockScreener.ts#L69)

---

### getOverbought

▸ **getOverbought**(): `Promise`<`string`[]\>

#### Returns

`Promise`<`string`[]\>

#### Defined in

[src/StockScreener.ts:73](https://github.com/nielse63/stonksjs/blob/main/packages/stock-screener/src/StockScreener.ts#L73)

---

### getOversold

▸ **getOversold**(): `Promise`<`string`[]\>

#### Returns

`Promise`<`string`[]\>

#### Defined in

[src/StockScreener.ts:77](https://github.com/nielse63/stonksjs/blob/main/packages/stock-screener/src/StockScreener.ts#L77)

---

### getDowngrades

▸ **getDowngrades**(): `Promise`<`string`[]\>

#### Returns

`Promise`<`string`[]\>

#### Defined in

[src/StockScreener.ts:81](https://github.com/nielse63/stonksjs/blob/main/packages/stock-screener/src/StockScreener.ts#L81)

---

### getUpgrades

▸ **getUpgrades**(): `Promise`<`string`[]\>

#### Returns

`Promise`<`string`[]\>

#### Defined in

[src/StockScreener.ts:85](https://github.com/nielse63/stonksjs/blob/main/packages/stock-screener/src/StockScreener.ts#L85)

---

### getEarningsBefore

▸ **getEarningsBefore**(): `Promise`<`string`[]\>

#### Returns

`Promise`<`string`[]\>

#### Defined in

[src/StockScreener.ts:89](https://github.com/nielse63/stonksjs/blob/main/packages/stock-screener/src/StockScreener.ts#L89)

---

### getEarningsAfter

▸ **getEarningsAfter**(): `Promise`<`string`[]\>

#### Returns

`Promise`<`string`[]\>

#### Defined in

[src/StockScreener.ts:93](https://github.com/nielse63/stonksjs/blob/main/packages/stock-screener/src/StockScreener.ts#L93)

---

### getRecentInsiderBuying

▸ **getRecentInsiderBuying**(): `Promise`<`string`[]\>

#### Returns

`Promise`<`string`[]\>

#### Defined in

[src/StockScreener.ts:97](https://github.com/nielse63/stonksjs/blob/main/packages/stock-screener/src/StockScreener.ts#L97)

---

### getRecentInsiderSelling

▸ **getRecentInsiderSelling**(): `Promise`<`string`[]\>

#### Returns

`Promise`<`string`[]\>

#### Defined in

[src/StockScreener.ts:101](https://github.com/nielse63/stonksjs/blob/main/packages/stock-screener/src/StockScreener.ts#L101)

---

### getMajorNews

▸ **getMajorNews**(): `Promise`<`string`[]\>

#### Returns

`Promise`<`string`[]\>

#### Defined in

[src/StockScreener.ts:105](https://github.com/nielse63/stonksjs/blob/main/packages/stock-screener/src/StockScreener.ts#L105)

---

### getHorizontalSR

▸ **getHorizontalSR**(): `Promise`<`string`[]\>

#### Returns

`Promise`<`string`[]\>

#### Defined in

[src/StockScreener.ts:109](https://github.com/nielse63/stonksjs/blob/main/packages/stock-screener/src/StockScreener.ts#L109)

---

### getTlResistance

▸ **getTlResistance**(): `Promise`<`string`[]\>

#### Returns

`Promise`<`string`[]\>

#### Defined in

[src/StockScreener.ts:113](https://github.com/nielse63/stonksjs/blob/main/packages/stock-screener/src/StockScreener.ts#L113)

---

### getTlSupport

▸ **getTlSupport**(): `Promise`<`string`[]\>

#### Returns

`Promise`<`string`[]\>

#### Defined in

[src/StockScreener.ts:117](https://github.com/nielse63/stonksjs/blob/main/packages/stock-screener/src/StockScreener.ts#L117)

---

### getWedgeUp

▸ **getWedgeUp**(): `Promise`<`string`[]\>

#### Returns

`Promise`<`string`[]\>

#### Defined in

[src/StockScreener.ts:121](https://github.com/nielse63/stonksjs/blob/main/packages/stock-screener/src/StockScreener.ts#L121)

---

### getWedgeDown

▸ **getWedgeDown**(): `Promise`<`string`[]\>

#### Returns

`Promise`<`string`[]\>

#### Defined in

[src/StockScreener.ts:125](https://github.com/nielse63/stonksjs/blob/main/packages/stock-screener/src/StockScreener.ts#L125)

---

### getTriangleAscending

▸ **getTriangleAscending**(): `Promise`<`string`[]\>

#### Returns

`Promise`<`string`[]\>

#### Defined in

[src/StockScreener.ts:129](https://github.com/nielse63/stonksjs/blob/main/packages/stock-screener/src/StockScreener.ts#L129)

---

### getTriangleDescending

▸ **getTriangleDescending**(): `Promise`<`string`[]\>

#### Returns

`Promise`<`string`[]\>

#### Defined in

[src/StockScreener.ts:133](https://github.com/nielse63/stonksjs/blob/main/packages/stock-screener/src/StockScreener.ts#L133)

---

### getWedge

▸ **getWedge**(): `Promise`<`string`[]\>

#### Returns

`Promise`<`string`[]\>

#### Defined in

[src/StockScreener.ts:137](https://github.com/nielse63/stonksjs/blob/main/packages/stock-screener/src/StockScreener.ts#L137)

---

### getChannelUp

▸ **getChannelUp**(): `Promise`<`string`[]\>

#### Returns

`Promise`<`string`[]\>

#### Defined in

[src/StockScreener.ts:141](https://github.com/nielse63/stonksjs/blob/main/packages/stock-screener/src/StockScreener.ts#L141)

---

### getChannelDown

▸ **getChannelDown**(): `Promise`<`string`[]\>

#### Returns

`Promise`<`string`[]\>

#### Defined in

[src/StockScreener.ts:145](https://github.com/nielse63/stonksjs/blob/main/packages/stock-screener/src/StockScreener.ts#L145)

---

### getChannel

▸ **getChannel**(): `Promise`<`string`[]\>

#### Returns

`Promise`<`string`[]\>

#### Defined in

[src/StockScreener.ts:149](https://github.com/nielse63/stonksjs/blob/main/packages/stock-screener/src/StockScreener.ts#L149)

---

### getDoubleTop

▸ **getDoubleTop**(): `Promise`<`string`[]\>

#### Returns

`Promise`<`string`[]\>

#### Defined in

[src/StockScreener.ts:153](https://github.com/nielse63/stonksjs/blob/main/packages/stock-screener/src/StockScreener.ts#L153)

---

### getDoubleBottom

▸ **getDoubleBottom**(): `Promise`<`string`[]\>

#### Returns

`Promise`<`string`[]\>

#### Defined in

[src/StockScreener.ts:157](https://github.com/nielse63/stonksjs/blob/main/packages/stock-screener/src/StockScreener.ts#L157)

---

### getMultipleTop

▸ **getMultipleTop**(): `Promise`<`string`[]\>

#### Returns

`Promise`<`string`[]\>

#### Defined in

[src/StockScreener.ts:161](https://github.com/nielse63/stonksjs/blob/main/packages/stock-screener/src/StockScreener.ts#L161)

---

### getMultipleBottom

▸ **getMultipleBottom**(): `Promise`<`string`[]\>

#### Returns

`Promise`<`string`[]\>

#### Defined in

[src/StockScreener.ts:165](https://github.com/nielse63/stonksjs/blob/main/packages/stock-screener/src/StockScreener.ts#L165)

---

### getHeadShoulders

▸ **getHeadShoulders**(): `Promise`<`string`[]\>

#### Returns

`Promise`<`string`[]\>

#### Defined in

[src/StockScreener.ts:169](https://github.com/nielse63/stonksjs/blob/main/packages/stock-screener/src/StockScreener.ts#L169)

---

### getHeadShouldersInverse

▸ **getHeadShouldersInverse**(): `Promise`<`string`[]\>

#### Returns

`Promise`<`string`[]\>

#### Defined in

[src/StockScreener.ts:173](https://github.com/nielse63/stonksjs/blob/main/packages/stock-screener/src/StockScreener.ts#L173)

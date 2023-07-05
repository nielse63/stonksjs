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

▸ **getFilters**(): `Promise`<[`Screener`](../modules.md#screener)[]\>

#### Returns

`Promise`<[`Screener`](../modules.md#screener)[]\>

#### Defined in

[src/StockScreener.ts:42](https://github.com/nielse63/stonksjs/blob/main/packages/stock-screener/src/StockScreener.ts#L42)

---

### getTopGainers

▸ **getTopGainers**(): `Promise`<`string`[]\>

#### Returns

`Promise`<`string`[]\>

#### Defined in

[src/StockScreener.ts:46](https://github.com/nielse63/stonksjs/blob/main/packages/stock-screener/src/StockScreener.ts#L46)

---

### getTopLosers

▸ **getTopLosers**(): `Promise`<`string`[]\>

#### Returns

`Promise`<`string`[]\>

#### Defined in

[src/StockScreener.ts:50](https://github.com/nielse63/stonksjs/blob/main/packages/stock-screener/src/StockScreener.ts#L50)

---

### getNewHigh

▸ **getNewHigh**(): `Promise`<`string`[]\>

#### Returns

`Promise`<`string`[]\>

#### Defined in

[src/StockScreener.ts:54](https://github.com/nielse63/stonksjs/blob/main/packages/stock-screener/src/StockScreener.ts#L54)

---

### getNewLow

▸ **getNewLow**(): `Promise`<`string`[]\>

#### Returns

`Promise`<`string`[]\>

#### Defined in

[src/StockScreener.ts:58](https://github.com/nielse63/stonksjs/blob/main/packages/stock-screener/src/StockScreener.ts#L58)

---

### getMostVolatile

▸ **getMostVolatile**(): `Promise`<`string`[]\>

#### Returns

`Promise`<`string`[]\>

#### Defined in

[src/StockScreener.ts:62](https://github.com/nielse63/stonksjs/blob/main/packages/stock-screener/src/StockScreener.ts#L62)

---

### getMostActive

▸ **getMostActive**(): `Promise`<`string`[]\>

#### Returns

`Promise`<`string`[]\>

#### Defined in

[src/StockScreener.ts:66](https://github.com/nielse63/stonksjs/blob/main/packages/stock-screener/src/StockScreener.ts#L66)

---

### getUnusualVolume

▸ **getUnusualVolume**(): `Promise`<`string`[]\>

#### Returns

`Promise`<`string`[]\>

#### Defined in

[src/StockScreener.ts:70](https://github.com/nielse63/stonksjs/blob/main/packages/stock-screener/src/StockScreener.ts#L70)

---

### getOverbought

▸ **getOverbought**(): `Promise`<`string`[]\>

#### Returns

`Promise`<`string`[]\>

#### Defined in

[src/StockScreener.ts:74](https://github.com/nielse63/stonksjs/blob/main/packages/stock-screener/src/StockScreener.ts#L74)

---

### getOversold

▸ **getOversold**(): `Promise`<`string`[]\>

#### Returns

`Promise`<`string`[]\>

#### Defined in

[src/StockScreener.ts:78](https://github.com/nielse63/stonksjs/blob/main/packages/stock-screener/src/StockScreener.ts#L78)

---

### getDowngrades

▸ **getDowngrades**(): `Promise`<`string`[]\>

#### Returns

`Promise`<`string`[]\>

#### Defined in

[src/StockScreener.ts:82](https://github.com/nielse63/stonksjs/blob/main/packages/stock-screener/src/StockScreener.ts#L82)

---

### getUpgrades

▸ **getUpgrades**(): `Promise`<`string`[]\>

#### Returns

`Promise`<`string`[]\>

#### Defined in

[src/StockScreener.ts:86](https://github.com/nielse63/stonksjs/blob/main/packages/stock-screener/src/StockScreener.ts#L86)

---

### getEarningsBefore

▸ **getEarningsBefore**(): `Promise`<`string`[]\>

#### Returns

`Promise`<`string`[]\>

#### Defined in

[src/StockScreener.ts:90](https://github.com/nielse63/stonksjs/blob/main/packages/stock-screener/src/StockScreener.ts#L90)

---

### getEarningsAfter

▸ **getEarningsAfter**(): `Promise`<`string`[]\>

#### Returns

`Promise`<`string`[]\>

#### Defined in

[src/StockScreener.ts:94](https://github.com/nielse63/stonksjs/blob/main/packages/stock-screener/src/StockScreener.ts#L94)

---

### getRecentInsiderBuying

▸ **getRecentInsiderBuying**(): `Promise`<`string`[]\>

#### Returns

`Promise`<`string`[]\>

#### Defined in

[src/StockScreener.ts:98](https://github.com/nielse63/stonksjs/blob/main/packages/stock-screener/src/StockScreener.ts#L98)

---

### getRecentInsiderSelling

▸ **getRecentInsiderSelling**(): `Promise`<`string`[]\>

#### Returns

`Promise`<`string`[]\>

#### Defined in

[src/StockScreener.ts:102](https://github.com/nielse63/stonksjs/blob/main/packages/stock-screener/src/StockScreener.ts#L102)

---

### getMajorNews

▸ **getMajorNews**(): `Promise`<`string`[]\>

#### Returns

`Promise`<`string`[]\>

#### Defined in

[src/StockScreener.ts:106](https://github.com/nielse63/stonksjs/blob/main/packages/stock-screener/src/StockScreener.ts#L106)

---

### getHorizontalSR

▸ **getHorizontalSR**(): `Promise`<`string`[]\>

#### Returns

`Promise`<`string`[]\>

#### Defined in

[src/StockScreener.ts:110](https://github.com/nielse63/stonksjs/blob/main/packages/stock-screener/src/StockScreener.ts#L110)

---

### getTlResistance

▸ **getTlResistance**(): `Promise`<`string`[]\>

#### Returns

`Promise`<`string`[]\>

#### Defined in

[src/StockScreener.ts:114](https://github.com/nielse63/stonksjs/blob/main/packages/stock-screener/src/StockScreener.ts#L114)

---

### getTlSupport

▸ **getTlSupport**(): `Promise`<`string`[]\>

#### Returns

`Promise`<`string`[]\>

#### Defined in

[src/StockScreener.ts:118](https://github.com/nielse63/stonksjs/blob/main/packages/stock-screener/src/StockScreener.ts#L118)

---

### getWedgeUp

▸ **getWedgeUp**(): `Promise`<`string`[]\>

#### Returns

`Promise`<`string`[]\>

#### Defined in

[src/StockScreener.ts:122](https://github.com/nielse63/stonksjs/blob/main/packages/stock-screener/src/StockScreener.ts#L122)

---

### getWedgeDown

▸ **getWedgeDown**(): `Promise`<`string`[]\>

#### Returns

`Promise`<`string`[]\>

#### Defined in

[src/StockScreener.ts:126](https://github.com/nielse63/stonksjs/blob/main/packages/stock-screener/src/StockScreener.ts#L126)

---

### getTriangleAscending

▸ **getTriangleAscending**(): `Promise`<`string`[]\>

#### Returns

`Promise`<`string`[]\>

#### Defined in

[src/StockScreener.ts:130](https://github.com/nielse63/stonksjs/blob/main/packages/stock-screener/src/StockScreener.ts#L130)

---

### getTriangleDescending

▸ **getTriangleDescending**(): `Promise`<`string`[]\>

#### Returns

`Promise`<`string`[]\>

#### Defined in

[src/StockScreener.ts:134](https://github.com/nielse63/stonksjs/blob/main/packages/stock-screener/src/StockScreener.ts#L134)

---

### getWedge

▸ **getWedge**(): `Promise`<`string`[]\>

#### Returns

`Promise`<`string`[]\>

#### Defined in

[src/StockScreener.ts:138](https://github.com/nielse63/stonksjs/blob/main/packages/stock-screener/src/StockScreener.ts#L138)

---

### getChannelUp

▸ **getChannelUp**(): `Promise`<`string`[]\>

#### Returns

`Promise`<`string`[]\>

#### Defined in

[src/StockScreener.ts:142](https://github.com/nielse63/stonksjs/blob/main/packages/stock-screener/src/StockScreener.ts#L142)

---

### getChannelDown

▸ **getChannelDown**(): `Promise`<`string`[]\>

#### Returns

`Promise`<`string`[]\>

#### Defined in

[src/StockScreener.ts:146](https://github.com/nielse63/stonksjs/blob/main/packages/stock-screener/src/StockScreener.ts#L146)

---

### getChannel

▸ **getChannel**(): `Promise`<`string`[]\>

#### Returns

`Promise`<`string`[]\>

#### Defined in

[src/StockScreener.ts:150](https://github.com/nielse63/stonksjs/blob/main/packages/stock-screener/src/StockScreener.ts#L150)

---

### getDoubleTop

▸ **getDoubleTop**(): `Promise`<`string`[]\>

#### Returns

`Promise`<`string`[]\>

#### Defined in

[src/StockScreener.ts:154](https://github.com/nielse63/stonksjs/blob/main/packages/stock-screener/src/StockScreener.ts#L154)

---

### getDoubleBottom

▸ **getDoubleBottom**(): `Promise`<`string`[]\>

#### Returns

`Promise`<`string`[]\>

#### Defined in

[src/StockScreener.ts:158](https://github.com/nielse63/stonksjs/blob/main/packages/stock-screener/src/StockScreener.ts#L158)

---

### getMultipleTop

▸ **getMultipleTop**(): `Promise`<`string`[]\>

#### Returns

`Promise`<`string`[]\>

#### Defined in

[src/StockScreener.ts:162](https://github.com/nielse63/stonksjs/blob/main/packages/stock-screener/src/StockScreener.ts#L162)

---

### getMultipleBottom

▸ **getMultipleBottom**(): `Promise`<`string`[]\>

#### Returns

`Promise`<`string`[]\>

#### Defined in

[src/StockScreener.ts:166](https://github.com/nielse63/stonksjs/blob/main/packages/stock-screener/src/StockScreener.ts#L166)

---

### getHeadShoulders

▸ **getHeadShoulders**(): `Promise`<`string`[]\>

#### Returns

`Promise`<`string`[]\>

#### Defined in

[src/StockScreener.ts:170](https://github.com/nielse63/stonksjs/blob/main/packages/stock-screener/src/StockScreener.ts#L170)

---

### getHeadShouldersInverse

▸ **getHeadShouldersInverse**(): `Promise`<`string`[]\>

#### Returns

`Promise`<`string`[]\>

#### Defined in

[src/StockScreener.ts:174](https://github.com/nielse63/stonksjs/blob/main/packages/stock-screener/src/StockScreener.ts#L174)

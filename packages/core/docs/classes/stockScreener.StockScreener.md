[@stonksjs/core](../README.md) / [Exports](../modules.md) /
[stockScreener](../modules/stockScreener.md) / StockScreener

# Class: StockScreener

[stockScreener](../modules/stockScreener.md).StockScreener

## Table of contents

### Constructors

- [constructor](stockScreener.StockScreener.md#constructor)

### Properties

- [filters](stockScreener.StockScreener.md#filters)

### Methods

- [getFilters](stockScreener.StockScreener.md#getfilters)
- [getTopGainers](stockScreener.StockScreener.md#gettopgainers)
- [getTopLosers](stockScreener.StockScreener.md#gettoplosers)
- [getNewHigh](stockScreener.StockScreener.md#getnewhigh)
- [getNewLow](stockScreener.StockScreener.md#getnewlow)
- [getMostVolatile](stockScreener.StockScreener.md#getmostvolatile)
- [getMostActive](stockScreener.StockScreener.md#getmostactive)
- [getUnusualVolume](stockScreener.StockScreener.md#getunusualvolume)
- [getOverbought](stockScreener.StockScreener.md#getoverbought)
- [getOversold](stockScreener.StockScreener.md#getoversold)
- [getDowngrades](stockScreener.StockScreener.md#getdowngrades)
- [getUpgrades](stockScreener.StockScreener.md#getupgrades)
- [getEarningsBefore](stockScreener.StockScreener.md#getearningsbefore)
- [getEarningsAfter](stockScreener.StockScreener.md#getearningsafter)
- [getRecentInsiderBuying](stockScreener.StockScreener.md#getrecentinsiderbuying)
- [getRecentInsiderSelling](stockScreener.StockScreener.md#getrecentinsiderselling)
- [getMajorNews](stockScreener.StockScreener.md#getmajornews)
- [getHorizontalSR](stockScreener.StockScreener.md#gethorizontalsr)
- [getTlResistance](stockScreener.StockScreener.md#gettlresistance)
- [getTlSupport](stockScreener.StockScreener.md#gettlsupport)
- [getWedgeUp](stockScreener.StockScreener.md#getwedgeup)
- [getWedgeDown](stockScreener.StockScreener.md#getwedgedown)
- [getTriangleAscending](stockScreener.StockScreener.md#gettriangleascending)
- [getTriangleDescending](stockScreener.StockScreener.md#gettriangledescending)
- [getWedge](stockScreener.StockScreener.md#getwedge)
- [getChannelUp](stockScreener.StockScreener.md#getchannelup)
- [getChannelDown](stockScreener.StockScreener.md#getchanneldown)
- [getChannel](stockScreener.StockScreener.md#getchannel)
- [getDoubleTop](stockScreener.StockScreener.md#getdoubletop)
- [getDoubleBottom](stockScreener.StockScreener.md#getdoublebottom)
- [getMultipleTop](stockScreener.StockScreener.md#getmultipletop)
- [getMultipleBottom](stockScreener.StockScreener.md#getmultiplebottom)
- [getHeadShoulders](stockScreener.StockScreener.md#getheadshoulders)
- [getHeadShouldersInverse](stockScreener.StockScreener.md#getheadshouldersinverse)

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

../stock-screener/dist/cjs/types/StockScreener.d.ts:3

## Methods

### getFilters

▸ `Static` **getFilters**(): `Promise`<`Screener`[]\>

#### Returns

`Promise`<`Screener`[]\>

#### Defined in

../stock-screener/dist/cjs/types/StockScreener.d.ts:38

---

### getTopGainers

▸ **getTopGainers**(): `Promise`<`string`[]\>

#### Returns

`Promise`<`string`[]\>

#### Defined in

../stock-screener/dist/cjs/types/StockScreener.d.ts:39

---

### getTopLosers

▸ **getTopLosers**(): `Promise`<`string`[]\>

#### Returns

`Promise`<`string`[]\>

#### Defined in

../stock-screener/dist/cjs/types/StockScreener.d.ts:40

---

### getNewHigh

▸ **getNewHigh**(): `Promise`<`string`[]\>

#### Returns

`Promise`<`string`[]\>

#### Defined in

../stock-screener/dist/cjs/types/StockScreener.d.ts:41

---

### getNewLow

▸ **getNewLow**(): `Promise`<`string`[]\>

#### Returns

`Promise`<`string`[]\>

#### Defined in

../stock-screener/dist/cjs/types/StockScreener.d.ts:42

---

### getMostVolatile

▸ **getMostVolatile**(): `Promise`<`string`[]\>

#### Returns

`Promise`<`string`[]\>

#### Defined in

../stock-screener/dist/cjs/types/StockScreener.d.ts:43

---

### getMostActive

▸ **getMostActive**(): `Promise`<`string`[]\>

#### Returns

`Promise`<`string`[]\>

#### Defined in

../stock-screener/dist/cjs/types/StockScreener.d.ts:44

---

### getUnusualVolume

▸ **getUnusualVolume**(): `Promise`<`string`[]\>

#### Returns

`Promise`<`string`[]\>

#### Defined in

../stock-screener/dist/cjs/types/StockScreener.d.ts:45

---

### getOverbought

▸ **getOverbought**(): `Promise`<`string`[]\>

#### Returns

`Promise`<`string`[]\>

#### Defined in

../stock-screener/dist/cjs/types/StockScreener.d.ts:46

---

### getOversold

▸ **getOversold**(): `Promise`<`string`[]\>

#### Returns

`Promise`<`string`[]\>

#### Defined in

../stock-screener/dist/cjs/types/StockScreener.d.ts:47

---

### getDowngrades

▸ **getDowngrades**(): `Promise`<`string`[]\>

#### Returns

`Promise`<`string`[]\>

#### Defined in

../stock-screener/dist/cjs/types/StockScreener.d.ts:48

---

### getUpgrades

▸ **getUpgrades**(): `Promise`<`string`[]\>

#### Returns

`Promise`<`string`[]\>

#### Defined in

../stock-screener/dist/cjs/types/StockScreener.d.ts:49

---

### getEarningsBefore

▸ **getEarningsBefore**(): `Promise`<`string`[]\>

#### Returns

`Promise`<`string`[]\>

#### Defined in

../stock-screener/dist/cjs/types/StockScreener.d.ts:50

---

### getEarningsAfter

▸ **getEarningsAfter**(): `Promise`<`string`[]\>

#### Returns

`Promise`<`string`[]\>

#### Defined in

../stock-screener/dist/cjs/types/StockScreener.d.ts:51

---

### getRecentInsiderBuying

▸ **getRecentInsiderBuying**(): `Promise`<`string`[]\>

#### Returns

`Promise`<`string`[]\>

#### Defined in

../stock-screener/dist/cjs/types/StockScreener.d.ts:52

---

### getRecentInsiderSelling

▸ **getRecentInsiderSelling**(): `Promise`<`string`[]\>

#### Returns

`Promise`<`string`[]\>

#### Defined in

../stock-screener/dist/cjs/types/StockScreener.d.ts:53

---

### getMajorNews

▸ **getMajorNews**(): `Promise`<`string`[]\>

#### Returns

`Promise`<`string`[]\>

#### Defined in

../stock-screener/dist/cjs/types/StockScreener.d.ts:54

---

### getHorizontalSR

▸ **getHorizontalSR**(): `Promise`<`string`[]\>

#### Returns

`Promise`<`string`[]\>

#### Defined in

../stock-screener/dist/cjs/types/StockScreener.d.ts:55

---

### getTlResistance

▸ **getTlResistance**(): `Promise`<`string`[]\>

#### Returns

`Promise`<`string`[]\>

#### Defined in

../stock-screener/dist/cjs/types/StockScreener.d.ts:56

---

### getTlSupport

▸ **getTlSupport**(): `Promise`<`string`[]\>

#### Returns

`Promise`<`string`[]\>

#### Defined in

../stock-screener/dist/cjs/types/StockScreener.d.ts:57

---

### getWedgeUp

▸ **getWedgeUp**(): `Promise`<`string`[]\>

#### Returns

`Promise`<`string`[]\>

#### Defined in

../stock-screener/dist/cjs/types/StockScreener.d.ts:58

---

### getWedgeDown

▸ **getWedgeDown**(): `Promise`<`string`[]\>

#### Returns

`Promise`<`string`[]\>

#### Defined in

../stock-screener/dist/cjs/types/StockScreener.d.ts:59

---

### getTriangleAscending

▸ **getTriangleAscending**(): `Promise`<`string`[]\>

#### Returns

`Promise`<`string`[]\>

#### Defined in

../stock-screener/dist/cjs/types/StockScreener.d.ts:60

---

### getTriangleDescending

▸ **getTriangleDescending**(): `Promise`<`string`[]\>

#### Returns

`Promise`<`string`[]\>

#### Defined in

../stock-screener/dist/cjs/types/StockScreener.d.ts:61

---

### getWedge

▸ **getWedge**(): `Promise`<`string`[]\>

#### Returns

`Promise`<`string`[]\>

#### Defined in

../stock-screener/dist/cjs/types/StockScreener.d.ts:62

---

### getChannelUp

▸ **getChannelUp**(): `Promise`<`string`[]\>

#### Returns

`Promise`<`string`[]\>

#### Defined in

../stock-screener/dist/cjs/types/StockScreener.d.ts:63

---

### getChannelDown

▸ **getChannelDown**(): `Promise`<`string`[]\>

#### Returns

`Promise`<`string`[]\>

#### Defined in

../stock-screener/dist/cjs/types/StockScreener.d.ts:64

---

### getChannel

▸ **getChannel**(): `Promise`<`string`[]\>

#### Returns

`Promise`<`string`[]\>

#### Defined in

../stock-screener/dist/cjs/types/StockScreener.d.ts:65

---

### getDoubleTop

▸ **getDoubleTop**(): `Promise`<`string`[]\>

#### Returns

`Promise`<`string`[]\>

#### Defined in

../stock-screener/dist/cjs/types/StockScreener.d.ts:66

---

### getDoubleBottom

▸ **getDoubleBottom**(): `Promise`<`string`[]\>

#### Returns

`Promise`<`string`[]\>

#### Defined in

../stock-screener/dist/cjs/types/StockScreener.d.ts:67

---

### getMultipleTop

▸ **getMultipleTop**(): `Promise`<`string`[]\>

#### Returns

`Promise`<`string`[]\>

#### Defined in

../stock-screener/dist/cjs/types/StockScreener.d.ts:68

---

### getMultipleBottom

▸ **getMultipleBottom**(): `Promise`<`string`[]\>

#### Returns

`Promise`<`string`[]\>

#### Defined in

../stock-screener/dist/cjs/types/StockScreener.d.ts:69

---

### getHeadShoulders

▸ **getHeadShoulders**(): `Promise`<`string`[]\>

#### Returns

`Promise`<`string`[]\>

#### Defined in

../stock-screener/dist/cjs/types/StockScreener.d.ts:70

---

### getHeadShouldersInverse

▸ **getHeadShouldersInverse**(): `Promise`<`string`[]\>

#### Returns

`Promise`<`string`[]\>

#### Defined in

../stock-screener/dist/cjs/types/StockScreener.d.ts:71

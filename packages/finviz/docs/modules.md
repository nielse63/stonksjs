[@stonksjs/finviz](README.md) / Exports

# @stonksjs/finviz

Unofficial finviz API

**`Typicalname`**

finviz

## Table of contents

### Classes

- [Finviz](classes/Finviz.md)

### Type Aliases

- [Quote](modules.md#quote-1)
- [Screener](modules.md#screener-1)

### Variables

- [default](modules.md#default)

### Functions

- [getQuote](modules.md#getquote)
- [getScreener](modules.md#getscreener)
- [getScreenersList](modules.md#getscreenerslist)
- [quote](modules.md#quote)
- [screener](modules.md#screener)

## Type Aliases

### Quote

Ƭ **Quote**: `Object`

#### Type declaration

| Name              | Type     |
| :---------------- | :------- |
| `index`           | `string` |
| `pE`              | `number` |
| `epsTtm`          | `number` |
| `insiderOwn`      | `string` |
| `shsOutstand`     | `string` |
| `perfWeek`        | `string` |
| `marketCap`       | `string` |
| `forwardPE`       | `number` |
| `epsNextY`        | `string` |
| `insiderTrans`    | `string` |
| `shsFloat`        | `string` |
| `perfMonth`       | `string` |
| `income`          | `string` |
| `peg`             | `number` |
| `epsNextQ`        | `number` |
| `instOwn`         | `string` |
| `shortFloatRatio` | `string` |
| `perfQuarter`     | `string` |
| `sales`           | `string` |
| `pS`              | `number` |
| `epsThisY`        | `string` |
| `instTrans`       | `string` |
| `shortInterest`   | `string` |
| `perfHalfY`       | `string` |
| `bookSh`          | `number` |
| `pB`              | `number` |
| `roa`             | `string` |
| `targetPrice`     | `number` |
| `perfYear`        | `string` |
| `cashSh`          | `number` |
| `pC`              | `number` |
| `epsNext5Y`       | `string` |
| `roe`             | `string` |
| `52WRange`        | `string` |
| `perfYtd`         | `string` |
| `dividend`        | `string` |
| `pFcf`            | `number` |
| `epsPast5Y`       | `string` |
| `roi`             | `string` |
| `52WHigh`         | `string` |
| `beta`            | `number` |
| `quickRatio`      | `number` |
| `salesPast5Y`     | `string` |
| `grossMargin`     | `string` |
| `52WLow`          | `string` |
| `atr`             | `number` |
| `employees`       | `number` |
| `currentRatio`    | `number` |
| `salesQQ`         | `string` |
| `operMargin`      | `string` |
| `rsi14`           | `number` |
| `volatility`      | `string` |
| `optionable`      | `string` |
| `debtEq`          | `number` |
| `epsQQ`           | `string` |
| `profitMargin`    | `string` |
| `relVolume`       | `number` |
| `prevClose`       | `number` |
| `shortable`       | `string` |
| `ltDebtEq`        | `number` |
| `earnings`        | `string` |
| `payout`          | `string` |
| `avgVolume`       | `string` |
| `price`           | `number` |
| `recom`           | `number` |
| `sma20`           | `string` |
| `sma50`           | `string` |
| `sma200`          | `string` |
| `volume`          | `number` |
| `change`          | `string` |

#### Defined in

[src/types.d.ts:1](https://github.com/nielse63/stonksjs/blob/main/packages/finviz/src/types.d.ts#L1)

---

### Screener

Ƭ **Screener**: `Object`

#### Type declaration

| Name   | Type     |
| :----- | :------- |
| `name` | `string` |
| `url`  | `string` |
| `id`   | `string` |

#### Defined in

[src/types.d.ts:74](https://github.com/nielse63/stonksjs/blob/main/packages/finviz/src/types.d.ts#L74)

## Variables

### default

• `Const` **default**: [`Finviz`](classes/Finviz.md)

#### Defined in

[src/index.ts:9](https://github.com/nielse63/stonksjs/blob/main/packages/finviz/src/index.ts#L9)

## Functions

### getQuote

▸ **getQuote**(`symbol`): `Promise`<`undefined` \|
[`Quote`](modules.md#quote-1)\>

Get quote data for a given symbol

#### Parameters

| Name     | Type     | Description            |
| :------- | :------- | :--------------------- |
| `symbol` | `string` | stock symbo, e.g. AAPL |

#### Returns

`Promise`<`undefined` \| [`Quote`](modules.md#quote-1)\>

- quote object

#### Defined in

[src/Finviz.ts:61](https://github.com/nielse63/stonksjs/blob/main/packages/finviz/src/Finviz.ts#L61)

---

### getScreener

▸ **getScreener**(`screener`): `Promise`<`string`[]\>

Given a Finviz screener url, returns an array of symbols

#### Parameters

| Name       | Type     | Description                 |
| :--------- | :------- | :-------------------------- |
| `screener` | `string` | Finviz screener name or url |

#### Returns

`Promise`<`string`[]\>

- array of stock symbols

#### Defined in

[src/Finviz.ts:138](https://github.com/nielse63/stonksjs/blob/main/packages/finviz/src/Finviz.ts#L138)

---

### getScreenersList

▸ **getScreenersList**(): `Promise`<[`Screener`](modules.md#screener-1)[]\>

Gets a list of pre-defined screeners from Finviz

#### Returns

`Promise`<[`Screener`](modules.md#screener-1)[]\>

- array of available screeners

#### Defined in

[src/Finviz.ts:95](https://github.com/nielse63/stonksjs/blob/main/packages/finviz/src/Finviz.ts#L95)

---

### quote

▸ **quote**(`symbol`): `Promise`<`undefined` \| [`Quote`](modules.md#quote-1)\>

Get quote data for a given symbol

#### Parameters

| Name     | Type     | Description            |
| :------- | :------- | :--------------------- |
| `symbol` | `string` | stock symbo, e.g. AAPL |

#### Returns

`Promise`<`undefined` \| [`Quote`](modules.md#quote-1)\>

- quote object

#### Defined in

[src/Finviz.ts:61](https://github.com/nielse63/stonksjs/blob/main/packages/finviz/src/Finviz.ts#L61)

---

### screener

▸ **screener**(`screener`): `Promise`<`string`[]\>

Given a Finviz screener url, returns an array of symbols

#### Parameters

| Name       | Type     | Description                 |
| :--------- | :------- | :-------------------------- |
| `screener` | `string` | Finviz screener name or url |

#### Returns

`Promise`<`string`[]\>

- array of stock symbols

#### Defined in

[src/Finviz.ts:138](https://github.com/nielse63/stonksjs/blob/main/packages/finviz/src/Finviz.ts#L138)

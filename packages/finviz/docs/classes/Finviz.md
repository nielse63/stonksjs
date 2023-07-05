[@stonksjs/finviz](../README.md) / [Exports](../modules.md) / Finviz

# Class: Finviz

## Table of contents

### Constructors

- [constructor](Finviz.md#constructor)

### Properties

- [api](Finviz.md#api)
- [quoteCache](Finviz.md#quotecache)
- [screenerCache](Finviz.md#screenercache)
- [screenrerListCache](Finviz.md#screenrerlistcache)

### Methods

- [parseQuoteData](Finviz.md#parsequotedata)
- [getQuote](Finviz.md#getquote)
- [parseScreenerResponse](Finviz.md#parsescreenerresponse)
- [getScreenersList](Finviz.md#getscreenerslist)
- [getUrlForScreener](Finviz.md#geturlforscreener)
- [getScreener](Finviz.md#getscreener)

## Constructors

### constructor

• **new Finviz**()

#### Defined in

[src/Finviz.ts:15](https://github.com/nielse63/stonksjs/blob/main/packages/finviz/src/Finviz.ts#L15)

## Properties

### api

• **api**: `AxiosInstance`

#### Defined in

[src/Finviz.ts:10](https://github.com/nielse63/stonksjs/blob/main/packages/finviz/src/Finviz.ts#L10)

---

### quoteCache

• **quoteCache**: `Map`<`string`, [`Quote`](../modules.md#quote-1)\>

#### Defined in

[src/Finviz.ts:11](https://github.com/nielse63/stonksjs/blob/main/packages/finviz/src/Finviz.ts#L11)

---

### screenerCache

• **screenerCache**: `Map`<`string`, `string`[]\>

#### Defined in

[src/Finviz.ts:12](https://github.com/nielse63/stonksjs/blob/main/packages/finviz/src/Finviz.ts#L12)

---

### screenrerListCache

• **screenrerListCache**: `Set`<[`Screener`](../modules.md#screener-1)\>

#### Defined in

[src/Finviz.ts:13](https://github.com/nielse63/stonksjs/blob/main/packages/finviz/src/Finviz.ts#L13)

## Methods

### parseQuoteData

▸ `Static` **parseQuoteData**(`html`): [`Quote`](../modules.md#quote-1)

Parses a given HTML string from Finviz and returns a Quote object

#### Parameters

| Name   | Type     | Description |
| :----- | :------- | :---------- |
| `html` | `string` | html string |

#### Returns

[`Quote`](../modules.md#quote-1)

- quote object

#### Defined in

[src/Finviz.ts:29](https://github.com/nielse63/stonksjs/blob/main/packages/finviz/src/Finviz.ts#L29)

---

### getQuote

▸ **getQuote**(`symbol`): `Promise`<`undefined` \|
[`Quote`](../modules.md#quote-1)\>

Get quote data for a given symbol

#### Parameters

| Name     | Type     | Description            |
| :------- | :------- | :--------------------- |
| `symbol` | `string` | stock symbo, e.g. AAPL |

#### Returns

`Promise`<`undefined` \| [`Quote`](../modules.md#quote-1)\>

- quote object

#### Defined in

[src/Finviz.ts:61](https://github.com/nielse63/stonksjs/blob/main/packages/finviz/src/Finviz.ts#L61)

---

### parseScreenerResponse

▸ `Static` **parseScreenerResponse**(`html`): `string`[]

Parses a given HTML string from Finviz and returns an array of symbols

#### Parameters

| Name   | Type     | Description |
| :----- | :------- | :---------- |
| `html` | `string` | html string |

#### Returns

`string`[]

- array of stock symbols

#### Defined in

[src/Finviz.ts:78](https://github.com/nielse63/stonksjs/blob/main/packages/finviz/src/Finviz.ts#L78)

---

### getScreenersList

▸ **getScreenersList**(): `Promise`<[`Screener`](../modules.md#screener-1)[]\>

Gets a list of pre-defined screeners from Finviz

#### Returns

`Promise`<[`Screener`](../modules.md#screener-1)[]\>

- array of available screeners

#### Defined in

[src/Finviz.ts:95](https://github.com/nielse63/stonksjs/blob/main/packages/finviz/src/Finviz.ts#L95)

---

### getUrlForScreener

▸ **getUrlForScreener**(`screener`): `Promise`<`string`\>

Returns a url for a given Finviz screener

#### Parameters

| Name       | Type     | Description          |
| :--------- | :------- | :------------------- |
| `screener` | `string` | Finviz screener name |

#### Returns

`Promise`<`string`\>

- screener url

#### Defined in

[src/Finviz.ts:122](https://github.com/nielse63/stonksjs/blob/main/packages/finviz/src/Finviz.ts#L122)

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

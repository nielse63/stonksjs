[@stonksjs/core](../README.md) / [Exports](../modules.md) /
[finviz](../modules/finviz.md) / Finviz

# Class: Finviz

[finviz](../modules/finviz.md).Finviz

## Table of contents

### Constructors

- [constructor](finviz.Finviz.md#constructor)

### Properties

- [api](finviz.Finviz.md#api)
- [quoteCache](finviz.Finviz.md#quotecache)
- [screenerCache](finviz.Finviz.md#screenercache)
- [screenrerListCache](finviz.Finviz.md#screenrerlistcache)

### Methods

- [parseQuoteData](finviz.Finviz.md#parsequotedata)
- [getQuote](finviz.Finviz.md#getquote)
- [parseScreenerResponse](finviz.Finviz.md#parsescreenerresponse)
- [getScreenersList](finviz.Finviz.md#getscreenerslist)
- [getUrlForScreener](finviz.Finviz.md#geturlforscreener)
- [getScreener](finviz.Finviz.md#getscreener)

## Constructors

### constructor

• **new Finviz**()

#### Defined in

../finviz/dist/cjs/types/Finviz.d.ts:8

## Properties

### api

• **api**: `AxiosInstance`

#### Defined in

../finviz/dist/cjs/types/Finviz.d.ts:4

---

### quoteCache

• **quoteCache**: `Map`<`string`, `Quote`\>

#### Defined in

../finviz/dist/cjs/types/Finviz.d.ts:5

---

### screenerCache

• **screenerCache**: `Map`<`string`, `string`[]\>

#### Defined in

../finviz/dist/cjs/types/Finviz.d.ts:6

---

### screenrerListCache

• **screenrerListCache**: `Set`<`Screener`\>

#### Defined in

../finviz/dist/cjs/types/Finviz.d.ts:7

## Methods

### parseQuoteData

▸ `Static` **parseQuoteData**(`html`): `Quote`

Parses a given HTML string from Finviz and returns a Quote object

#### Parameters

| Name   | Type     | Description |
| :----- | :------- | :---------- |
| `html` | `string` | html string |

#### Returns

`Quote`

- quote object

#### Defined in

../finviz/dist/cjs/types/Finviz.d.ts:14

---

### getQuote

▸ **getQuote**(`symbol`): `Promise`<`any`\>

Get quote data for a given symbol

#### Parameters

| Name     | Type     | Description            |
| :------- | :------- | :--------------------- |
| `symbol` | `string` | stock symbo, e.g. AAPL |

#### Returns

`Promise`<`any`\>

- quote object

#### Defined in

../finviz/dist/cjs/types/Finviz.d.ts:20

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

../finviz/dist/cjs/types/Finviz.d.ts:27

---

### getScreenersList

▸ **getScreenersList**(): `Promise`<`Screener`[]\>

Gets a list of pre-defined screeners from Finviz

#### Returns

`Promise`<`Screener`[]\>

- array of available screeners

#### Defined in

../finviz/dist/cjs/types/Finviz.d.ts:32

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

../finviz/dist/cjs/types/Finviz.d.ts:38

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

../finviz/dist/cjs/types/Finviz.d.ts:44

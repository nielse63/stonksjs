[@stonksjs/finviz - v2.0.4](../README.md) / [Exports](../modules.md) / src/quote

# Module: src/quote

## Table of contents

### References

- [default](src_quote.md#default)

### Functions

- [getQuote](src_quote.md#getquote)
- [parseQuoteData](src_quote.md#parsequotedata)

## References

### default

Renames and re-exports [getQuote](src_quote.md#getquote)

## Functions

### getQuote

▸ **getQuote**(`symbol`): `Promise`<[`Quote`](src_types.md#quote)\>

Get quote data for a given symbol

#### Parameters

| Name     | Type     | Description            |
| :------- | :------- | :--------------------- |
| `symbol` | `string` | stock symbo, e.g. AAPL |

#### Returns

`Promise`<[`Quote`](src_types.md#quote)\>

- quote object

#### Defined in

[src/quote.ts:47](https://github.com/nielse63/stonksjs/blob/main/packages/finviz/src/quote.ts#L47)

---

### parseQuoteData

▸ `Protected` **parseQuoteData**(`html`): [`Quote`](src_types.md#quote)

Parses a given HTML string from Finviz and returns a Quote object

#### Parameters

| Name   | Type     | Description |
| :----- | :------- | :---------- |
| `html` | `string` | html string |

#### Returns

[`Quote`](src_types.md#quote)

- quote object

#### Defined in

[src/quote.ts:15](https://github.com/nielse63/stonksjs/blob/main/packages/finviz/src/quote.ts#L15)

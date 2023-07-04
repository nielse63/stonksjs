[@stonksjs/finviz - v2.0.4](../README.md) / [Exports](../modules.md) /
src/screener

# Module: src/screener

## Table of contents

### References

- [default](src_screener.md#default)

### Functions

- [getScreener](src_screener.md#getscreener)
- [parseScreenerResponse](src_screener.md#parsescreenerresponse)

## References

### default

Renames and re-exports [getScreener](src_screener.md#getscreener)

## Functions

### getScreener

▸ **getScreener**(`url`): `Promise`<`unknown`[]\>

Given a Finviz screener url, returns an array of symbols

#### Parameters

| Name  | Type     | Description         |
| :---- | :------- | :------------------ |
| `url` | `string` | Finviz screener url |

#### Returns

`Promise`<`unknown`[]\>

- array of stock symbols

#### Defined in

[src/screener.ts:29](https://github.com/nielse63/stonksjs/blob/main/packages/finviz/src/screener.ts#L29)

---

### parseScreenerResponse

▸ `Protected` **parseScreenerResponse**(`html`): `unknown`[]

Parses a given HTML string from Finviz and returns an array of symbols

#### Parameters

| Name   | Type     | Description |
| :----- | :------- | :---------- |
| `html` | `string` | html string |

#### Returns

`unknown`[]

- array of stock symbols

#### Defined in

[src/screener.ts:11](https://github.com/nielse63/stonksjs/blob/main/packages/finviz/src/screener.ts#L11)

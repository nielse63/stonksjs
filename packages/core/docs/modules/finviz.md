[@stonksjs/core](../README.md) / [Exports](../modules.md) / finviz

# Namespace: finviz

Unofficial finviz API

**`Typicalname`**

finviz

## Table of contents

### References

- [Screener](finviz.md#screener)

### Classes

- [Finviz](../classes/finviz.Finviz.md)

### Variables

- [Quote](finviz.md#quote)
- [default](finviz.md#default)

### Functions

- [getQuote](finviz.md#getquote)
- [getScreener](finviz.md#getscreener)
- [getScreenersList](finviz.md#getscreenerslist)
- [quote](finviz.md#quote-1)
- [screener](finviz.md#screener-1)

## References

### Screener

Renames and re-exports [Quote](finviz.md#quote)

## Variables

### Quote

• **Quote**: `any`

---

### default

• `Const` **default**: [`Finviz`](../classes/finviz.Finviz.md)

#### Defined in

../finviz/dist/cjs/types/index.d.ts:8

## Functions

### getQuote

▸ **getQuote**(`symbol`): `Promise`<`any`\>

#### Parameters

| Name     | Type     |
| :------- | :------- |
| `symbol` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

../finviz/dist/cjs/types/index.d.ts:10

---

### getScreener

▸ **getScreener**(`screener`): `Promise`<`string`[]\>

#### Parameters

| Name       | Type     |
| :--------- | :------- |
| `screener` | `string` |

#### Returns

`Promise`<`string`[]\>

#### Defined in

../finviz/dist/cjs/types/index.d.ts:11

---

### getScreenersList

▸ **getScreenersList**(): `Promise`<`any`[]\>

#### Returns

`Promise`<`any`[]\>

#### Defined in

../finviz/dist/cjs/types/index.d.ts:12

---

### quote

▸ **quote**(`symbol`): `Promise`<`any`\>

#### Parameters

| Name     | Type     |
| :------- | :------- |
| `symbol` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

../finviz/dist/cjs/types/index.d.ts:13

---

### screener

▸ **screener**(`screener`): `Promise`<`string`[]\>

#### Parameters

| Name       | Type     |
| :--------- | :------- |
| `screener` | `string` |

#### Returns

`Promise`<`string`[]\>

#### Defined in

../finviz/dist/cjs/types/index.d.ts:14

[@stonksjs/core](README.md) / Exports

# @stonksjs/core

## Table of contents

### Variables

- [finviz](modules.md#finviz)
- [default](modules.md#default)
- [stockScreener](modules.md#stockscreener)

### Functions

- [quote](modules.md#quote)

## Variables

### finviz

• `Const` **finviz**: `Finviz`

#### Defined in

[src/index.ts:5](https://github.com/nielse63/stonksjs/blob/main/packages/core/src/index.ts#L5)

---

### default

• **default**: `Object`

#### Type declaration

| Name            | Type                                        |
| :-------------- | :------------------------------------------ |
| `finviz`        | `Finviz`                                    |
| `quote`         | (`symbol`: `string`) => `Promise`<`Quote`\> |
| `stockScreener` | `StockScreener`                             |

#### Defined in

[src/index.ts:9](https://github.com/nielse63/stonksjs/blob/main/packages/core/src/index.ts#L9)

---

### stockScreener

• `Const` **stockScreener**: `StockScreener`

#### Defined in

../stock-screener/dist/cjs/types/index.d.ts:5

## Functions

### quote

▸ **quote**(`symbol`): `Promise`<`Quote`\>

Gets details quote information for a given ticker symbol

**`Example`**

```ts
const quote = require('@stonksjs/quote');

const data = await quote('MSFT'); // object of financial data
```

#### Parameters

| Name     | Type     | Description                |
| :------- | :------- | :------------------------- |
| `symbol` | `string` | ticker symbol of the asset |

#### Returns

`Promise`<`Quote`\>

- data about the stock

#### Defined in

../quote/dist/cjs/types/index.d.ts:83

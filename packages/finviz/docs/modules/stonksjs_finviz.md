[@stonksjs/finviz - v2.0.4](../README.md) / [Exports](../modules.md) /
@stonksjs/finviz

# Module: @stonksjs/finviz

Unofficial finviz API

**`Typicalname`**

finviz

## Table of contents

### Properties

- [export&#x3D;](stonksjs_finviz.md#export=)

## Properties

### export&#x3D;

• **export=**: `Object`

#### Type declaration

| Name       | Type                                                              |
| :--------- | :---------------------------------------------------------------- |
| `quote`    | (`symbol`: `string`) => `Promise`<[`Quote`](src_types.md#quote)\> |
| `screener` | (`url`: `string`) => `Promise`<`unknown`[]\>                      |

#### Defined in

[src/index.ts:9](https://github.com/nielse63/stonksjs/blob/main/packages/finviz/src/index.ts#L9)

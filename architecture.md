# Architecture

stonksjs is a monorepo comprised of scoped node modules that can be used individually or in
conjunction with one another. The reasons for this are:

- To encapsulate functionality
- Focus testing on the expected outcome and not implementation
- Allow for installation at the feature level, reducing dependency bloat
- To keep the code as DRY as possible and follow best practices

## Directory Structure

Each package should follow the same directory structur:

```
packages/
└── package-one/
    ├── docs/
    ├── lib/
    │   ├── __tests__/
    │   │   └── packageOne.spec.js
    │   └── packageOne.js
    ├── README.md
    ├── package.json
    └── index.js
```

The main entry for each package is `index.js` with the source living inside the `lib/` directory.
All test files should be in a `__tests__` folder that is at the same directory level as thee source
they are testing.

## Design Patterns

Whatever patterns are used for a given package should be chosen carefully to meet that packages
unique needs and challenges. However, the public API for each package should be exposed as either a
`Function` or `Object`. Example:

```js
const collection = require('@stonksjs/robinhood-collection');
const finviz = require('@stonksjs/finviz');

// public api is a function
const data = await collection('etf');

// public api is a plain object
const quote = await finviz.getQuote('MSFT');
```

The reason behind this is to provide a low barrier of entry for users, and to allow for a more
functional approach when imported, as opposed to object-oriented.

Internally, however, most source files should be defined using the object-oriented `class`. The
purpose for this is to maintain a consistent style thoughout the project, and to take advantage of
instantiated object, computed properties, etc.

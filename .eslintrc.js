module.exports = {
  root: true,
  parser: 'babel-eslint',
  extends: ['airbnb-base'],
  plugins: ['jest'],
  env: {
    browser: false,
    node: true,
  },
  rules: {
    'no-console': 'off',
    'class-methods-use-this': 'off',
    'no-restricted-globals': 'warn',
    'no-underscore-dangle': 'off',
    'max-len': ['warn', { ignoreComments: true }],
    'no-restricted-syntax': ['error', {
      selector: 'ForInStatement',
      message: 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
    },
    {
      selector: 'LabeledStatement',
      message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
    },
    {
      selector: 'WithStatement',
      message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
    }],
    'no-await-in-loop': 'warn',
    'no-empty': ['error', { allowEmptyCatch: true }],
    'import/order': 'off',
  },
  overrides: [
    {
      files: ['*.test.js', '*.spec.js'],
      env: {
        jest: true,
      },
      rules: {
        'no-console': 'off',
        'global-require': 'off',
      },
    },
    {
      files: ['bin/**/*'],
      rules: {
        'no-console': 'off',
        'import/no-extraneous-dependencies': 'off',
      },
    },
  ],
};

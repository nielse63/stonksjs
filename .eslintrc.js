module.exports = {
  root: true,
  parser: 'babel-eslint',
  extends: ['airbnb-base'],
  plugins: ['jest'],
  env: {
    browser: false,
    node: true,
    jest: true,
  },
  rules: {
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'class-methods-use-this': 'off',
    'no-restricted-globals': 'warn',
    'no-underscore-dangle': 'off',
    'max-len': [
      'warn',
      {
        code: 100,
        ignoreComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
      },
    ],
    'no-await-in-loop': 'warn',
    'no-empty': ['error', { allowEmptyCatch: true }],
    'import/order': 'off',
    'valid-jsdoc': 'warn',
    'operator-linebreak': ['error', 'after', { overrides: { "= 'http": 'before' } }],
  },
  overrides: [
    {
      files: ['*.test.js', '*.spec.js'],
      rules: {
        'no-console': 'warn',
        'global-require': 'off',
        'no-new': 'off',
      },
    },
    {
      files: ['.bin/**/*'],
      rules: {
        'no-console': 'off',
        'import/no-extraneous-dependencies': 'off',
      },
    },
  ],
};

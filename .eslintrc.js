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
    'class-methods-use-this': 'warn',
    'max-len': [
      'warn',
      {
        code: 80,
        ignoreComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
      },
    ],
    'valid-jsdoc': 'warn',
    'operator-linebreak': [
      'error',
      'after',
      { overrides: { "= 'http": 'before' } },
    ],
  },
  overrides: [
    {
      files: ['*.test.js', '*.spec.js'],
      rules: {
        'no-console': 'warn',
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

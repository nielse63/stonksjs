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
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'class-methods-use-this': 'off',
    'no-restricted-globals': 'warn',
    'no-underscore-dangle': 'off',
    'max-len': ['warn', { ignoreComments: true }],
  },
  overrides: [
    {
      files: ['*.test.js', '*.spec.js'],
      env: {
        jest: true,
      },
      rules: {
        'no-console': 'off',
      },
    },
  ],
};

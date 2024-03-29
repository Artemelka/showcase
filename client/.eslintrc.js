module.exports = {
  extends: ['@wildberries', 'prettier'],
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  globals: {
    __DEV__: true,
    __SERVER__: false,
    __CLIENT__: false,
    location: false,
    env: false,
  },
  rules: {
    '@typescript-eslint/camelcase': 'off',
    'no-param-reassign': 'off',
    camelcase: 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'react/no-access-state-in-setstate': 'off',
    'react/no-array-index-key': 'error',
    'react/no-danger': 'off',
    'no-plusplus': 'off',
    'id-length': 'off',
  },
};

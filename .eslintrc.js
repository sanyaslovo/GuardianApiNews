module.exports = {
  parser: 'babel-eslint',
  extends: [
    'eslint:recommended',
    'airbnb-base',
  ],
  env: {
    node: true,
    browser: true,
    es6: true,
  },
  rules: {
    'linebreak-style': 0,
    'no-unused-vars': 'off',
    'eol-last': 0,
  },
};

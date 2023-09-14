module.exports = {
  env: {
    'browser': true,
    'es2021': true
  },
  extends: 'eslint:recommended',
  rules: {
    'semi': ['error', 'always'], 
    'indent': ['error', 2], 
    'quotes': ['error', 'single'], 
    'no-console': 'off', 
  },
};  
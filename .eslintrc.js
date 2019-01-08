module.exports = {
  root: true,
  env: {
    node: true
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true
      }
    ],
    'no-useless-escape': 0,
    'no-control-regex': 0
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/prettier',
    'eslint:recommended'
  ]
}

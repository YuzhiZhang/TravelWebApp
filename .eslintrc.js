module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', '@vue/prettier'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 尽可能地使用单引号,允许字符串使用单引号或双引号，只要字符串中包含了一个其它引号
    quotes: ['error', 'single', { avoidEscape: true }],
    'no-useless-escape': 0,
    'no-control-regex': 0
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}

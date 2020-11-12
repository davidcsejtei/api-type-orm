module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module'
  },
  extends: [
    'plugin:@typescript-eslint/recommended'
  ],
  rules: {
    '@typescript-eslint/ban-types': 'off',
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true
      }
    ],
    complexity: ['error', { max: 9 }],
    'comma-dangle': ['error', 'never'],
    '@typescript-eslint/no-unused-vars': 'off'
  }
};

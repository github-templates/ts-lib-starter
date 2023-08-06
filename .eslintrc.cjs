module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'mo',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  rules: {
    'no-magic-numbers': 'off',
    // https://github.com/typescript-eslint/typescript-eslint/pull/2609
    'no-duplicate-imports': 'off',
    '@typescript-eslint/no-duplicate-imports': [ 'error' ],
  },
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: [ './tsconfig.json' ],
  },
  plugins: [
    '@typescript-eslint'
  ],
  root: true,
}

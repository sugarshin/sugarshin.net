module.exports = {
  root: true,
  ignorePatterns: [
    '.nuxt',
    'build',
  ],
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    'eslint:recommended',
    '@nuxtjs',
    'plugin:prettier/recommended',
    'prettier',
    'prettier/vue',
  ],
  plugins: [
    'prettier',
  ],
  rules: {
    'prettier/prettier': 'error',
    'vue/html-self-closing': 'off',
  },
}

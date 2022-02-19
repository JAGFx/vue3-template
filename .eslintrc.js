module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    'plugin:vue/vue3-strongly-recommended',
    'plugin:vue/vue3-recommended',
    'prettier'
  ],
  plugins: ['vue', 'html', 'prettier'],
  rules: {
    'no-console': 1,
    'no-debugger': 2,
    'no-mixed-spaces-and-tabs': [2, 'smart-tabs'],
    'prettier/prettier': 'error'
  }
};

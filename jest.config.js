/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

module.exports = {
  roots: ['<rootDir>/src', '<rootDir>/test'],
  clearMocks: true,
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['src/**/*.vue', 'src/**/*.js', '!src/main.js'],
  moduleFileExtensions: ['js', 'json', 'vue'],
  moduleNameMapper: {
    '@/(.*)$': '<rootDir>/src/$1'
  },
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.vue$': '@vue/vue3-jest'
  }
};

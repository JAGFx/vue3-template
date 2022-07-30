module.exports = {
  moduleNameMapper: {
    '@/(.*)$': '<rootDir>/src/$1'
  },
  transform: {
    '^.+\\.js$': ['babel-jest', { configFile: './tools/.babelrc.json' }]
  },
  testEnvironment: 'node',
  clearMocks: true,
  rootDir: '../'
};

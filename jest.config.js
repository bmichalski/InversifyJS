/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  transform: {
    '\\.ts?$': ['ts-jest', {
      tsconfig: 'test/tsconfig.json'
    }]
  },
  testEnvironment: 'node',
  verbose: true,
  testMatch: [
    '<rootDir>/test/**/*.test.ts'
  ],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};
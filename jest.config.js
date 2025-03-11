const nextJest = require('next/jest');

/** @type {import('jest').Config} */
const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});

// Add any custom config to be passed to Jest
const config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',

  // Use testRegex to find test files with .test.js or .test.jsx extensions
  testRegex: '(/tests/.*|(\\.|/)(test|spec))\\.jsx?$',

  // Optionally, ignore specific paths
  testPathIgnorePatterns: ['/node_modules/', '/src/'],  // Ignore src if tests are outside

  // Add the moduleNameMapper for resolving the '@' alias
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1', // Adjust the path based on where your code is in the project
  },

  // Optionally, if you need to set up anything before tests run
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(config);

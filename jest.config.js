const config = {
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  testEnvironment: 'jsdom',
  globals: {
    crypto: require('crypto'),
  },
  transform: {
    '^.+\\.[t|j]sx?$': 'babel-jest',
  },
  moduleDirectories: [
    '../../node_modules/msw/node_modules', // to resolve right path-to-regexp module for msw
    '../../node_modules',
    'node_modules',
  ],
  // collectCoverageFrom: ["src/**/*.{js,jsx,ts,tsx}"],
  coverageDirectory: 'coverage',
  watchPathIgnorePatterns: ['node_modules'],
  testPathIgnorePatterns: [
    '<rootDir>/src/assets/*.{js,jsx}',
    '<rootDir>/src/theme/*.{js,jsx}',
    '<rootDir>/src/utils/*.{js,jsx}',
  ],
  moduleNameMapper: {
    '\\.(css|scss)$': '<rootDir>/src/test-utils/stylesGlobalStub.js',
    '\\.(svg|png)$': '<rootDir>/src/test-utils/imageGlobalStub.js',
    '@/(.*)$': '<rootDir>/src/$1',
  },
  setupFiles: [],
  setupFilesAfterEnv: [
    '<rootDir>/src/test-utils/testSetup/globals.js',
    '<rootDir>/src/test-utils/testSetup/jestAxe.js',
  ],
  // Jest error with esm module while using fluent-ui
  // Ref: https://stackoverflow.com/questions/49263429/jest-gives-an-error-syntaxerror-unexpected-token-export/49676319#49676319
  transformIgnorePatterns: [
    '<rootDir>/node_modules/(?!(@fluentui/react|@microsoft/oteljs|@commonschema/oteljs-schema-pu)|@ms/centro-hvc-loader/|@ms-ofb/officebrowserfeedbacknpm/)',
  ],
  // can be uncommented when we enfore the coverage thresholds for the entire react codebase
  // coverageThreshold: {
  //   "src/react/**/*{js,jsx}": {
  //     "branches": 80,
  //     "functions": 80,
  //     "lines": 80,
  //     "statements": 80
  //   }
  // }
};

module.exports = config;

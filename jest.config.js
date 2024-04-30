/** @type {import('jest').Config} */

export default {
  testEnvironment: 'node',
  transform: {},
  transformIgnorePatterns: ['node_modules/(?!variables/.*)'],
};

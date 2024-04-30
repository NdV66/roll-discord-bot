import { jest } from '@jest/globals';

export const loggerMock = {
  log: jest.fn(),
  error: jest.fn(),
  warn: jest.fn(),
};

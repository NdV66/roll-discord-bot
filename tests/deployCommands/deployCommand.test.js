import { loggerMock } from '../mocks/logger';
import { deployCommand } from '../../deployCommands/deployCommand';
import { jest } from '@jest/globals';

const restMock = { put: jest.fn().mockReturnValue('ok') };
const commandsMock = ['{}'];

describe('deployCommand', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('Should deploy commands', async () => {
    //given
    //when
    await deployCommand(restMock, commandsMock, loggerMock);
    //then
    expect(loggerMock.log).toHaveBeenCalledTimes(2);
  });

  it('Should not deploy commands, when there is an error', async () => {
    //given
    restMock.put = jest.fn(() => {
      throw new Error();
    });
    //when
    await deployCommand(restMock, commandsMock, loggerMock);
    //then
    expect(loggerMock.error).toHaveBeenCalledTimes(1);
  });
});

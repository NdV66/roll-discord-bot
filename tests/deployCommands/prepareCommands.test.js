import { ERROR_TEXTS } from '../../data/errorTexts';
import { allCommands } from '../../commands';
import { rollCommand } from '../../commands/roll';
import { rollsCommand } from '../../commands/rolls';
import { prepareCommands } from '../../deployCommands/prepareCommands';
import { loggerMock } from '../mocks/logger';
import { jest } from '@jest/globals';

describe('prepareCommands', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('Should prepare and return all commands', () => {
    //given
    const expectedCommandsAmount = 2;
    const expectedCommandsNames = [rollCommand.name, rollsCommand.name];
    //when
    const result = prepareCommands(allCommands, loggerMock);
    //then
    expect(result.length).toBe(expectedCommandsAmount);
    expect(result.map((el) => el.name)).toEqual(expectedCommandsNames);
  });

  it('Should log error and return an empty array, when something was wrong', () => {
    //given
    //when
    const result = prepareCommands([{}], loggerMock);
    //then
    expect(loggerMock.warn).toHaveBeenCalledTimes(1);
    expect(loggerMock.warn).toHaveBeenCalledWith(ERROR_TEXTS.MISSING_PROPERTY);
    expect(result.length).toBe(0);
  });
});

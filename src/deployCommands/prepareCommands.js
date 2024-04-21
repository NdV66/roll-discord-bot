import { ERROR_TEXTS } from '../data/errorTexts.js';

export const prepareCommands = (allCommands, logger) => {
  const commands = [];

  for (let command of allCommands) {
    if ('data' in command && 'execute' in command) {
      commands.push(command.data.toJSON());
    } else {
      logger.warn(ERROR_TEXTS.MISSING_PROPERTY);
    }
  }

  return commands;
};

import { rollCommand } from './roll.js';
import { rollsCommand } from './rolls.js';

export const allCommandsMap = new Map([
  [rollCommand.name, rollCommand],
  [rollsCommand.name, rollsCommand],
]);

export const allCommands = allCommandsMap.values();

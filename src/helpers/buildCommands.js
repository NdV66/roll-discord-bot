import { rollCommand } from '../commands/roll.js';
import { Collection } from 'discord.js';

export const buildCommands = () => {
  const commands = new Collection();

  commands.set(rollCommand.name, rollCommand);

  return commands;
};

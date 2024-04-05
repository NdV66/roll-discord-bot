import { rollCommand } from '../commands/utility/roll.js';
import { Collection } from 'discord.js';

export const buildCommands = () => {
  const commands = new Collection();

  commands.set(rollCommand.name, rollCommand);

  return commands;
};

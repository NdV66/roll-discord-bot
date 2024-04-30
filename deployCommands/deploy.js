import { REST } from 'discord.js';
import { ENV } from '../envHelper.js';
import { prepareCommands } from './prepareCommands.js';
import { logger } from '../helpers/logger.js';
import { allCommands } from '../commands/index.js';
import { deployCommand } from './deployCommand.js';

const commands = prepareCommands(allCommands, logger);
const rest = new REST().setToken(ENV.DISCORD_TOKEN);

(async () => deployCommand(rest, commands, logger))();

import { REST, Routes } from 'discord.js';
import { ENV } from '../../envHelper.js';
import { prepareCommands } from './prepareCommands.js';
import { logger } from '../helpers/logger.js';
import { ERROR_TEXTS } from '../data/errorTexts.js';

const commands = prepareCommands();
const rest = new REST().setToken(ENV.DISCORD_TOKEN);

(async () => {
  try {
    logger.log(ERROR_TEXTS.REFRESH_START);

    const data = await rest.put(Routes.applicationGuildCommands(ENV.CLIENT_ID, ENV.GUILD_ID), {
      body: commands,
    });

    logger.log(ERROR_TEXTS.REFRESH_FINISH_OK, data);
  } catch (error) {
    console.error(error);
  }
})();

import { Routes } from 'discord.js';
import { ENV } from '../../envHelper.js';
import { ERROR_TEXTS } from '../data/errorTexts.js';

export const deployCommand = async (rest, commands, logger) => {
  try {
    logger.log(ERROR_TEXTS.REFRESH_START);

    const data = await rest.put(Routes.applicationGuildCommands(ENV.CLIENT_ID, ENV.GUILD_ID), {
      body: commands,
    });

    logger.log(ERROR_TEXTS.REFRESH_FINISH_OK, data);
  } catch (error) {
    logger.error(error);
  }
};

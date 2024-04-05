import { ERROR_TEXTS } from '../data/errorTexts.js';
import { logger } from './logger.js';

export const handleCommandsError = async (error, interaction) => {
  logger.error(error);

  const body = {
    content: ERROR_TEXTS.COMMAND_ERROR,
    ephemeral: true,
  };

  if (interaction.replied || interaction.deferred) {
    await interaction.followUp(body);
  } else {
    await interaction.reply(body);
  }
};

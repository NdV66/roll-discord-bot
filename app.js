import { Client, Events, GatewayIntentBits } from 'discord.js';

import { ENV } from './envHelper.js';
import { allCommandsMap } from './src/commands/index.js';
import { handleCommandsError } from './src/helpers/handleCommandsError.js';
import { logger } from './src/helpers/logger.js';
import { DICE_IDS } from './src/data/diceIds.js';
import { handleDiceButtonClick } from './src/commands/handleDiceButtonClick.js';
import { rollService } from './src/services/rollService.js';

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once(Events.ClientReady, (readyClient) => {
  logger.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

client.on(Events.InteractionCreate, async (interaction) => {
  if (!interaction.isChatInputCommand() && !interaction.isButton()) return;

  if (Object.values(DICE_IDS).includes(interaction.customId)) {
    handleDiceButtonClick(interaction, interaction.customId, rollService);
    return;
  }

  const command = allCommandsMap.get(interaction.commandName);
  try {
    await command.execute(interaction);
  } catch (error) {
    await handleCommandsError(error, interaction);
  }
});

client.login(ENV.DISCORD_TOKEN);

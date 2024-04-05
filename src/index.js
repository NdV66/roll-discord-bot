import { Client, Events, GatewayIntentBits } from 'discord.js';
import { buildCommands } from './helpers/buildCommands.js';
import { ENV } from '../envHelper.js';
import { allCommandsMap } from './commands/index.js';
import { handleCommandsError } from './helpers/handleCommandsError.js';
import { logger } from './helpers/logger.js';

const client = new Client({ intents: [GatewayIntentBits.Guilds] });
client.commands = buildCommands();

client.once(Events.ClientReady, (readyClient) => {
  logger.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

client.on(Events.InteractionCreate, async (interaction) => {
  if (!interaction.isChatInputCommand()) return;
  const command = allCommandsMap.get(interaction.commandName);

  try {
    await command.execute(interaction);
  } catch (error) {
    await handleCommandsError(error);
  }
});

client.login(ENV.DISCORD_TOKEN);

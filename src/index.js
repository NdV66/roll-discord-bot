import { Client, Events, GatewayIntentBits } from 'discord.js';
import { buildCommands } from './helpers/buildCommands.js';
import { ENV } from '../envHelper.js';
import { allCommandsMap } from './commands/index.js';
import { handleCommandsError } from './helpers/handleCommandsError.js';

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.commands = buildCommands();

client.once(Events.ClientReady, (readyClient) => {
  console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

client.on(Events.InteractionCreate, async (interaction) => {
  if (!interaction.isChatInputCommand()) return;
  console.log('[INTERACTION]', interaction, '\n\n');

  const command = allCommandsMap.get(interaction.commandName);
  if (!command) await handleCommandsError(new Error('This command is not existed'));

  try {
    await command.execute(interaction);
  } catch (error) {
    await handleCommandsError(error);
  }
});

client.login(ENV.DISCORD_TOKEN);

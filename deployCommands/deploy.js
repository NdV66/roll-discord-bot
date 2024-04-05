import { REST, Routes } from 'discord.js';
import { allCommands } from '../src/commands/index.js';
import { ENV } from '../envHelper.js';

const commands = [];

for (let command of allCommands) {
  if ('data' in command && 'execute' in command) {
    commands.push(command.data.toJSON());
  } else {
    console.log(
      `[WARNING] The command at this file is missing a required "data" or "execute" property.`,
    );
  }
}

const rest = new REST().setToken(ENV.DISCORD_TOKEN);
(async () => {
  try {
    console.log(`Started refreshing ${commands.length} application (/) commands.`);

    const data = await rest.put(Routes.applicationGuildCommands(ENV.CLIENT_ID, ENV.GUILD_ID), {
      body: commands,
    });

    console.log(`Successfully reloaded ${data.length} application (/) commands.`);
  } catch (error) {
    console.error(error);
  }
})();

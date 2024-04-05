import { SlashCommandBuilder } from 'discord.js';

const name = 'roll';
const data = new SlashCommandBuilder().setName(name).setDescription('Replies with Pong!');

const execute = async (interaction) => {
  await interaction.reply(
    `This command was run by ${interaction.user.username}, who joined on ${interaction.member.joinedAt}.`,
  );
};

export const rollCommand = {
  data,
  name,
  execute,
};

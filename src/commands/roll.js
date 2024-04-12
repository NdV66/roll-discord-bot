import { SlashCommandBuilder } from 'discord.js';
import { TEXTS } from '../data/texts.js';
import { rollService } from '../services/rollService.js';
import { rollParser } from '../services/rollParser.js';
import { ERROR_TEXTS } from '../data/errorTexts.js';

const name = 'roll';
const data = new SlashCommandBuilder()
  .setName(name)
  .setDescription(TEXTS.ROLL_DESCRIPTION)
  .addStringOption((option) =>
    option.setName('dice-type').setDescription(TEXTS.ROLL_PARAM_DESCRIPTION).setRequired(true),
  );

const execute = async (interaction) => {
  const requestedRoll = interaction.options.getString('dice-type');
  const isRequestRollInputOk = rollParser.validateRollInput(requestedRoll);

  if (!isRequestRollInputOk) throw new Error(ERROR_TEXTS.COMMAND_WRONG_PARAM);
  const rollResult = rollService.rollDie().join(', ');

  await interaction.reply(`RESULT: ${rollResult}, ${requestedRoll}.`);
};

export const rollCommand = {
  data,
  name,
  execute,
};

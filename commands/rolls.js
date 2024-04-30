import { SlashCommandBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder } from 'discord.js';
import { TEXTS } from '../data/texts.js';
import { DICE_IDS } from '../data/diceIds.js';

const name = 'rolls';
const data = new SlashCommandBuilder().setName(name).setDescription(TEXTS.ROLLS_DESCRIPTION);

const _prepareButton = (id, text) =>
  new ButtonBuilder().setCustomId(id).setLabel(text).setStyle(ButtonStyle.Primary);

const execute = async (interaction) => {
  const rollD20 = _prepareButton(DICE_IDS.D_20_BUTTON, TEXTS.D_20_ROLL);
  const rollD12 = _prepareButton(DICE_IDS.D_12_BUTTON, TEXTS.D_12_ROLL);
  const rollD8 = _prepareButton(DICE_IDS.D_8_BUTTON, TEXTS.D_8_ROLL);
  const rollD6 = _prepareButton(DICE_IDS.D_6_BUTTON, TEXTS.D_6_ROLL);
  const rollD4 = _prepareButton(DICE_IDS.D_4_BUTTON, TEXTS.D_4_ROLL);

  const row = new ActionRowBuilder().addComponents(rollD20, rollD12, rollD8, rollD6, rollD4);
  await interaction.reply({
    content: TEXTS.ROLLS_MENU_DESCRIPTION,
    components: [row],
  });
};

export const rollsCommand = {
  data,
  name,
  execute,
};

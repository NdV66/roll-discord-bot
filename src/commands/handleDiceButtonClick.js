import { DICE_IDS } from '../data/diceIds.js';
import { rollService } from '../services/rollService.js';

const buttonTypesMap = new Map([
  [DICE_IDS.D_20_BUTTON, 20],
  [DICE_IDS.D_12_BUTTON, 12],
  [DICE_IDS.D_8_BUTTON, 8],
  [DICE_IDS.D_6_BUTTON, 6],
  [DICE_IDS.D_4_BUTTON, 4],
]);

export const handleDiceButtonClick = async (interaction, type) => {
  const maxValueToRoll = buttonTypesMap.get(type);
  const roll = rollService.rollDieWithMaxValue(maxValueToRoll);
  await interaction.reply(`${roll}`);
};

import { buttonTypesMap } from '../data/diceIds.js';

export const handleDiceButtonClick = async (interaction, type, rollService) => {
  const maxValueToRoll = buttonTypesMap.get(type);
  const roll = rollService.rollDieWithMaxValue(maxValueToRoll);
  await interaction.reply(`${roll}`);
};

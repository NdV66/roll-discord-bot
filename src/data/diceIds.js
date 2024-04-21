// Discord menu is limited do only max 5 buttons, so only 5 dice are available!

export const DICE_IDS = {
  D_20_BUTTON: 'd20button',
  D_12_BUTTON: 'd12button',
  D_8_BUTTON: 'd8button',
  D_6_BUTTON: 'd6button',
  D_4_BUTTON: 'd4button',
};

export const buttonTypesMap = new Map([
  [DICE_IDS.D_20_BUTTON, 20],
  [DICE_IDS.D_12_BUTTON, 12],
  [DICE_IDS.D_8_BUTTON, 8],
  [DICE_IDS.D_6_BUTTON, 6],
  [DICE_IDS.D_4_BUTTON, 4],
]);

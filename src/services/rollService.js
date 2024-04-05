const rollDieWithMaxValue = (max, min = 1) => min + Math.floor(Math.random() * (max - min + 1));

const rollDie = (requestedRoll) => {
  console.log(requestedRoll);
  return '45, 56, 77';
};

export const rollService = {
  rollDie,
  rollDieWithMaxValue,
};

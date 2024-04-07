const rollDieWithMaxValue = (max, min = 1) => min + Math.floor(Math.random() * (max - min + 1));

/*
    @requestedRoll: String - pattern as <x>d<y>, where x is amount of dice and y is a die type
*/
const rollDie = (requestedRoll) => {
  console.log(requestedRoll);
  return '45, 56, 77';
};

export const rollService = {
  rollDie,
  rollDieWithMaxValue,
};

import { extractRollInput } from './rollParser';

const rollDieWithMaxValue = (max, min = 1) => min + Math.floor(Math.random() * (max - min + 1));

/*
    @requestedRoll: String - pattern as <x>d<y>, where x is amount of dice and y is a die type
*/
const rollDie = (requestedRoll) => {
  const { howManyDices, typeDice } = extractRollInput(requestedRoll);
  return new Array(howManyDices).map((_) => rollDieWithMaxValue(typeDice));
};

export const rollService = {
  rollDie,
  rollDieWithMaxValue,
};

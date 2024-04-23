import { rollParser } from './rollParser.js';

const rollDieWithMaxValue = (max, min = 1) => min + Math.floor(Math.random() * (max - min + 1));

/*
    @requestedRoll: String - pattern as <x>d<y>, where x is amount of dice and y is a die type
*/
const rollDie = (requestedRoll) => {
  const extractedDetails = rollParser.extractRollInput(requestedRoll);
  if (!extractedDetails) return null;

  const { howManyDices, typeDice } = extractedDetails;
  const result = [];

  for (let i = 0; i < howManyDices; i++) result.push(rollDieWithMaxValue(typeDice));
  return result;
};

export const rollService = {
  rollDie,
  rollDieWithMaxValue,
};

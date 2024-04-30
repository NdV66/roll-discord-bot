const ROLL_REGEXP = /(^[1-9]+[0-9]*)d(([2-9]+)|([1-9]+[0-9]+))$/;

const validateRollInput = (value) => ROLL_REGEXP.test(value);

const extractRollInput = (value) => {
  const isOk = validateRollInput(value);
  if (!isOk) return null;

  const result = value.match(ROLL_REGEXP);
  return {
    howManyDices: Number.parseInt(result[1], 10),
    typeDice: Number.parseInt(result[2], 10),
  };
};

export const rollParser = {
  validateRollInput,
  extractRollInput,
};

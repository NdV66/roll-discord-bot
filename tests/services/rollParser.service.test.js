import { rollParser } from '../../services/rollParser.js';

const shouldReturnNullWhenGivenValueIsWrong = (value) => {
  //given
  //when
  const result = rollParser.extractRollInput(value);
  //then
  expect(result).toBeNull();
};

const shouldReturnExtractedValuesWhenGivenValueIsOk = ([value, howManyDices, typeDice]) => {
  //given
  const expected = { howManyDices, typeDice };
  //when
  const result = rollParser.extractRollInput(value);
  //then
  expect(result).toEqual(expected);
};

describe('RollParser', () => {
  describe('extractRollInput(value)', () => {
    const okValues = [
      ['1d6', 1, 6],
      ['20d100', 20, 100],
      ['2d4', 2, 4],
    ];
    okValues.forEach((el) =>
      it(`Should return extracted data, when value is ok (${el[0]})`, () =>
        shouldReturnExtractedValuesWhenGivenValueIsOk(el)),
    );

    const wrongValues = [
      '0d6',
      'd9',
      '3d0',
      '-5d6',
      'd6',
      '0d8',
      '87',
      '5d0',
      '5d-8',
      'namo',
      '123',
      'd6d',
      '6D7',
      '2d1',
    ];
    wrongValues.forEach((el) =>
      it(`Should return null, when value is wrong (${el})`, () =>
        shouldReturnNullWhenGivenValueIsWrong(el)),
    );
  });
});

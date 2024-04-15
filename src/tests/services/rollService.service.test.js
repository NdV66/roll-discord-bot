import { rollService } from '../../services/rollService.js';
import { jest } from '@jest/globals';

jest.spyOn(Math, 'random').mockReturnValue(0.1);

const shouldRollDieCorrectly = ([rawValue, expected]) => {
  //given
  //when
  const result = rollService.rollDie(rawValue);
  //then
  expect(result).toEqual(expected);
};

const shouldNotRollDieWhenInputIsWrong = (rawValue) => {
  //given
  //when
  const result = rollService.rollDie(rawValue);
  //then
  expect(result).toBeNull();
};

describe('RollService', () => {
  describe('rollDieWithMaxValue(max, min)', () => {
    it('Should roll with selected max dice values (rollDieWithMaxValue), no min value as argument', () => {
      //given
      const max = 4;
      //when
      const result = rollService.rollDieWithMaxValue(max);
      //then
      expect(result).toBeGreaterThanOrEqual(1);
      expect(result).toBeLessThanOrEqual(max);
    });

    it('Should roll with selected max dice values (rollDieWithMaxValue), no min value as argument', () => {
      //given
      const max = 6;
      const min = 2;
      //when
      const result = rollService.rollDieWithMaxValue(max, min);
      //then
      expect(result).toBeGreaterThanOrEqual(min);
      expect(result).toBeLessThanOrEqual(max);
    });
  });

  describe('rollDie', () => {
    const okCases = [
      ['2d6', [1, 1]],
      ['1d7', [1]],
      ['3d10', [2, 2, 2]],
    ];

    okCases.forEach((el) =>
      it(`Should roll die, when input is ok, value: ${el}`, () => shouldRollDieCorrectly(el)),
    );

    const wrongCases = [
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

    wrongCases.forEach((el) =>
      it(`Should not roll die and return null, when input is not ok, value: ${el}`, () =>
        shouldNotRollDieWhenInputIsWrong(el)),
    );
  });
});

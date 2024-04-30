import { jest } from '@jest/globals';
import { handleDiceButtonClick } from '../../commands/handleDiceButtonClick';
import { DICE_IDS } from '../../data/diceIds';

const interactionMock = { reply: jest.fn() };

const rollServiceMock = {
  rollDie: jest.fn(),
  rollDieWithMaxValue: jest.fn(() => 4),
};

const cases = Object.keys(DICE_IDS);

describe('handleDiceButtonClick', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  cases.forEach((key) => {
    it(`Should handle button click ${key}`, async () => {
      //given
      //when
      await handleDiceButtonClick(interactionMock, DICE_IDS[key], rollServiceMock);
      //then
      expect(interactionMock.reply).toHaveBeenCalledTimes(1);
      expect(interactionMock.reply).toHaveBeenCalledWith('4');
    });
  });
});

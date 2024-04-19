import { ERROR_TEXTS } from '../../data/errorTexts.js';
import { handleCommandsError } from '../../helpers/handleCommandsError';
import { jest } from '@jest/globals';

const interactionMock = {
  replied: false,
  deferred: false,
  followUp: jest.fn(),
  reply: jest.fn(),
};

const body = {
  content: ERROR_TEXTS.COMMAND_ERROR,
  ephemeral: true,
};

const shouldCallFollowUp = async (interaction) => {
  //given
  //when
  await handleCommandsError({}, interaction);
  //then
  expect(interaction.followUp).toHaveBeenCalledTimes(1);
  expect(interaction.followUp).toHaveBeenCalledWith(body);
};

describe('handleCommandsError', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('interaction.followUp() is called', () => {
    const cases = [
      { ...interactionMock, replied: true },
      { ...interactionMock, deferred: true },
      { ...interactionMock, deferred: true, replied: true },
    ];

    cases.forEach((el) =>
      it(`when interaction is: ${JSON.stringify(el)}`, () => shouldCallFollowUp(el)),
    );
  });

  it('Should call interaction.reply()', async () => {
    //given
    //when
    await handleCommandsError({}, interactionMock);
    //then
    expect(interactionMock.reply).toHaveBeenCalledTimes(1);
    expect(interactionMock.reply).toHaveBeenCalledWith(body);
  });
});

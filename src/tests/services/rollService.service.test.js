import { rollService } from '../../services/rollService.js';
import { jest } from '@jest/globals';

describe('RollService', () => {
  beforeEach(() => {
    jest.spyOn(global.Math, 'random').mockReturnValue(0.1);
  });

  describe('rollDieWithMaxValue(max, min)', () => {
    it('Should roll with selected max dice values (rollDieWithMaxValue), no min value as argument', () => {
      const max = 4;
      const result = rollService.rollDieWithMaxValue(max);
      expect(result).toBeGreaterThanOrEqual(1);
      expect(result).toBeLessThanOrEqual(max);
    });

    it('Should roll with selected max dice values (rollDieWithMaxValue), no min value as argument', () => {
      const max = 6;
      const min = 2;
      const result = rollService.rollDieWithMaxValue(max, min);
      expect(result).toBeGreaterThanOrEqual(min);
      expect(result).toBeLessThanOrEqual(max);
    });
  });
});

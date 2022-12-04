const assert = require('node:assert');

const part1 = require('./part1');
const part2 = require('./part2');

describe('Day 3: Rucksack Reorganization', () => {
  it('should find sum of reorganization priorities', () => {
    const input =
      `vJrwpWtwJgWrhcsFMMfFFhFp
       jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
       PmmdzqPrVvPwwTWBwg
       wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
       ttgJtRGJQctTZtZT
       CrZsJsPPZsGzwwsLwLmpwMDw`;

    assert.strictEqual(part1(input), 157);
  });

  describe('Part Two', () => {
    it('should find sum of reorganization priorities for three-elf groups', () => {
      const input =
        `vJrwpWtwJgWrhcsFMMfFFhFp
         jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
         PmmdzqPrVvPwwTWBwg
         wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
         ttgJtRGJQctTZtZT
         CrZsJsPPZsGzwwsLwLmpwMDw`;

      assert.strictEqual(part2(input), 70);
    });
  });
});

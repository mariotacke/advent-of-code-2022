const assert = require('node:assert');

const part1 = require('./part1');
const part2 = require('./part2');

describe('Day 2: Rock Paper Scissors', () => {
  it('should find total score when everything goes exactly according to strategy guide', () => {
    const input =
      `A Y
       B X
       C Z`;

    assert.strictEqual(part1(input), 15);
  });

  describe('Part Two', () => {
    it('should find total score when everything goes exactly according to real strategy guide', () => {
      const input =
        `A Y
         B X
         C Z`;

      assert.strictEqual(part2(input), 12);
    });
  });
});

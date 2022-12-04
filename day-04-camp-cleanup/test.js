const assert = require('node:assert');

const part1 = require('./part1');
const part2 = require('./part2');

describe('Day 4: Camp Cleanup', () => {
  it('should find how many assignment pairs are fully contained', () => {
    const input =
      `2-4,6-8
       2-3,4-5
       5-7,7-9
       2-8,3-7
       6-6,4-6
       2-6,4-8`;

    assert.strictEqual(part1(input), 2);
  });

  describe('Part Two', () => {
    it('should find how many assignment pairs overlap at all', () => {
      const input =
        `2-4,6-8
         2-3,4-5
         5-7,7-9
         2-8,3-7
         6-6,4-6
         2-6,4-8`;

      assert.strictEqual(part2(input), 4);
    });
  });
});

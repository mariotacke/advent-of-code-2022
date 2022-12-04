const assert = require('node:assert');

const part1 = require('./part1');
const part2 = require('./part2');

describe('Day 1: Calorie Counting', () => {
  it('should find most calories carried by elf', () => {
    const input =
      `1000
       2000
       3000

       4000

       5000
       6000

       7000
       8000
       9000

       10000`;

    assert.strictEqual(part1(input), 24000);
  });

  describe('Part Two', () => {
    it('should find most calories carried by top three elves', () => {
      const input =
        `1000
         2000
         3000

         4000

         5000
         6000

         7000
         8000
         9000

         10000`;

      assert.strictEqual(part2(input), 45000);
    });
  });
});

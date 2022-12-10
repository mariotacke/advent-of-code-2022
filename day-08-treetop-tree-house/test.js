const assert = require('node:assert');

const part1 = require('./part1');
const part2 = require('./part2');

describe('Day 8: Treetop Tree House', () => {
  it('should find number of trees visible from the outside', () => {
    const input =
      `30373
       25512
       65332
       33549
       35390`;

    assert.strictEqual(part1(input), 21);
  });

  describe('Part Two', () => {
    it('should find highest scenic score of all trees', () => {
      const input =
        `30373
         25512
         65332
         33549
         35390`;

      assert.strictEqual(part2(input), 8);
    });
  });
});

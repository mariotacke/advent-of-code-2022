const assert = require('node:assert');

const part1 = require('./part1');
const part2 = require('./part2');

describe('Day 9: Rope Bridge', () => {
  it('should find number of unique positions rope tail visits', () => {
    const input =
      `R 4
       U 4
       L 3
       D 1
       R 4
       D 1
       L 5
       R 2`;

    assert.strictEqual(part1(input), 13);
  });

  describe('Part Two', () => {
    it('should find number of unique positions rope tail visits #1', () => {
      const input =
        `R 4
         U 4
         L 3
         D 1
         R 4
         D 1
         L 5
         R 2`;

      assert.strictEqual(part2(input), 1);
    });

    it('should find number of unique positions rope tail visits #2', () => {
      const input =
        `R 5
         U 8
         L 8
         D 3
         R 17
         D 10
         L 25
         U 20`;

      assert.strictEqual(part2(input), 36);
    });
  });
});

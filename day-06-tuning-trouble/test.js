const assert = require('node:assert');

const part1 = require('./part1');
const part2 = require('./part2');

describe('Day 5: Supply Stacks', () => {
  it('should find first start-of-packet marker #1', () => {
    assert.strictEqual(part1('mjqjpqmgbljsphdztnvjfqwrcgsmlb'), 7);
  });

  it('should find first start-of-packet marker #2', () => {
    assert.strictEqual(part1('bvwbjplbgvbhsrlpgdmjqwftvncz'), 5);
  });

  it('should find first start-of-packet marker #3', () => {
    assert.strictEqual(part1('nppdvjthqldpwncqszvftbrmjlhg'), 6);
  });

  it('should find first start-of-packet marker #4', () => {
    assert.strictEqual(part1('nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg'), 10);
  });

  it('should find first start-of-packet marker #5', () => {
    assert.strictEqual(part1('zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw'), 11);
  });

  describe('Part Two', () => {
    it('should find first start-of-message marker #1', () => {
      assert.strictEqual(part2('mjqjpqmgbljsphdztnvjfqwrcgsmlb'), 19);
    });

    it('should find first start-of-message marker #2', () => {
      assert.strictEqual(part2('bvwbjplbgvbhsrlpgdmjqwftvncz'), 23);
    });

    it('should find first start-of-message marker #3', () => {
      assert.strictEqual(part2('nppdvjthqldpwncqszvftbrmjlhg'), 23);
    });

    it('should find first start-of-message marker #4', () => {
      assert.strictEqual(part2('nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg'), 29);
    });

    it('should find first start-of-message marker #5', () => {
      assert.strictEqual(part2('zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw'), 26);
    });
  });
});

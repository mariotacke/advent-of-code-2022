const assert = require('node:assert');

const part1 = require('./part1');
const part2 = require('./part2');

describe('Day 5: Supply Stacks', () => {
  it('should find which crates end up on top', () => {
    const input = [
      '    [D]',
      '[N] [C]',
      '[Z] [M] [P]',
      ' 1   2   3',
      '',
      'move 1 from 2 to 1',
      'move 3 from 1 to 3',
      'move 2 from 2 to 1',
      'move 1 from 1 to 2',
    ].join('\n');

    assert.strictEqual(part1(input), 'CMZ');
  });

  describe('Part Two', () => {
    it('should find which crates end up on top', () => {
      const input = [
        '    [D]',
        '[N] [C]',
        '[Z] [M] [P]',
        ' 1   2   3',
        '',
        'move 1 from 2 to 1',
        'move 3 from 1 to 3',
        'move 2 from 2 to 1',
        'move 1 from 1 to 2',
      ].join('\n');

      assert.strictEqual(part2(input), 'MCD');
    });
  });
});

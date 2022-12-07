const assert = require('node:assert');

const part1 = require('./part1');
const part2 = require('./part2');

describe('Day 7: No Space Left On Device', () => {
  it('should find the total size of directories under 10000 bytes', () => {
    const input =
      `$ cd /
       $ ls
       dir a
       14848514 b.txt
       8504156 c.dat
       dir d
       $ cd a
       $ ls
       dir e
       29116 f
       2557 g
       62596 h.lst
       $ cd e
       $ ls
       584 i
       $ cd ..
       $ cd ..
       $ cd d
       $ ls
       4060174 j
       8033020 d.log
       5626152 d.ext
       7214296 k`;

    assert.strictEqual(part1(input), 95437);
  });

  describe('Part Two', () => {
    it('should find the smallest directory providing enough space for update', () => {
      const input =
        `$ cd /
         $ ls
         dir a
         14848514 b.txt
         8504156 c.dat
         dir d
         $ cd a
         $ ls
         dir e
         29116 f
         2557 g
         62596 h.lst
         $ cd e
         $ ls
         584 i
         $ cd ..
         $ cd ..
         $ cd d
         $ ls
         4060174 j
         8033020 d.log
         5626152 d.ext
         7214296 k`;

      assert.strictEqual(part2(input), 24933642);
    });
  });
});

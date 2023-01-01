// see part2 for a general solution
module.exports = (input) => {
  const head = { x: 0, y: 0 };
  const tail = { x: 0, y: 0 };

  const visited = new Set(['0 0']);

  for (const line of input.split('\n')) {
    const [direction, steps] = line.trim().split(' ');
    const dx = direction === 'L' ? -1 : direction === 'R' ? 1 : 0;
    const dy = direction === 'U' ? -1 : direction === 'D' ? 1 : 0;

    let numberOfSteps = +steps;

    while (numberOfSteps-- > 0) {
      const hx = head.x;
      const hy = head.y;

      head.x += dx;
      head.y += dy;

      const d = Math.abs(head.x - tail.x) + Math.abs(head.y - tail.y);

      if (d === 2) {
        if (head.x !== tail.x && head.y !== tail.y) {
          continue;
        }

        tail.x = hx;
        tail.y = hx;
      } else if (d > 2) {
        tail.x = hx;
        tail.y = hy;
      }

      visited.add(`${tail.x} ${tail.y}`);
    }
  }

  return visited.size;
};

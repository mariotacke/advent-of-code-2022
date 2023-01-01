module.exports = (input, length = 10) => {
  const rope = Array
    .from({ length })
    .map(() => ({ x: 0, y: 0 }));

  const visited = new Set(['0 0']);

  const moveTail = (a1, a2, head, tail) => {
    if (head[a1] === tail[a1] && Math.abs(head[a2] - tail[a2]) === 2) {
      tail[a2] = Math.floor((tail[a2] + head[a2]) / 2);
    } else if (Math.abs(head[a1] - tail[a1]) === 2) {
      tail[a1] = Math.floor((tail[a1] + head[a1]) / 2);
      tail[a2] = head[a2];
    }
  };

  for (const line of input.split('\n')) {
    const [direction, steps] = line.trim().split(' ');
    const dx = direction === 'L' ? -1 : direction === 'R' ? 1 : 0;
    const dy = direction === 'U' ? -1 : direction === 'D' ? 1 : 0;

    let numberOfSteps = +steps;

    while (numberOfSteps-- > 0) {
      rope[0].x += dx;
      rope[0].y += dy;

      for (let i = 1; i < rope.length; i++) {
        const head = rope[i - 1];
        const tail = rope[i];

        if (Math.abs(head.x - tail.x) === 2 && Math.abs(head.y - tail.y) === 2) {
          tail.x = Math.floor((tail.x + head.x) / 2);
          tail.y = Math.floor((tail.y + head.y) / 2);
        }

        moveTail('x', 'y', head, tail);
        moveTail('y', 'x', head, tail);
      }

      visited.add(`${rope.slice(-1)[0].x} ${rope.slice(-1)[0].y}`);
    }
  }

  return visited.size;
};

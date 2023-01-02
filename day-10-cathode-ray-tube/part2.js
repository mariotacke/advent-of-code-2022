module.exports = (input, width = 40, height = 6) => {
  let X = 1;
  let cycle = 0;

  const program = input
    .split('\n')
    .map((line) => {
      return [line.trim().slice(0, 4), +line.trim().slice(5)];
    })
    .reverse();

  let instruction = ['noop', 0];
  let cyclesRemaining = 0;
  let line = 0;

  const screen = Array.from({ length: height })
    .map(() => Array.from({ length: width }));

  while (program.length) {
    if (!cyclesRemaining) {
      if (instruction[0] === 'addx') {
        X += instruction[1];
      }

      instruction = program.pop();
      cyclesRemaining = instruction[0] === 'noop' ? 1 : 2;
    }

    cyclesRemaining--;

    const cursor = cycle % width;

    screen[line][cursor] = cursor >= X - 1 && cursor <= X + 1 ? '#' : '.';

    if (++cycle % width === 0) {
      line++;
    }
  }

  return screen.map((line) => line.join('')).join('\n');
};

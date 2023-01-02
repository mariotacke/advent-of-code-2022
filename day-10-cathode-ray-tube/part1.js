module.exports = (input) => {
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
  let nextReadCycle = 20;

  let signalStrength = 0;

  while (cycle++ < 220) {
    if (!cyclesRemaining) {
      if (instruction[0] === 'addx') {
        X += instruction[1];
      }

      instruction = program.pop();
      cyclesRemaining = instruction[0] === 'noop' ? 1 : 2;
    }

    cyclesRemaining--;

    if (cycle === nextReadCycle) {
      nextReadCycle += 40; // cycle length
      signalStrength += cycle * X;
    }
  }

  return signalStrength;
};

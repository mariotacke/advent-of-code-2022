module.exports = (input) => {
  const lines = input.split('\n');

  const instructionIndex = lines.findIndex((line) => line === '');
  const numberOfStacks = +lines[instructionIndex - 1].split(/\s+/).slice(-1)[0];
  const moves = lines
    .slice(instructionIndex + 1)
    .map((line) => line
      .match(/(\d+).*(\d+).*(\d+)/)
      .slice(1)
      .map((n) => +n));

  const stacks = Array.from({ length: numberOfStacks }).map(() => []);

  for (let i = instructionIndex - 2; i >= 0; i--) {
    const line = lines[i].padEnd(numberOfStacks * 4);

    for (let s = 0; s < stacks.length; s++) {
      const crate = line.slice(s * 4, s * 4 + 4)[1];

      if (crate !== ' ') {
        stacks[s].push(crate);
      }
    }
  }

  for (const [amount, from, to] of moves) {
    stacks[to - 1].push(...stacks[from - 1].slice(-amount));
    stacks[from - 1] = stacks[from - 1].slice(0, -amount);
  }

  return stacks.map((stack) => stack.slice(-1)).join('');
};

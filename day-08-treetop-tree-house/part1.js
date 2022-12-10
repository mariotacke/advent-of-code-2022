module.exports = (input) => {
  const trees = input
    .split('\n')
    .map((line) => line.trim().split('').map((tree) => +tree));

  const length = trees.length;
  const visibleInteriorTrees = new Set();

  for (let y = 1; y < length - 1; y++) {
    for (let x = 1; x < length - 1; x++) {
      const leftMax = Math.max(...trees[y].slice(0, x));
      const rightMax = Math.max(...trees[y].slice(x + 1));
      const topMax = Math.max(...trees.slice(0, y).map((row) => row[x]));
      const bottomMax = Math.max(...trees.slice(y + 1).map((row) => row[x]));

      if (trees[y][x] > leftMax ||
          trees[y][x] > rightMax ||
          trees[y][x] > topMax ||
          trees[y][x] > bottomMax) {
        visibleInteriorTrees.add(`${x} ${y}`);
      }
    }
  }

  return visibleInteriorTrees.size + length * 4 - 4;
};

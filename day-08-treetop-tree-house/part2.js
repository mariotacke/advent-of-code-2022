module.exports = (input) => {
  const trees = input
    .split('\n')
    .map((line) => line.trim().split('').map((tree) => +tree));

  const length = trees.length;

  let highestScenicScore = 0;

  for (let y = 1; y < length - 1; y++) {
    for (let x = 1; x < length - 1; x++) {
      const predicate = (height) => height >= trees[y][x];

      const leftDistance = trees[y].slice(0, x).findLastIndex(predicate);
      const rightDistance = trees[y].slice(x + 1).findIndex(predicate);
      const topDistance = trees.slice(0, y).map((row) => row[x]).findLastIndex(predicate);
      const bottomDistance = trees.slice(y + 1).map((row) => row[x]).findIndex(predicate);

      const leftScore = leftDistance === -1 ? x : x - leftDistance;
      const rightScore = rightDistance === -1 ? length - x - 1 : rightDistance + 1;
      const topScore = topDistance === -1 ? y : y - topDistance;
      const bottomScore = bottomDistance === -1 ? length - y - 1 : bottomDistance + 1;

      const scenicScore = leftScore * rightScore * topScore * bottomScore;

      if (scenicScore > highestScenicScore) {
        highestScenicScore = scenicScore;
      }
    }
  }

  return highestScenicScore;
};

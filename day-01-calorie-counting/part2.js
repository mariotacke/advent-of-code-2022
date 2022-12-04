module.exports = (input) => {
  const lines = [...input.split('\n'), ''];

  let currentCalorieCounter = 0;
  let caloriesCarried = [];

  // note, current O(n log n) solution can be optimized to ~O(n) via heap 🤷🏻‍♂️

  for (const line of lines) {
    if (!line.trim().length) {
      caloriesCarried.push(currentCalorieCounter);

      currentCalorieCounter = 0;
    } else {
      currentCalorieCounter += parseInt(line);
    }
  }

  return caloriesCarried
    .sort((a, b) => b - a)
    .slice(0, 3)
    .reduce((total, current) => total + current, 0);
};

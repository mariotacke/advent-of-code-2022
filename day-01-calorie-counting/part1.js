module.exports = (input) => {
  const lines = [...input.split('\n'), ''];

  let currentCalorieCounter = 0;
  let mostCaloriesCarried = 0;

  for (const line of lines) {
    if (!line.trim().length) {
      if (currentCalorieCounter > mostCaloriesCarried) {
        mostCaloriesCarried = currentCalorieCounter;
      }

      currentCalorieCounter = 0;
    } else {
      currentCalorieCounter += parseInt(line);
    }
  }

  return mostCaloriesCarried;
};

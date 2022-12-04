module.exports = (input) => {
  return input
    .split('\n')
    .reduce((total, line) => {
      const compartmentA = new Set(line.trim().slice(0, line.trim().length / 2));
      const compartmentB = line.trim().slice(line.trim().length / 2);

      for (const character of compartmentB) {
        if (compartmentA.has(character)) {
          const priority = character.charCodeAt(0) > 96 // lowercase a
            ? character.charCodeAt(0) - 96
            : character.charCodeAt(0) - 65 + 27; // uppercase A + offset

          return total + priority;
        }
      }

      return total;
    }, 0);
};

module.exports = (input) => {
  return input
    .match(/(?:^.*$\n?){3}/mg)
    .reduce((total, group) => {
      const sets = group
        .trim()
        .split(/\n/)
        .map((line) => new Set(line.trim().split('')))
        .sort((a, b) => a.size - b.size);

      for (const character of sets[0]) {
        if (sets[1].has(character) && sets[2].has(character)) {
          const priority = character.charCodeAt(0) > 96 // lowercase a
            ? character.charCodeAt(0) - 96
            : character.charCodeAt(0) - 65 + 27; // uppercase A + offset

          return total + priority;
        }
      }

      return total;
    }, 0);
};

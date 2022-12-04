module.exports = (input) => {
  const rock = { beats: null, value: 1 };
  const paper = { beats: rock, value: 2 };
  const scissors = { beats: paper, value: 3 };

  rock.beats = scissors;

  const rules = [rock, paper, scissors];

  return input
    .split('\n')
    .reduce((total, guide) => {
      const moves = guide.trim().split(' ');
      const opponent = rules[moves[0].charCodeAt(0) - 65]; // 65 == A
      const self = rules[moves[1].charCodeAt(0) - 88];     // 88 == X

      const score = opponent === self
        ? 3 + self.value
        : opponent.beats === self
          ? self.value
          : 6 + self.value;

      return total + score;
    }, 0);
};

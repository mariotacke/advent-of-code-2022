module.exports = (input) => {
  const rock = { beats: null, value: 1, beatenBy: null };
  const paper = { beats: rock, value: 2, beatenBy: null };
  const scissors = { beats: paper, value: 3, beatenBy: rock };

  rock.beats = scissors;
  rock.beatenBy = paper;
  paper.beatenBy = scissors;

  const rules = [rock, paper, scissors];

  return input
    .split('\n')
    .reduce((total, guide) => {
      const strategy = guide.trim().split(' ');
      const opponent = rules[strategy[0].charCodeAt(0) - 65]; // 65 == A
      const outcome = strategy[1];

      const score = outcome === 'X'
        ? opponent.beats.value
        : outcome === 'Y'
          ? opponent.value + 3
          : opponent.beatenBy.value + 6;

      return total + score;
    }, 0);
};

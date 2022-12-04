module.exports = (input) => {
  return input
    .split(/\n/)
    .reduce((fullyContained, line) => {
      const [a, b] = line
        .split(',')
        .map((part) => part
          .split('-')
          .map((n) => +n));

      if (a[0] >= b[0] && a[1] <= b[1] || // a contained in b
          b[0] >= a[0] && b[1] <= a[1]) { // b contained in a
        return fullyContained + 1;
      }

      return fullyContained;
    }, 0);
};

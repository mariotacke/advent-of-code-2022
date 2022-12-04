module.exports = (input) => {
  return input
    .split(/\n/)
    .reduce((overlap, line) => {
      const [a, b] = line
        .split(',')
        .map((part) => part
          .split('-')
          .map((n) => +n));

      if (a[0] <= b[0] && a[1] >= b[0] || // a-tail contained in b
          b[0] <= a[0] && b[1] >= a[0]) { // b-tail contained in a
        return overlap + 1;
      }

      return overlap;
    }, 0);
};

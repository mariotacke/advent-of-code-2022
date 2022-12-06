module.exports = (input) => {
  const buffer = Array.from({ length: 14 }).map(() => null);

  let i = 0;

  while (i < input.length) {
    buffer.shift();
    buffer.push(input[i]);

    if ((new Set(buffer)).size === 14 && i > 13) {
      return i + 1;
    }

    i++;
  }
};

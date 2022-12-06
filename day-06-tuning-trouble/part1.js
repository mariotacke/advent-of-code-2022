module.exports = (input) => {
  const buffer = [null, null, null, null];

  let i = 0;

  while (i < input.length) {
    buffer.shift();
    buffer.push(input[i]);

    if ((new Set(buffer)).size === 4 && i > 3) {
      return i + 1;
    }

    i++;
  }
};

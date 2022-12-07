module.exports = (input) => {
  const totalDiskSpace = 70000000;
  const spaceRequiredForUpdate = 30000000;

  const commandWithOutput = input
    .split('$')
    .map((commandWithOutput) => commandWithOutput
      .split('\n')
      .map((line) => line.trim())
      .filter((component) => component.length))
    .slice(1);

  let pwd = [];

  const sizes = new Map();

  for (const [command, ...output] of commandWithOutput) {
    if (/cd \.\./.test(command)) {
      pwd.pop();
    } else if (/cd \S+/.test(command)) {
      pwd.push(command.split(' ').slice(-1)[0]);
    } else {
      const fileBytes = output.reduce((size, item) =>
        /\d+/.test(item) ? size + +item.split(' ')[0] : size, 0);

      // update all parent directory statistics
      for (let i = 0; i < pwd.length; i++) {
        const directory = '/' + pwd.slice(1, i + 1).join('/');

        sizes.set(directory, (sizes.get(directory) || 0) + fileBytes);
      }
    }
  }

  const unusedDiskSpace = totalDiskSpace - sizes.get('/');
  const additionalDiskSpaceRequired = spaceRequiredForUpdate - unusedDiskSpace;

  return [...sizes.values()]
    .filter((size) => size >= additionalDiskSpaceRequired)
    .sort((a, b) => a - b)[0];
};

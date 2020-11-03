const spinner = () => {
  let delay = 0;
  let symbol = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];
  for (let i = 0; i < symbol.length; i ++) {
    setTimeout(() => {
      process.stdout.write('\r' + symbol[i] + '   ');
      if (i === (symbol.length -1)) {
        process.stdout.write('\n');
      }
    }, (100 + delay));
    delay += 200;
  }
};

spinner();
module.exports = function check(str, bracketsConfig) {
  let alls = str.length / 2;
  let symbols = bracketsConfig.map(symbol => symbol.join(''));

  for (let i = 0; i < alls; i++) {
      symbols.forEach(symbol => {
          str = str.replace(symbol, '');
      });
  }

  return str.length === 0;
}

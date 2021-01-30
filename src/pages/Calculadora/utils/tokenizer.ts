const tokenizer = (input: string) => {
  const splittedInput = input.split(' ');
  const tokens: (string | number)[] = [];

  splittedInput.forEach(item => {
    if (item[0] === '(') {
      tokens.push('(')
      tokens.push(item.slice(1))
    } else if (item.slice(-1) === ')') {
      let i = item.length - 1
      const endings = []

      while (i) {
        if (item[i] === ')')
          endings.push(')')
        i--
      }
      tokens.push(parseFloat(item.slice(0, -1)))
      endings.map(ending => tokens.push(ending))
    } else {
      tokens.push(parseFloat(item))
    }
  });

  return tokens;
}

export default tokenizer;

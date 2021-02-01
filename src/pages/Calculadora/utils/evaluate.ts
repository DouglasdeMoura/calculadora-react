const evaluate = (tokens: (string | number)[], operadores: {}): (number | string) => {
  const head = tokens.shift();

  if (head === undefined)
    throw new Error('Token inválido');

  if (head === '(') {
    const firstElement = tokens.shift();
    
    if (firstElement === undefined)
      throw new Error('Operador inválido');

    // @ts-ignore
    const op = operadores[firstElement];

    if (op === undefined)
      throw new Error('Operador não encontrado');

    const args = [];

    while (tokens[0] !== ')') {
      args.push(evaluate(tokens, operadores));
    }

    tokens.shift(); // Remove o ')'
    return op(args);

  } else {
    return head;
  }
}

export default evaluate;

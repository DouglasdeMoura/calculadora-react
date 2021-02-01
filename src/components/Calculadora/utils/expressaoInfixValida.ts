const expressaoInfixValida = (expressao: string): boolean => {
  // Valida se expressão não termina com operador
  if (expressao.slice(-1) !== ')' && isNaN(parseInt(expressao.slice(-1))))
    return false;

  // Valida se todos os parênteses abertos são fechados posteriormente
    const expressaoArr = expressao.split('');
  let abreParenteses = 0;
  let fechaParenteses = 0;
  expressaoArr.forEach((item) => {
    if (item === '(')
      abreParenteses++;
    else if (item === ')')
      fechaParenteses++;
  });

  if (abreParenteses !== fechaParenteses)
    return false;

  // Valida se expressão termina com número
  for (let i = expressao.length - 1; i > -1; i--) {
    if (expressao[i] === ')')
      continue;

    if(isNaN(parseInt(expressao[i]))) {
      return false;
    }
    break;
  }

  return true;
}

export default expressaoInfixValida;

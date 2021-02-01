const infixToPrefix = (expression: string): string => {
  const isNumericOrPoint = (str: string) => {
    return !isNaN(parseFloat(str)) || str === '.';
  }
  let formattedExpression = '';
  let operatorQueue = '';
  let numbersQueue = '';
  let closingParenthesis = 0;

  for (let i = 0; i < expression.length; i++) {
    const element = expression[i];

    if (element === '(') {
      closingParenthesis++;
      formattedExpression += ` ${element}+ 0`;
      continue;
    }

    if (element === ')') {
      closingParenthesis--;
      formattedExpression += element;
      continue;
    }

    if (closingParenthesis < 0)
      throw new Error('Expressão inválida. Verifique os parênteses.');

    if (isNumericOrPoint(element)) {
      numbersQueue += element;
      continue;
    } else {
      numbersQueue += ' ';
      operatorQueue += element;
    }

    let j = i;
    let nextElement = expression[i + 1];

    while (!isNumericOrPoint(nextElement) && nextElement !== '(') {
      operatorQueue += nextElement;
      j++;
      nextElement = expression[j + 1];
    }

    while (isNumericOrPoint(nextElement)) {
      numbersQueue += nextElement;
      j++;
      nextElement = expression[j + 1];
    }

    i = j;

    formattedExpression += ` (${operatorQueue} ${numbersQueue.trim()}`;
    numbersQueue = '';
    operatorQueue = '';
    closingParenthesis++;
  }

  return `${formattedExpression}${')'.repeat(closingParenthesis)}`.trim();
}

export default infixToPrefix;

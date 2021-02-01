import evaluate from '../utils/evaluate';
import infixToPrefix from '../utils/infixToPrefix';
import tokenizer from '../utils/tokenizer';

const calculate = (expression: string): (number | string) => {
  if (isNaN(parseInt(expression.slice(-1))))
    throw new Error('Expressão inválida');

  expression = expression
    .replaceAll('÷', '/')
    .replaceAll('×', '*');

  return evaluate(
    tokenizer(
      infixToPrefix(expression)
    )
  );
}

export default calculate;

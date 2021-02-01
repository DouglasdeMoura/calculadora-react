import evaluate from '../utils/evaluate';
import infixToPrefix from '../utils/infixToPrefix';
import tokenizer from '../utils/tokenizer';

const calculate = (expression: string): (number | string) => {
  expression = expression
    .replaceAll('÷', '/')
    .replaceAll('×', '*');

  return evaluate(tokenizer(infixToPrefix(expression)));
}

export default calculate;

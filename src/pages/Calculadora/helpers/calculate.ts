import evaluate from '../utils/evaluate';
import tokenizer from '../utils/tokenizer';

const calculate = (expression: string): (number | string) => {
  return evaluate(tokenizer(expression));
}

export default calculate;

import evaluate from '../utils/evaluate';
import expressaoInfixValida from '../utils/expressaoInfixValida';
import infixToPrefix from '../utils/infixToPrefix';
import operadores from '../utils/operadores';
import tokenizer from '../utils/tokenizer';

const calculate = (expression: string): (number | string) => {
  if (!expressaoInfixValida(expression))
    throw new Error('Expressão inválida');

  expression = expression
    .replaceAll('÷', '/')
    .replaceAll('×', '*');

  return evaluate(
    tokenizer(
      infixToPrefix(expression),
    ),
    operadores
  );
}

export default calculate;

import evaluate from './evaluate';

const operadores = {
  '+': (n: number[]) => n.reduce((a, b) => a + b),
  '-': (n: number[]) => n.reduce((a, b) => a - b),
  '*': (n: number[]) => n.reduce((a, b) => a * b),
  '/': (n: number[]) => n.reduce((a, b) => a / b),
}

describe('evaluate()', () => {
  it('deve retorna o resultado da expressão', () => {
    const expressaoAdicao = ['(', '+', 2, 2, 2, ')'];
    const expressaoSutracao = ['(', '-', 2, 2, 2, ')'];
    const expressaoMultiplicacao = ['(', '*', 2, 2, 2, ')'];
    const expressaoDivisao = ['(', '/', 2, 2, 2, ')'];

    expect(evaluate(expressaoAdicao, operadores)).toEqual(6);
    expect(evaluate(expressaoSutracao, operadores)).toEqual(-2);
    expect(evaluate(expressaoMultiplicacao, operadores)).toEqual(8);
    expect(evaluate(expressaoDivisao, operadores)).toEqual(0.5);
  });
});

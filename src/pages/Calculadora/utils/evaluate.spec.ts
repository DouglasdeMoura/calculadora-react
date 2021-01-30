import evaluate from './evaluate';

describe('evaluate()', () => {
  it('deve retorna o resultado da expressão', () => {
    const expressaoAdicao = ['(', '+', 2, 2, 2, ')'];
    const expressaoSutracao = ['(', '-', 2, 2, 2, ')'];
    const expressaoMultiplicacao = ['(', '*', 2, 2, 2, ')'];
    const expressaoDivisao = ['(', '/', 2, 2, 2, ')'];

    expect(evaluate(expressaoAdicao)).toEqual(6);
    expect(evaluate(expressaoSutracao)).toEqual(-2);
    expect(evaluate(expressaoMultiplicacao)).toEqual(8);
    expect(evaluate(expressaoDivisao)).toEqual(0.5);
  });
});

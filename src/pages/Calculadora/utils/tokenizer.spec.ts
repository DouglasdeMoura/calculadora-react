import tokenizer from './tokenizer';

describe('tokenizer()', () => {
  it('deve tokenizar expressão em notação polonesa', () => {
    expect(tokenizer('(+ 2 2 2)'))
      .toEqual(['(', '+', 2, 2, 2, ')']);

    expect(tokenizer('(+ 2 2 2 (fact 5))'))
      .toEqual(['(', '+', 2, 2, 2, '(', 'fact', 5, ')', ')']);
  });
});

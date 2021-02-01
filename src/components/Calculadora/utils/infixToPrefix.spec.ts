import infixToPrefix from './infixToPrefix';

describe('infixToPrefix()', () => {
  it('deve retornar expressão formatada', () => {
    expect(infixToPrefix('2+2')).toEqual('(+ 2 2)');
    expect(infixToPrefix('20+20')).toEqual('(+ 20 20)');
    expect(infixToPrefix('1+2+3')).toEqual('(+ 1 2 (+ 3))');
    expect(infixToPrefix('1+2-3')).toEqual('(+ 1 2 (- 3))');
    expect(infixToPrefix('1*(1+2)')).toEqual('(* 1 (+ 0 (+ 1 2)))');
    expect(infixToPrefix('1*(1+2+(10*2))')).toEqual('(* 1 (+ 0 (+ 1 2 (+  (+ 0 (* 10 2))))))');
  });
});
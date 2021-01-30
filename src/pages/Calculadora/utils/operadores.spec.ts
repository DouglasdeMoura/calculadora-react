import operadores from './operadores';

describe('operadores()', () => {
  it('deve efetuar a operação de adição na lista', () => {
    expect(operadores['+']([2, 2, 2, 2])).toEqual(8);
    expect(operadores['+']([2.99, 0.01, 1.2])).toEqual(4.2);
  });

  it('deve efetuar a operação de subtração na lista', () => {
    expect(operadores['-']([100, 10, 10, 10])).toEqual(70);
    expect(operadores['-']([100.9, 10, 10, 10])).toEqual(70.9);
  });

  it('deve efetuar a operação de multiplicação na lista', () => {
    expect(operadores['*']([2, 2, 2])).toEqual(8);
    expect(operadores['*']([2.5, 2, 2])).toEqual(10);
  });

  it('deve efetuar a operação de divisão na lista', () => {
    expect(operadores['/']([100, 2, 2])).toEqual(25);
    expect(operadores['/']([100.2, 2, 2])).toEqual(25.05);
  });
});

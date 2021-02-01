import expressaoInfixValida from './expressaoInfixValida';

describe('expressaoInfixValida()', () => {
  it('deve validar a expressão', () => {
    expect(expressaoInfixValida('2+2')).toEqual(true);
    expect(expressaoInfixValida('2+2-1')).toEqual(true);
    expect(expressaoInfixValida('2+2-')).toEqual(false);
    expect(expressaoInfixValida('2+(2-2)')).toEqual(true);
    expect(expressaoInfixValida('2+((2-2)')).toEqual(false);
    expect(expressaoInfixValida('2+(2-2))')).toEqual(false);
  });
});
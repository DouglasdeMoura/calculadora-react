import definirEstiloBotao from './definirEstiloBotao';

describe('definirEstiloBotao()', () => {
  it('deve retornar estilo para botões de número', () => {
    expect(definirEstiloBotao(2))
      .toEqual({ background: '#0a0a0a', color: '#808080' });
  });

  it('deve retornar estilo para o botão de =', () => {
    expect(definirEstiloBotao('='))
      .toEqual({ background: '#d10028', color: '#fff' });
  });

  it('deve retornar estilo para o botão de C', () => {
    expect(definirEstiloBotao('C'))
      .toEqual({ background: '#ea4900', color: '#fff' });
  });

  it('deve retornar o estilo padrão dos botões', () => {
    expect(definirEstiloBotao('+'))
      .toEqual({ background: '#d3d3d3', color: '#0a0a0a' });
  })
});

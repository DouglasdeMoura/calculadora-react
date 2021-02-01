import { ListaBotoes } from '../types';
import definirEstiloBotao from '../utils/definirEstiloBotao';

const simbolos = [
  '(', ')', '⌫', 'C',
  7, 8, 9, '÷',
  4, 5, 6, '×',
  1, 2, 3, '-',
  0, '.', '=', '+',
];

const botoes: ListaBotoes[] = simbolos.map((simbolo) => {
  const estilo = definirEstiloBotao(simbolo);
  return {
    label: simbolo,
    background: estilo.background,
    color: estilo.color,
  };
});

export default botoes;

import { CalculadoraAcoes, ListaBotoes } from '../types';
import definirEstiloBotao from '../utils/definirEstiloBotao';

export const simbolos = [
  '(',
  ')',
  CalculadoraAcoes.apagarUltimoItem,
  CalculadoraAcoes.limparVisor,
  7,
  8,
  9,
  CalculadoraAcoes.dividir,
  4,
  5,
  6,
  CalculadoraAcoes.multiplicar,
  1,
  2,
  3,
  CalculadoraAcoes.subtrair,
  0,
  '.',
  CalculadoraAcoes.calcular,
  CalculadoraAcoes.somar,
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

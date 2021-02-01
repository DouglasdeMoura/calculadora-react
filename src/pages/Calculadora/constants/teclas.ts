import { CalculadoraAcoes } from '../types';
import { simbolos } from './botoes';

const teclas = simbolos
  .join('')
  .replace('Backspace', CalculadoraAcoes.apagarUltimoItem)
  .replace('Delete', CalculadoraAcoes.limparVisor)
  .split('');

export default teclas;

export interface ListaBotoes {
  label: string | number;
  background: string;
  color: string;
}

export enum CalculadoraAcoes {
  limparVisor = 'C',
  apagarUltimoItem = '⌫',
  calcular = '=',
  multiplicar = '×',
  dividir = '÷',
  somar = '+',
  subtrair = '-',
}

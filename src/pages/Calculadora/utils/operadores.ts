const operadores = {
  '+': (n: number[]) => n.reduce((a, b) => a + b),
  '-': (n: number[]) => n.reduce((a, b) => a - b),
  '*': (n: number[]) => n.reduce((a, b) => a * b),
  '/': (n: number[]) => n.reduce((a, b) => a / b),
}

export default operadores;

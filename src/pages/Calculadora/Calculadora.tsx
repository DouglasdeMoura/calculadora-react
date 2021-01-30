import React from 'react';
import Botao from '../../components/Botao/Botao';
import Visor from '../../components/Visor/Visor';
import { BotoesContainer, CalculadoraContainer } from './StyledComponents';

const Calculadora = () => {
  const botoes = [
    '(', ')', '⌫', 'C',
    7, 8, 9, '÷',
    4, 5, 6, '×',
    1, 2, 3, '-',
    0, '.', '=', '+'
  ];

  return (
    <CalculadoraContainer>
      <Visor expressao="23+2" resultado="25 " />
      <BotoesContainer>
        {
          botoes.map(botao => (
            <Botao
              onClick={() => {}}
              label="2"
              background="tomato"
              color="white"
            />
          ))
        }
      </BotoesContainer>
    </CalculadoraContainer>
  );
}

export default Calculadora;

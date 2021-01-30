import React from 'react';
import botoes from './constants/botoes';
import Botao from '../../components/Botao/Botao';
import Visor from '../../components/Visor/Visor';
import { BotoesContainer, CalculadoraContainer } from './StyledComponents';

const Calculadora = () => {
  const handleOnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const botaoClicado = event.currentTarget.innerText;
  }

  return (
    <CalculadoraContainer>
      <Visor expressao="23+2" resultado="25 " />
      <BotoesContainer>
        {
          botoes.map(botao => (
            <Botao
              onClick={handleOnClick}
              label={botao.label.toString()}
              background={botao.background}
              color={botao.color}
              key={botao.label}
            />
          ))
        }
      </BotoesContainer>
    </CalculadoraContainer>
  );
}

export default Calculadora;

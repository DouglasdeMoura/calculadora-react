import React, { useState } from 'react';
import botoes from './constants/botoes';
import Botao from '../../components/Botao/Botao';
import Visor from '../../components/Visor/Visor';
import { CalculadoraAcoes } from './types/index';
import { BotoesContainer, CalculadoraContainer } from './StyledComponents';

const Calculadora = () => {
  const [expressao, setExpressao] = useState('');
  const [resultado, setResultado] = useState('');

  const calcular = (expressao: string) => {
    return;
  }

  const limparVisor = () => {
    setExpressao('');
    setResultado('');
  }

  const apagarUltimoItem = () => {
    setResultado(resultado.slice(0, -1));
  }

  const handleOnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const botaoClicado = event.currentTarget.innerText;

    if (botaoClicado === CalculadoraAcoes.calcular)
      return calcular(expressao);

    if (botaoClicado === CalculadoraAcoes.limparVisor)
      return limparVisor();

    if (botaoClicado === CalculadoraAcoes.apagarUltimoItem)
      return apagarUltimoItem();
    
    setResultado(resultado + botaoClicado);
  }

  return (
    <CalculadoraContainer>
      <Visor expressao={expressao} resultado={resultado} />
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

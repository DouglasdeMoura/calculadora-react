import React, { useState } from 'react';
import botoes from './constants/botoes';
import Botao from './components/Botao/Botao';
import Visor from './components/Visor/Visor';
import { CalculadoraAcoes } from './types/index';
import { BotoesContainer, CalculadoraContainer } from './StyledComponents';
import calculate from './helpers/calculate';

const Calculadora = () => {
  const [expressao, setExpressao] = useState('');
  const [resultado, setResultado] = useState('');

  const calcular = (expressao: string) => {
    try {
      const res = calculate(expressao);
      setResultado(res.toString());
      setExpressao(expressao);
    } catch (error) {
      console.error(error);
    }
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
      return calcular(resultado);

    if (botaoClicado === CalculadoraAcoes.limparVisor)
      return limparVisor();

    if (botaoClicado === CalculadoraAcoes.apagarUltimoItem)
      return apagarUltimoItem();

    setResultado(`${resultado}${botaoClicado}`.replace('s', ' '));
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

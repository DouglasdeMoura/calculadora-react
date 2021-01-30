import React from 'react';
import Botao from './components/Botao/Botao';
import Visor from './components/Visor/Visor';

const Calculadora = () => {
  return (
    <>
      <Visor expressao="23+2" resultado="25 " />
      <Botao
        onClick={() => {}}
        label="2"
        background="tomato"
        color="white"
      />
    </>
  );
}

export default Calculadora;

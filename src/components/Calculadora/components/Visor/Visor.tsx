import React, { FC } from 'react';
import { ErroContainer, VisorContainer } from './StyledComponents';
import { IProps } from './types';

const Visor: FC<IProps> = ({ erro, expressao, resultado }) => {
  return (
    <VisorContainer>
      <div>
        {erro && <ErroContainer>{erro}</ErroContainer>}
        {expressao}
      </div>
      <div>
        {resultado}
      </div>
    </VisorContainer>
  );
}

export default Visor;

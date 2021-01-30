import React, { FC } from 'react';
import { BotaoContainer } from './StyledComponents';
import { IProps } from './types';

const Botao: FC<IProps> = ({
  onClick,
  label,
  icone,
  background,
  color,
}) => {
  return (
    <BotaoContainer
      onClick={onClick}
      background={background}
      color={color}
    >
      <span>
        {icone && <i>{icone}</i>}
        {label}
      </span>
    </BotaoContainer>
  );
}

export default Botao;

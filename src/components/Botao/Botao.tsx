import React, { FC } from 'react';
import { IProps } from './types';

const Botao: FC<IProps> = ({ onClick, label, icone }) => {
  return (
    <button
      onClick={onClick}
    >
      {icone && <i>{icone}</i>}
      {label}
    </button>
  );
}

export default Botao;

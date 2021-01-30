import React from 'react';

export interface IProps {
  onClick(event: React.MouseEvent<HTMLButtonElement>): void;
  label: string;
  background: string;
  color: string;
  icone?: string;
}
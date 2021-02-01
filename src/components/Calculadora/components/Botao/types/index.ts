import { ButtonHTMLAttributes } from 'react';

export interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  background: string;
  color: string;
}

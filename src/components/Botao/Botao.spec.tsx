import { fireEvent, render, screen } from '@testing-library/react';
import Botao from './Botao';

describe('<Botao>', () => {
  it('deve executar função no evento de onClick', () => {
    const handleOnClick = jest.fn();

    render(
      <Botao
        onClick={handleOnClick}
        label="test_label"
      />
    );

    fireEvent.click(
      screen.getByText('test_label')
    );

    expect(handleOnClick).toBeCalled();
  });

  it('deve exibir o ícone', () => {
    render(
      <Botao
        onClick={() => {}}
        label="test_label"
        icone="♥"
      />
    );

    screen.getByText('♥')
  });
});
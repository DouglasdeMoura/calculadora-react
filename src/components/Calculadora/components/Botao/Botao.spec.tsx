import { fireEvent, render, screen } from '@testing-library/react';
import Botao from './Botao';

const props = {
  label: 'test_label',
  background: 'test_background',
  color: 'test_color',
}

describe('<Botao>', () => {
  it('deve executar função no evento de onClick', () => {
    const handleOnClick = jest.fn();

    render(
      <Botao
        onClick={handleOnClick}
        {...props}
      />
    );

    fireEvent.click(
      screen.getByText('test_label')
    );

    expect(handleOnClick).toBeCalled();
  });
});
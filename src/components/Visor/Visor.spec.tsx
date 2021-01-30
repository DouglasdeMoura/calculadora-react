import { render, screen } from '@testing-library/react';
import Visor from './Visor';

describe('<Visor>', () => {
  it('deve exibir o visor', () => {
    render(<Visor expressao="test_expressao" resultado="teste_resultado" />);
    screen.getByText('test_expressao');
    screen.getByText('teste_resultado');
  });
});

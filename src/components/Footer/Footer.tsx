import React from 'react';
import { FooterContainer } from './StyledComponents';

const Footer = () => {
  return (
    <FooterContainer>
      <p>
        Made with ❤️ by{' '}
        <a
          href="https://douglasmoura.dev"
          target="_blank"
          rel="noreferrer"
        >
          Douglas Moura
        </a>
      </p>

      <p>
        See on <a href="https://github.com/DouglasdeMoura/calculadora-react">GitHub</a>
      </p>
    </FooterContainer>
  );
}

export default Footer;
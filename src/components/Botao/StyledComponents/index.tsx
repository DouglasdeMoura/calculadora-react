import styled from 'styled-components';

interface BotaoContainerProps {
  background: string;
  color: string;
}

export const BotaoContainer = styled.button<BotaoContainerProps>`
  background: ${(props) => props.background};
  color: ${(props) => props.color};
  width: 50px;
  height: 50px;
  border: 0;
  border-radius: 8px;
  font-size: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.7;
  }
`;

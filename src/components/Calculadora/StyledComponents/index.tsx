import styled from 'styled-components';

export const CalculadoraContainer = styled.div`
  background: #1e1e1e;
  margin: auto;
  width: 260px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.55) 0px 20px 68px;
`;

export const BotoesContainer = styled.div`
  padding: 15px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
`;

export const BotaoEscondidoParaAdicionarOFocoNaCalculadora = styled.button`
  border: 0 !important;
  clip: rect(1px, 1px, 1px, 1px) !important;
  -webkit-clip-path: inset(50%) !important;
  clip-path: inset(50%) !important;
  height: 1px !important;
  margin: -1px !important;
  overflow: hidden !important;
  padding: 0 !important;
  position: absolute !important;
  width: 1px !important;
  white-space: nowrap !important;
`;

import styled from 'styled-components';

export const VisorContainer = styled.div`
  width: 260px;
  padding: 16px;
  background: #000;
  text-align: right;
  box-sizing: border-box;
  min-height: 87px;
  
  > div {
    color: #808080;
    font-size: 16px;
    word-break: break-all;
  }

  div:last-child {
    color: #fff;
    font-size: 30px;
  }
`;

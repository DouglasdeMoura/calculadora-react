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
    height: 19px;
    position: relative;
  }

  div:last-child {
    color: #fff;
    font-size: 30px;
  }
`;

export const ErroContainer = styled.div`
  color: #991B1B !important;
  background: #FCA5A5;
  border-radius: 4px;
  font-size: 12px !important;
  display: inline;
  padding: 6px;
  position: absolute;
  left: 0;
  transition: all 0.2;
  font-weight: bold;
`;

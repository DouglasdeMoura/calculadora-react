import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/global.css';
import Calculadora from './pages/Calculadora/Calculadora';

ReactDOM.render(
  <React.StrictMode>
    <Calculadora />
  </React.StrictMode>,
  document.getElementById('root')
);

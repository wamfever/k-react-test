import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/__globals/tailwind.css';
import './assets/styles/__globals/globals.module.scss';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

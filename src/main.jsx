import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { HooksApp } from './HooksApp';
import { ThemeContextProvider } from './context/ThemeContext';

ReactDOM.render(
  <ThemeContextProvider>
    <HooksApp />
  </ThemeContextProvider>,
  document.getElementById('root')
);

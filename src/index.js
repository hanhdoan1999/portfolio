import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./styles/fonts.scss";
import './index.scss';
import DarkModeProvider from './Context/useDarkMode';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <DarkModeProvider>
      <App/>
     </DarkModeProvider>
  </React.StrictMode>
);


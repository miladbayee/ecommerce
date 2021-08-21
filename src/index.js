import './sass/index.scss'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'

import AppState from './context/AppState'



ReactDOM.render(
  <AppState>
    <App />
  </AppState>
  ,
  document.getElementById('root')
);

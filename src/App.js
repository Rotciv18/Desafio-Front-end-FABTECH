import React from 'react';
import { Router, BrowserRouter } from 'react-router-dom';
import history from './services/history';
import Routes from './routes';

import GlobalStyle from './styles/global';

import Header from './components/Header';

const App = () => (
  <BrowserRouter history={history}>
    <Header />
    <Routes />
    <GlobalStyle />
  </BrowserRouter>
);

export default App;

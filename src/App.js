import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import history from './services/history';
import Routes from './routes';

import store from './store';

import GlobalStyle from './styles/global';

import Header from './components/Header';

const App = () => (
  <Provider store={store}>
    <BrowserRouter history={history}>
      <Header />
      <Routes />
      <GlobalStyle />
    </BrowserRouter>
  </Provider>
);

export default App;

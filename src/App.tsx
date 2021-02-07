import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Router from 'router';
import AppProvider from 'hooks';
import GlobalStyle from './styles/GlobalStyle';

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <AppProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </AppProvider>
  </>
);

export default App;

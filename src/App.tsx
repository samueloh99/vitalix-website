import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';

import Navbar from './components/Navbar';
import GlobalStyle from './styles/global';
import Routes from './routes';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes />
      <GlobalStyle />
    </Router>
  );
};

export default App;

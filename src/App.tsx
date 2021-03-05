import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';

import Navbar from './components/Navbar';
import GlobalStyle from './styles/global';

import Home from './pages/Home';
import InfoSection from './pages/InfoSection';
import AboutTeam from './pages/AboutTeam';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Home />
      <InfoSection />
      <AboutTeam />
      <GlobalStyle />
    </Router>
  );
};

export default App;

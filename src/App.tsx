import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';

import Navbar from './components/Navbar';
import GlobalStyle from './styles/global';

import Home from './pages/Home';
import InfoSection from './pages/InfoSection';
import AboutTeam from './pages/AboutTeam';
import AppointmentSection from './pages/AppointmentSection';
import ServiceSection from './pages/ServiceSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Home />
      <InfoSection />
      <AboutTeam />
      <ServiceSection />
      <AppointmentSection />
      <Footer />
      <GlobalStyle />
    </Router>
  );
};

export default App;

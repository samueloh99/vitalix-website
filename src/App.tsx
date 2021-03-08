/* eslint-disable no-restricted-globals */
/* eslint-disable import/extensions */
import React, { useEffect } from 'react';

import { BrowserRouter as Router, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar';
import GlobalStyle from './styles/global';

import Home from './pages/Home';
import InfoSection from './pages/InfoSection';
import AboutTeam from './pages/AboutTeam';
import ServiceSection from './pages/ServiceSection';
import ClientsAvaliation from './pages/ClientsAvaliation';
import AppointmentSection from './pages/AppointmentSection';
import MapSection from './pages/Map';
import Footer from './components/Footer';

const App: React.FC = () => {
  useEffect(() => {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };
  }, [window.onbeforeunload]);

  return (
    <Router>
      <Navbar />
      <Home />
      <InfoSection />
      <AboutTeam />
      <ServiceSection />
      <ClientsAvaliation />
      <AppointmentSection />
      <MapSection />
      <Footer />
      <GlobalStyle />
    </Router>
  );
};

export default App;

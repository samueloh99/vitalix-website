/* eslint-disable no-restricted-globals */
/* eslint-disable import/extensions */
import React, { useEffect } from 'react';

import { BrowserRouter as Router } from 'react-router-dom';

import Navbar from './components/Navbar';
import GlobalStyle from './styles/global';

import Home from './pages/Home';
import InfoSection from './pages/InfoSection';
import AboutTeam from './pages/AboutTeam';
import ServiceSection from './pages/ServiceSection';
import ClientsAvaliation from './pages/ClientsAvaliation';
import AppointmentSection from './pages/AppointmentSection';
import ConvenioSection from './pages/ConvenioSection';
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
      <ConvenioSection />
      <Footer />
      <GlobalStyle />
    </Router>
  );
};

export default App;

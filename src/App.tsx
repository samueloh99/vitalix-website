/* eslint-disable no-restricted-globals */
/* eslint-disable import/extensions */
import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';

import Navbar from './components/Navbar';
import GlobalStyle from './styles/global';

import Home from './pages/Home';
import InfoSection from './pages/InfoSection';
import ServiceSection from './pages/ServiceSection';
import AboutOffice from './pages/AboutOffice';
import ClientsAvaliation from './pages/ClientsAvaliation';
import AppointmentSection from './pages/AppointmentSection';
import ConvenioSection from './pages/ConvenioSection';
import OuvidoriaSection from './pages/OuvidoriaSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Home />
      <InfoSection />
      <AboutOffice />
      <ServiceSection />
      <ClientsAvaliation />
      <AppointmentSection />
      <ConvenioSection />
      <OuvidoriaSection />
      <Footer />
      <GlobalStyle />
    </Router>
  );
};

export default App;

import React from 'react';

import { Container } from './style';

import WhatsAppSvg from '../../assets/WhatsApp.svg';

const WhatsappIcon: React.FC = () => {
  return (
    <Container>
      <a
        href="https://api.whatsapp.com/send?phone=5511942059930&text=Ol%C3%A1%2C%20desejo%20atendimento."
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={WhatsAppSvg} alt="wppSvg" />
      </a>
    </Container>
  );
};

export default WhatsappIcon;

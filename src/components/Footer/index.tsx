import React from 'react';

import { Container, FooterInfo, FooterInfoSection, FooterEnd } from './style';

import logo from '../../assets/logo.png';

const Footer: React.FC = () => {
  return (
    <Container>
      <FooterInfo>
        <FooterInfoSection>
          <h4>R. Domingos de Morais, 2187 - Sala 411 - Vila Mariana</h4>
          <h4>11 5083-8884</h4>
          <h4>+55 11 94205-9930</h4>
          <h4 style={{ marginBottom: '0px' }}>Horario de Funcionamento:</h4>
          <h4>Segunda - Sexta: 09:00 AM - 18:00 PM</h4>
        </FooterInfoSection>
        <img src={logo} alt="logo" />
      </FooterInfo>
      <FooterEnd>
        <h4>Todos os direitos reservados para Vitalix Odontologia</h4>
        <h4>
          Desenvolvido por
          <a
            href="https://www.upagencybrasil.com.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {' '}
            Up Agency Ltda
          </a>
        </h4>
      </FooterEnd>
    </Container>
  );
};

export default Footer;

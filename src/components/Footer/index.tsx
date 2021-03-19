import React from 'react';

import { FaInstagram, FaFacebookF } from 'react-icons/fa';

import {
  Container,
  FooterInfo,
  FooterInfoSection,
  FooterEnd,
  FooterMidle,
} from './style';

import logo from '../../assets/logo.png';

const Footer: React.FC = () => {
  return (
    <Container>
      <FooterInfo>
        <FooterInfoSection>
          <h4>Contato: E-mail: odontovitalix@gmail.com</h4>
          <h4>Tel. Fixo: (11) 5083-8884</h4>
          <h4>WhatsApp: (11) 94205-9930</h4>
          <h4 style={{ marginTop: '30px', fontWeight: 'bolder' }}>
            Responsável Técnico:
          </h4>
          <h4>Dr. Wagner Franciscon Pinto</h4>
          <h4>CROSP 112771</h4>
          <h4>CRO Clínica 021827</h4>
          <h4
            style={{
              marginBottom: '8px',
              marginTop: '22px',
              fontWeight: 'bolder',
            }}
          >
            Horario de Funcionamento:
          </h4>
          <h4>Segunda - Sexta: 09:00 AM - 18:00 PM</h4>
        </FooterInfoSection>
        <FooterMidle>
          <img src={logo} alt="logo" />
          <h4>Siga-nos nas Redes Sociais</h4>
          <div>
            <a
              className="instaIcon"
              href="https://www.instagram.com/odontovitalix"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={25} color="white" />
            </a>
            <a
              className="facebookIcon"
              href="https://www.facebook.com/odontovitalix"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF size={25} color="white" />
            </a>
          </div>
        </FooterMidle>
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

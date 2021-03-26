/* eslint-disable react/jsx-one-expression-per-line */
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
          <h4 style={{ fontWeight: 'bold', fontSize: '20px', color: 'black' }}>
            ENTRE EM CONTATO
          </h4>
          <h4
            style={{
              display: 'flex',
              color: 'black',
              fontWeight: 'bold',
              fontSize: '17px',
            }}
          >
            E-mail:
            <p
              style={{
                color: 'white',
                marginLeft: '5px',
                fontWeight: 200,
              }}
            >
              vitalix.odonto@gmail.com
            </p>
          </h4>
          <h4
            style={{
              display: 'flex',
              color: 'black',
              fontWeight: 'bold',
              fontSize: '17px',
            }}
          >
            Tel. Fixo:
            <a
              href="tel:551150838884"
              style={{
                color: 'white',
                marginLeft: '5px',
                fontWeight: 200,
                textDecoration: 'none',
              }}
            >
              (11) 5083-8884
            </a>
          </h4>
          <h4
            style={{
              display: 'flex',
              color: 'black',
              fontWeight: 'bold',
              fontSize: '17px',
            }}
          >
            WhatsApp:
            <a
              href="https://api.whatsapp.com/send?phone=5511942059930&text=Ol%C3%A1%2C%20desejo%20atendimento."
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: 'white',
                marginLeft: '5px',
                fontWeight: 200,
                textDecoration: 'none',
              }}
            >
              (11) 94205-9930
            </a>
          </h4>
        </FooterInfoSection>
        <div>
          <h4
            style={{
              fontWeight: 'bolder',
              fontSize: '20px',
              color: 'black',
            }}
          >
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
              fontSize: '20px',
              color: 'black',
            }}
          >
            Horario de Funcionamento:
          </h4>
          <h4>Segunda - Sexta: 09:00 AM - 18:00 PM</h4>
        </div>
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

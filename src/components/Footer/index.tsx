/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';

import { FaInstagram, FaFacebookF } from 'react-icons/fa';

import { HiOutlineMail } from 'react-icons/hi';

import { AiOutlinePhone, AiOutlineWhatsApp } from 'react-icons/ai';

import {
  Container,
  Section,
  FooterEnd,
  WrapSection,
  SocialMediaSection,
} from './style';

const Footer: React.FC = () => {
  return (
    <>
      <Container>
        <WrapSection>
          <Section>
            <h1>ENTRE EM CONTATO</h1>
            <h4>
              <HiOutlineMail size="25" />
              <p>E-mail:</p> vitalix.odonto@gmail.com
            </h4>
            <h4>
              <AiOutlinePhone size="25" />
              <p>Tel. Fixo:</p>
              <a href="tel:551150838884">(11) 5083-8884</a>
            </h4>
            <h4>
              <AiOutlineWhatsApp size="25" />
              <p>WhatsApp:</p>
              <a
                href="https://api.whatsapp.com/send?phone=5511942059930&text=Ol%C3%A1%2C%20desejo%20atendimento."
                target="_blank"
                rel="noopener noreferrer"
              >
                (11) 94205-9930
              </a>
            </h4>
          </Section>
          <Section>
            <h1>RESPONSÁVEL TÉCNICO:</h1>
            <h4>Dr. Wagner Franciscon Pinto</h4>
            <h4>CROSP 112771</h4>
            <h4>CRO Clínica 021827</h4>
          </Section>
          <Section style={{ alignItems: 'center' }}>
            <h1>HORÁRIO DE FUNCIONAMENTO:</h1>
            <h4>Segunda - Sexta:</h4>
            <h4>09:00 - 18:00</h4>
          </Section>
        </WrapSection>
        <SocialMediaSection>
          <a
            className="instaIcon"
            href="https://www.instagram.com/odontovitalix"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={30} color="black" />
          </a>
          <a
            className="facebookIcon"
            href="https://www.facebook.com/odontovitalix"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF size={30} color="black" />
          </a>
        </SocialMediaSection>
      </Container>
      <FooterEnd>
        <h4>Todos os direitos reservados para Vitalix Odontologia</h4>
        <h4>
          Desenvolvido por
          <a
            href="https://www.upagencybrasil.com.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Up Agency Ltda
          </a>
        </h4>
      </FooterEnd>
    </>
  );
};

export default Footer;

/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/button-has-type */
import React from 'react';

import { FaInstagram, FaFacebookF } from 'react-icons/fa';

import { Container } from './style';

import map from '../../assets/map.png';

const OuvidoriaSection: React.FC = () => {
  return (
    <Container>
      <div>
        <h1>Fale Conosco</h1>
        <form>
          <label htmlFor="fname">Nome</label>
          <input type="text" id="fname" name="nome" />

          <label htmlFor="lname">Email</label>
          <input type="text" id="femail" name="email" />

          <label htmlFor="lcel">Celular</label>
          <input type="text" id="fcel" name="celular" />

          <label htmlFor="subject">Descrição</label>
          <textarea id="subject" name="subject" />
          <input className="buttonSend" type="submit" value="ENVIAR" />
        </form>
        <div>
          <h4>Siga-nos nas Redes Sociais</h4>
          <a
            className="instaIcon"
            href="https://www.instagram.com/odontovitalix"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={20} color="black" />
          </a>
          <a
            className="facebookIcon"
            href="https://www.facebook.com/odontovitalix"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF size={20} color="black" />
          </a>
        </div>
      </div>
      <a
        href="https://www.google.com/maps/place/Vitalix+Odontologia/@-23.5954395,-46.6372414,15.69z/data=!4m5!3m4!1s0x0:0x1bc339a32884893d!8m2!3d-23.5954834!4d-46.6362184?hl=pt-BR"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={map} alt="map" />
      </a>
    </Container>
  );
};

export default OuvidoriaSection;

/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/button-has-type */
import React from 'react';

import { Container, Header, Content } from './style';

import ouvidoria from '../../assets/ouvidoria.png';

import ouvidoriaMobile from '../../assets/ouvidoriaMobile.png';

const OuvidoriaSection: React.FC = () => {
  return (
    <Container>
      <Header>
        <h4 style={{ color: '#8a8a8a', fontSize: '20px' }}>
          ENVIE SUAS DÚVIDAS, CRÍTICAS OU ELOGIOS
        </h4>
        <h1>Fale Conosco</h1>
      </Header>
      <Content>
        <form>
          <label htmlFor="fname">Nome*</label>
          <input type="text" id="fname" name="nome" />

          <label htmlFor="lname">Email*</label>
          <input type="text" id="femail" name="email" />

          <label htmlFor="lcel">Celular*</label>
          <input type="text" id="fcel" name="celular" />

          <label htmlFor="subject">Mensagem*</label>
          <textarea id="subject" name="subject" />
          <input className="buttonSend" type="submit" value="ENVIAR" />
        </form>
        <img src={ouvidoria} className="ouvidoriaDesktop" alt="map" />
        <img src={ouvidoriaMobile} className="ouvidoriaMobile" alt="map" />
      </Content>
    </Container>
  );
};

export default OuvidoriaSection;

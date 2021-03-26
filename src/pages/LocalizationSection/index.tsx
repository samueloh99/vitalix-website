/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';

import { ImLocation } from 'react-icons/im';

import { Container, Header, Content } from './style';

import map from '../../assets/map.png';

import mapMobile from '../../assets/mapMobile.png';

const LocalizationSection: React.FC = () => {
  return (
    <Container id="localization">
      <Header>
        <h1>Localização</h1>
      </Header>
      <Content>
        <a
          style={{ textDecoration: 'none', color: 'black' }}
          href="https://www.google.com/maps/place/Vitalix+Odontologia/@-23.5954395,-46.6372414,15.69z/data=!4m5!3m4!1s0x0:0x1bc339a32884893d!8m2!3d-23.5954834!4d-46.6362184?hl=pt-BR"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div
            style={{
              display: 'flex',
              margin: '0px 0px 10px 0px',
              alignItems: 'center',
            }}
          >
            <ImLocation size={25} style={{ marginRight: '10px' }} />
            <h1 style={{ fontSize: '25px' }}>Endereço:</h1>
          </div>
          <h4 style={{ fontSize: '17px' }}>
            R. Domingos de Morais, 2187 - Bloco Paris, Conjunto 411
          </h4>
          <h4 style={{ marginBottom: '40px', fontSize: '17px' }}>
            Vila Mariana - CEP: 04035-000
          </h4>
          <img src={map} className="mapDesktop" alt="mapImg" />
          <img src={mapMobile} className="mapMobile" alt="mapMobileImg" />
        </a>
        <div
          style={{ borderRadius: '10px', background: 'white', padding: '40px' }}
        >
          <h4>
            A Vitalix Odontologia está localizada a 2 minutos do metrô e
            Shopping Santa Cruz. O prédio dispõe de um estacionamento privado
            com seguranças, um restaurante agradável (Dr. Bowls), um belo espaço
            externo aberto para descanso e um hall de entrada com um ambiente
            sofisticado.
          </h4>
        </div>
      </Content>
    </Container>
  );
};

export default LocalizationSection;

import React from 'react';

import { Container, CardContainer, Card, CardFront, CardBack } from './style';

import card1 from '../../assets/card1.jpg';
import card2 from '../../assets/card2.jpg';
import card3 from '../../assets/card3.jpg';

const InfoSection: React.FC = () => {
  return (
    <Container id="infoSection">
      <CardContainer>
        <Card className="card">
          <CardFront
            style={{
              background: '#87868a',
              backgroundImage: `url(${card1})`,
            }}
          >
            <h1>NOSSA MISSÃO</h1>
          </CardFront>
          <CardBack>
            <h4>
              Proporcionar uma Odontologia humanizada e de excelência, focada no
              acolhimento ao atendimento, dedicação e o empenho em melhorar a
              qualidade de vida dos nossos pacientes.
            </h4>
          </CardBack>
        </Card>
      </CardContainer>
      <CardContainer>
        <Card className="card">
          <CardFront
            style={{ background: '#3c3b3c', backgroundImage: `url(${card2})` }}
          >
            <h1>NOSSA VISÃO</h1>
          </CardFront>
          <CardBack>
            <h4>
              Sermos reconhecidos pela excelência no atendimento odontológico
              dentro das diversas atualidades da profissão e compartilhar o
              melhor que a Odontologia atual dispõe para assegurar qualidade no
              atendimento.
            </h4>
          </CardBack>
        </Card>
      </CardContainer>
      <CardContainer>
        <Card className="card">
          <CardFront
            style={{ background: '#dfdfdf', backgroundImage: `url(${card3})` }}
          >
            <h1>NOSSA VALOR</h1>
          </CardFront>
          <CardBack>
            <ul>
              <li>Ética odontológica;</li>
              <li>Respeito à diversidade; </li>
              <li>Capacitação e valorização da equipe; </li>
              <li>Transparência gerencial; </li>
              <li>Aperfeiçoamentoconstante.</li>
            </ul>
          </CardBack>
        </Card>
      </CardContainer>
    </Container>
  );
};

export default InfoSection;

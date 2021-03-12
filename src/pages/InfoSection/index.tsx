import React from 'react';

import { Container, CardContainer, Card, CardFront, CardBack } from './style';

const InfoSection: React.FC = () => {
  return (
    <Container>
      <CardContainer>
        <Card className="card">
          <CardFront>
            <h1>MISSÃO</h1>
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
          <CardFront>
            <h1>VISÃO</h1>
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
          <CardFront>
            <h1>VALOR</h1>
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

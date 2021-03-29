import React from 'react';

import { Container } from './style';

import amil from '../../assets/convenioos/amil.png';
import ideal from '../../assets/convenioos/ideal.png';
import inter from '../../assets/convenioos/interodonto.png';
import porto from '../../assets/convenioos/porto-seguro.png';
import sulamerica from '../../assets/convenioos/sulamerica.png';
import unimed from '../../assets/convenioos/unimed.png';
import mediservice from '../../assets/convenioos/mediservice.jpeg';

const ConvenioSection: React.FC = () => {
  return (
    <Container id="convenio">
      <h1>Convênios</h1>
      <div>
        <img src={amil} alt="amil" />
        <img src={ideal} alt="ideal" />
        <img src={inter} alt="inter" />
        <img src={porto} alt="porto" />
        <img src={sulamerica} alt="sulamerica" />
        <img src={unimed} alt="unimed" />
        <img src={mediservice} alt="medisercvice" />
      </div>
    </Container>
  );
};

export default ConvenioSection;

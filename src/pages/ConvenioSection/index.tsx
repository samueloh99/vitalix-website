import React from 'react';

import { Container } from './style';

import amil from '../../assets/amil.png';
import ideal from '../../assets/ideal.png';
import inter from '../../assets/interodonto.png';
import porto from '../../assets/porto-seguro.png';
import sulamerica from '../../assets/sulamerica.png';
import unimed from '../../assets/unimed.png';

const ConvenioSection: React.FC = () => {
  return (
    <Container>
      <h1>Convênios</h1>
      <div>
        <img src={amil} alt="amil" />
        <img src={ideal} alt="ideal" />
        <img src={inter} alt="inter" />
        <img src={porto} alt="porto" />
        <img src={sulamerica} alt="sulamerica" />
        <img src={unimed} alt="unimed" />
      </div>
    </Container>
  );
};

export default ConvenioSection;

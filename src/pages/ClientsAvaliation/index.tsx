import React from 'react';

import { Container } from './style';

import * as colors from '../../styles/colors';

const ClientsAvaliation: React.FC = () => {
  return (
    <Container>
      <h1>O que dizem sobre nós</h1>
      <div
        style={{
          width: '165px',
          height: '3px',
          backgroundColor: colors.blueshock,
          marginLeft: '10px',
          marginTop: '5px',
        }}
      />
    </Container>
  );
};

export default ClientsAvaliation;

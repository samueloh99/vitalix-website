/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/button-has-type */

import React from 'react';

import { AiOutlineCalendar } from 'react-icons/ai';

import { Container } from './style';

import * as colors from '../../styles/colors';

const Appointment: React.FC = () => {
  return (
    <Container>
      <h1>
        AGENDE JÁ SUA CONSULTA <p> GRÁTIS</p>
      </h1>

      <button>
        AGENDE UM HORARIO <div />
        <AiOutlineCalendar />
      </button>
    </Container>
  );
};

export default Appointment;

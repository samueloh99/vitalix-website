/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/button-has-type */

import React from 'react';

import { AiOutlineCalendar } from 'react-icons/ai';

import { Container } from './style';

const Appointment: React.FC = () => {
  return (
    <Container id="appointmentSection">
      <h1>
        AGENDE JÁ SUA CONSULTA <p> GRÁTIS</p>
      </h1>

      <button>
        AGENDE UM HORÁRIO <div />
        <AiOutlineCalendar />
      </button>
    </Container>
  );
};

export default Appointment;

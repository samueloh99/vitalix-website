/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/button-has-type */

import React from 'react';

import { AiOutlineCalendar } from 'react-icons/ai';

import { Container } from './style';

const Appointment: React.FC = () => {
  return (
    <Container id="appointmentSection">
      <h1>AGENDE JÁ SUA CONSULTA</h1>
      <a
        className="buttonCustomized"
        href="https://api.whatsapp.com/send?phone=5511942059930&text=Ol%C3%A1%2C%20desejo%20atendimento."
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: 'none' }}
      >
        AGENDE UM HORÁRIO <div />
        <AiOutlineCalendar />
      </a>
    </Container>
  );
};

export default Appointment;

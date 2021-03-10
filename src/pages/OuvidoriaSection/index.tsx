/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/button-has-type */
import React, { useState } from 'react';

import { VscFeedback } from 'react-icons/vsc';

import { Container } from './style';

import { ModalOuvidoria } from '../../components/ModalOuvidoria';

const OuvidoriaSection: React.FC = () => {
  const [isModalOpen, setModalState] = useState(false);

  const toogleModal = () => setModalState(!isModalOpen);

  return (
    <Container>
      <Container id="appointmentSection">
        <h1>Queremos ouvir um FEEDBACK seu</h1>
        <div onClick={toogleModal} className="buttonCustomized">
          OUVIDORIA <div />
          <VscFeedback />
        </div>
      </Container>
      <ModalOuvidoria isOpen={isModalOpen} onClose={toogleModal} />
    </Container>
  );
};

export default OuvidoriaSection;

/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';

import { BsArrowRight } from 'react-icons/bs';

import { Container, AboutUsSection, DoctorsSection, DoctorCard } from './style';

import { Modal } from '../../components/Modal';

import dr1 from '../../assets/daran.jpg';
import dr2 from '../../assets/debora.jpg';
import dr3 from '../../assets/suji.jpg';
import dr4 from '../../assets/wagner.jpg';

import * as colors from '../../styles/colors';

const drsModal = [
  {
    id: 1,
    img: dr4,
    crops: 'CROSP: 112771',
    name: 'Dr. Wagner Franciscon Pinto',
  },
  { id: 2, img: dr3, crops: 'CROSP: 118467', name: 'Dra. Suji Cha' },
  { id: 3, img: dr1, crops: 'CROSP: 1145580', name: 'Dr. Daran torres Elias' },
  {
    id: 4,
    img: dr2,
    crops: 'CROSP: 98.204',
    name: 'Dra. Débora Helena Monteiro Pereira',
  },
];

const AboutTeam: React.FC = () => {
  const [isModalOpen, setModalState] = useState(false);
  const [idModal, setIdModal] = useState(0);

  const toogleModal = () => {
    setModalState(!isModalOpen);
  };

  const toogleIdModal = (id: number) => {
    setIdModal(id);
  };

  return (
    <Container id="aboutTeam">
      <AboutUsSection>
        <h1>Conheça a nossa equipe</h1>
        <h4>
          Possuimos uma equipe de profissionais de alto nível, cada um com sua
          especialidade, onde atendemos os pacientes com maior dedicação e
          empenho. Aqui, trabalhamos com o que há de mais moderno em
          instalações, equipamentos, materiais e suporte para o desempenho de
          suas atividades. A clínica se apresenta com uma fácil localização na
          região da Vila Mariana, situando-se próximo aos transportes públicos
          como os pontos de ônibus na região e principalmente próximo à estação
          Santa Cruz; além disso, facilitamos o acesso dos clientes, oferecendo
          a comodidade de estacionamento privativo interno com agentes de
          segurança.
        </h4>
      </AboutUsSection>
      <DoctorsSection>
        {drsModal.map((item, index) => {
          const { id } = item;
          return (
            <DoctorCard
              key={index}
              onClick={() => {
                toogleModal();
                toogleIdModal(id);
              }}
            >
              <img src={item.img} alt="dr1" />
              <h4>{item.crops}</h4>
              <h1>{item.name}</h1>
              <BsArrowRight color={colors.black} size={40} />
              <div className="gradientDown" />
            </DoctorCard>
          );
        })}
      </DoctorsSection>
      <Modal isOpen={isModalOpen} id={idModal} onClose={toogleModal} />
    </Container>
  );
};

export default AboutTeam;

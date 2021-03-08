import React from 'react';

import { BsArrowRight } from 'react-icons/bs';

import { Container, AboutUsSection, DoctorsSection, DoctorCard } from './style';

import dr1 from '../../assets/daran.jpg';
import dr2 from '../../assets/debora.jpg';
import dr3 from '../../assets/suji.jpg';
import dr4 from '../../assets/wagner.jpg';

import * as colors from '../../styles/colors';

const AboutTeam: React.FC = () => {
  return (
    <Container id="aboutTeam">
      <AboutUsSection>
        <h1>Conheça a nossa equipe</h1>
        <h4>
          Possuimos uma equipe de profissionais de alto nível, cada um com sua
          especialidade, onde atendemos os pacientes com maior dedicação e
          empenho. Aqui, trabalhamos com o que há de mais moderno em
          instalações, equipamentos, materiais e suporte para o desempenho de
          suas atividades. A clínica se apresenta uma fácil localização na
          região da Vila Mariana, situando-se próximo aos transportes públicos
          como os pontos de ônibus na região e principalmente próximo à estação
          Santa Cruz; além disso, facilitamos o acesso dos clientes, oferecendo
          a comodidade de estacionamento privativo interno com agentes de
          segurança.
        </h4>
      </AboutUsSection>
      <DoctorsSection>
        <DoctorCard>
          <img src={dr1} alt="dr1" />
          <h4>CROSP: 1145580</h4>
          <h1>Dr. Daran torres Elias</h1>
          <BsArrowRight color={colors.black} size={40} />
          <div className="gradientDown" />
        </DoctorCard>
        <DoctorCard>
          <img src={dr2} alt="dr2" />
          <h4>CROSP: 98.204</h4>
          <h1>Dra. Débora Helena Monteiro Pereira</h1>
          <BsArrowRight color={colors.black} size={40} />
        </DoctorCard>
        <DoctorCard>
          <img src={dr3} alt="dr3" />
          <h4>CROSP: 118467</h4>
          <h1>Dra. Suji Cha</h1>
          <BsArrowRight color={colors.black} size={40} />
        </DoctorCard>
        <DoctorCard>
          <img src={dr4} alt="dr4" />
          <h4>CROSP: 112771</h4>
          <h1>Dr. Wagner Francisco Pinto</h1>
          <BsArrowRight color={colors.black} size={40} />
        </DoctorCard>
      </DoctorsSection>
    </Container>
  );
};

export default AboutTeam;

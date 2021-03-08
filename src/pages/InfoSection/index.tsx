import React from 'react';

import { Container, DescriptionSection, ImgSection } from './style';

import logo from '../../assets/logo.png';
import img3 from '../../assets/img3.jpg';
import img7 from '../../assets/img7.jpg';
import img6 from '../../assets/img6.jpg';
import img2 from '../../assets/img2.jpg';
import img4 from '../../assets/img4.jpg';

const InfoSection: React.FC = () => {
  return (
    <Container id="infoSection">
      <DescriptionSection>
        <img src={logo} alt="logo" />
        <h4>
          A Vitalix Odontologia surgiu há 3 anos atrás a fim de praticar uma
          odontologia mais humanizada, harmônica, acolhedora e ética.A clínica
          nasceu com o intuito de compartilhar do melhor que a Odontologia atual
          têm para oferecer aos pacientes, como por exemplo as diversar
          transformações de sorrisos e até mesmo as mudanças de vida que ocorrem
          após os tratamentos, incluindo aproveitar pequenos momentos especiais
          de compartilhamento das experiências vividas entre os profissionais e
          os pacientes.
        </h4>
      </DescriptionSection>
      <ImgSection>
        <img src={img3} alt="logo" />
        <img src={img7} alt="logo" />
        <img src={img6} alt="logo" />
        <img src={img2} alt="logo" />
        <img src={img4} alt="logo" />
      </ImgSection>
    </Container>
  );
};

export default InfoSection;

/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/button-has-type */
/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';

import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

import { Container, SliderContainer, ContainerWrapper } from './style';

import { ImageData } from './ImageData';

import imgMap from '../../assets/map.png';

const AboutOffice: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const { length } = ImageData;

  const nextSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(ImageData) || ImageData.length <= 0) {
    return null;
  }

  return (
    <Container className="slider">
      <h1>Conheça um pouco do nosso espaço</h1>
      <ContainerWrapper>
        <SliderContainer>
          <AiOutlineArrowLeft
            size={30}
            className="leftArrow"
            onClick={prevSlide}
          />
          <AiOutlineArrowRight
            size={30}
            className="rightArrow"
            onClick={nextSlide}
          />
          {ImageData.map((item, key) => {
            return (
              <div
                key={key}
                className={key === current ? 'slide active' : 'slide'}
              >
                {key === current && <img src={item.img} alt="img" />}
              </div>
            );
          })}
        </SliderContainer>
        <h4>
          A Clínica Vitalix Odontologia está localizada no prédio da EZ TEC,
          situada na região da Vila Mariana e próxima ao metrô e Shopping Santa
          Cruz. O prédio dispõe de um estacionamento privado com seguranças, um
          restaurante agradável (Dr. Bowls), um belo espaço externo aberto para
          descanso e um hall de entrada com um ambiente sofisticado.
        </h4>
      </ContainerWrapper>
    </Container>
  );
};

export default AboutOffice;

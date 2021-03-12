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
            size={50}
            className="leftArrow"
            onClick={prevSlide}
          />
          <AiOutlineArrowRight
            size={50}
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
        <a
          href="https://www.google.com/maps/place/Vitalix+Odontologia/@-23.5954395,-46.6372414,15.69z/data=!4m5!3m4!1s0x0:0x1bc339a32884893d!8m2!3d-23.5954834!4d-46.6362184?hl=pt-BR"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={imgMap} alt="map" />
        </a>
      </ContainerWrapper>
    </Container>
  );
};

export default AboutOffice;

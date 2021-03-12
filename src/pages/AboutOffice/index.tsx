/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/button-has-type */
/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';

import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

import { Container, SliderContainer } from './style';

import { ImageData } from './ImageData';

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
    </Container>
  );
};

export default AboutOffice;

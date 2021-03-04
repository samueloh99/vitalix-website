/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';

import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

import { Container, Banner } from './style';

import { SliderData } from './SliderData';

import * as colors from '../../styles/colors';

const Home: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const sliderLength = SliderData.length;

  const nextSlide = () => {
    setCurrent(current === sliderLength - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? sliderLength - 1 : current - 1);
  };

  if (!Array.isArray(SliderData) || SliderData.length <= 0) {
    return null;
  }

  return (
    <Container>
      <AiOutlineArrowLeft
        className="rightArrow"
        color="black"
        style={{ cursor: 'pointer' }}
        size={40}
        onClick={prevSlide}
      />
      <AiOutlineArrowRight
        className="leftArrow"
        size={40}
        color="black"
        onClick={nextSlide}
      />
      <Banner>
        {SliderData.map((slider, index) => {
          return (
            <div
              className={index === current ? 'slide active' : 'slide'}
              key={index}
            >
              {index === current && (
                <>
                  <div className="divTitle">
                    <h1>{slider.title}</h1>
                  </div>
                  <div
                    style={{
                      position: 'absolute',
                      top: '45%',
                      left: '10%',
                      width: '200px',
                      height: '5px',
                      backgroundColor: colors.blueshock,
                    }}
                  />
                  <div className="divSubtitle">
                    <h4>{slider.subtitle1}</h4>
                    <h4>{slider.subtitle2}</h4>
                    <h4>{slider.subtitle3}</h4>
                    <h4>{slider.subtitle4}</h4>
                  </div>
                  <img src={slider.image} alt="home banner" />
                </>
              )}
            </div>
          );
        })}
      </Banner>
    </Container>
  );
};

export default Home;

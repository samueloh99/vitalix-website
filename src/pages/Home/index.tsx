/* eslint-disable no-unused-expressions */
/* eslint-disable react/button-has-type */
/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';

import {
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiOutlineCalendar,
} from 'react-icons/ai';

import { Container } from './style';

import { SliderData } from './SliderData';

import * as colors from '../../styles/colors';

const Home: React.FC = () => {
  const [x, setX] = useState(0);

  const goLeft = () => {
    x === 0 ? setX(-100 * (SliderData.length - 1)) : setX(x + 100);
  };
  const goRight = () => {
    x === -100 * (SliderData.length - 1) ? setX(0) : setX(x - 100);
  };

  return (
    <Container className="slider">
      <AiOutlineArrowLeft
        className="leftArrow"
        color="black"
        style={{ cursor: 'pointer' }}
        size={40}
        onClick={goLeft}
      />
      <AiOutlineArrowRight
        className="rightArrow"
        style={{ cursor: 'pointer' }}
        size={40}
        color="black"
        onClick={goRight}
      />
      {SliderData.map((item, index) => {
        return (
          <div
            className="slide"
            key={index}
            style={{ transform: `translate(${x}%)` }}
          >
            <img src={item.image} alt={item.title} />
            <h1>{item.title}</h1>
            <div
              style={{
                width: '165px',
                height: '3px',
                backgroundColor: colors.blueshock,
                margin: '0px 0px 30px 110px',
              }}
            />
            <h4>{item.subtitle1}</h4>
            <h4>{item.subtitle2}</h4>
            <h4>{item.subtitle3}</h4>
            <h4>{item.subtitle4}</h4>
            <button>
              AGENDAMENTO ONLINE
              <div />
              <AiOutlineCalendar />
            </button>
          </div>
        );
      })}
    </Container>
  );
};

export default Home;

/* eslint-disable no-unused-expressions */
/* eslint-disable react/button-has-type */
/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react';

import { AiOutlineCalendar } from 'react-icons/ai';

import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import { Container } from './style';

import { SliderData } from './SliderData';

import * as colors from '../../styles/colors';

const Home: React.FC = () => {
  const [x, setX] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      x === -100 * (SliderData.length - 1) ? setX(0) : setX(x - 100);
    }, 5000);
    return () => clearInterval(interval);
  });

  const goLeft = () => {
    x === 0 ? setX(-100 * (SliderData.length - 1)) : setX(x + 100);
  };
  const goRight = () => {
    x === -100 * (SliderData.length - 1) ? setX(0) : setX(x - 100);
  };

  return (
    <Container className="slider" id="home">
      <IoIosArrowBack
        className="leftArrow"
        color={colors.grey}
        style={{
          cursor: 'pointer',
          background: 'rgba(255,255,255,0.8)',
          height: '100px',
          opacity: '0.5',
        }}
        size={40}
        onClick={goLeft}
      />
      <IoIosArrowForward
        className="rightArrow"
        style={{
          cursor: 'pointer',
          background: 'rgba(255,255,255,0.8)',
          height: '100px',
          opacity: '0.5',
        }}
        size={40}
        color={colors.grey}
        onClick={goRight}
      />
      {SliderData.map((item, index) => {
        return (
          <div
            className="slide"
            key={index}
            style={{ transform: `translate(${x}%)` }}
          >
            <img className="desktopImg" src={item.image} alt={item.title} />
            <img
              className="mobileImg"
              src={item.imageMobile}
              alt={item.title}
            />
            <h1>{item.title}</h1>
            <div
              className="linhaAzulHome"
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
            <a
              className="buttonCustomized"
              href="https://api.whatsapp.com/send?phone=5511942059930&text=Ol%C3%A1%2C%20desejo%20atendimento."
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              AGENDE A SUA CONSULTA
              <div />
              <AiOutlineCalendar />
            </a>
          </div>
        );
      })}
    </Container>
  );
};

export default Home;

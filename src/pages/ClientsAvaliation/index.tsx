/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/no-array-index-key */
import React from 'react';

import Slider from 'react-slick';

import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import { Container, MainCard } from './style';

import { ClientsData } from './clientsData';

import * as colors from '../../styles/colors';

const ClientsAvaliation: React.FC = () => {
  const NextArrow = (props: { onClick: any }) => {
    const { onClick } = props;

    return (
      <div className="nextArrow" onClick={onClick}>
        <IoIosArrowForward size={30} color={colors.black} />
      </div>
    );
  };

  const PrevArrow = (props: { onClick: any }) => {
    const { onClick } = props;
    return (
      <div className="prevArrow" onClick={onClick}>
        <IoIosArrowBack size={30} color={colors.black} />
      </div>
    );
  };

  const settings = {
    infinite: true,
    speed: 500,
    // autoplay: true,
    // autoplaySpeed: 4000,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <NextArrow onClick />,
    prevArrow: <PrevArrow onClick />,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };
  return (
    <Container>
      <h1>Oque dizem sobre nós</h1>
      <Slider {...settings}>
        {ClientsData.map((item, index) => {
          return (
            <MainCard key={index}>
              <p style={{ marginBottom: '30px' }}>❤️</p>
              <h1>{item.name}</h1>
              <h4>{item.comment}</h4>
            </MainCard>
          );
        })}
      </Slider>
    </Container>
  );
};

export default ClientsAvaliation;

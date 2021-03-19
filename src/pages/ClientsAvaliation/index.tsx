/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/no-array-index-key */
import React from 'react';

import Slider from 'react-slick';

import { Container, MainCard } from './style';

import { ClientsData } from './clientsData';

const ClientsAvaliation: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
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

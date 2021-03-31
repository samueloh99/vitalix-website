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
      <h1>O que dizem sobre nós</h1>
      <Slider {...settings}>
        {ClientsData.map((item, index) => {
          const { comment, name } = item;

          return (
            <MainCard key={index}>
              <a
                href="https://www.google.com/search?q=odonto+vitalix&oq=odonto+vitalix&aqs=chrome.0.69i59j0i395i433l3j0i395i457j0i395j69i60l2.1908j1j4&sourceid=chrome&ie=UTF-8#lrd=0x94ce594549888885:0x1bc339a32884893d,1,,,"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <p style={{ marginBottom: '30px' }}>❤️</p>
                <h1>{name}</h1>
                <h4>
                  {comment.length > 100
                    ? `${comment.substring(0, 100 - 3)}...`
                    : comment}
                </h4>
              </a>
            </MainCard>
          );
        })}
      </Slider>
    </Container>
  );
};

export default ClientsAvaliation;

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';

import Slider from 'react-slick';

import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import { AiFillCloseCircle } from 'react-icons/ai';

import { Container, Modal } from './style';

import { ImageData } from './ImageData';

import * as colors from '../../styles/colors';

const AboutOffice: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [imgId, setImgId] = useState(-1);

  const toggleModal = (id: number) => {
    setModalOpen(!modalOpen);
    setImgId(id);
  };

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
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <NextArrow onClick />,
    prevArrow: <PrevArrow onClick />,
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
    <Container id="aboutOffice" className="slider">
      <h1>Conheça um pouco do nosso espaço</h1>
      <Slider {...settings}>
        {ImageData.map(item => {
          return (
            <div
              onClick={() => toggleModal(item.id)}
              className="imgSlider"
              key={item.id}
            >
              <img src={item.img} alt="img" />
            </div>
          );
        })}
      </Slider>
      {ImageData.map(item => {
        return (
          imgId === item.id && (
            <Modal
              onClick={() => toggleModal(item.id)}
              open={modalOpen === true ? 'flex' : 'none'}
            >
              <img src={item.img} alt="img" />
              <AiFillCloseCircle onClick={() => toggleModal(item.id)} />
            </Modal>
          )
        );
      })}
    </Container>
  );
};

export default AboutOffice;

/* eslint-disable react/button-has-type */
/* eslint-disable no-unneeded-ternary */
/* eslint-disable no-bitwise */
/* eslint-disable consistent-return */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/no-array-index-key */

import React, { useState } from 'react';

import { AiOutlineCalendar } from 'react-icons/ai';

import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

import {
  Container,
  Services,
  ServiceOptions,
  ServiceContent,
  ContentInfo,
  ContentInfoDescription,
} from './style';

import { ServiceData } from './Data';

import clareamentoDental from '../../assets/clareamentoDental.jpg';

import * as colors from '../../styles/colors';

const ServiceSection: React.FC = () => {
  const [open, setOpen] = useState(-1);

  const toggleClick = (index: number) => {
    if (index === open) {
      setOpen(-1);
    } else {
      setOpen(index);
    }
  };

  return (
    <Container>
      <h1>Conheça nossos tratamentos</h1>
      <div
        style={{
          width: '165px',
          height: '3px',
          backgroundColor: colors.blueshock,
          marginLeft: '250px',
          marginTop: '5px',
        }}
      />
      <Services>
        <ServiceOptions>
          {ServiceData.map((serviceData, index) => (
            <>
              <div
                onClick={() => toggleClick(index)}
                key={index}
                style={{
                  marginBottom: open === index ? '0px' : '10px',
                  borderRadius: open === index ? '5px 5px 0px 0px' : '5px',
                }}
              >
                {serviceData.title}
                {open === index ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </div>
              <div
                style={{
                  display: open === index ? 'flex' : 'none',
                  borderRadius: open === index ? '0px 0px 5px 5px' : '5px',
                }}
                className="info"
              >
                {serviceData.subtitle?.map((subtitle, indexData) => (
                  <div key={indexData}>{subtitle}</div>
                ))}
              </div>
            </>
          ))}
        </ServiceOptions>
        <ServiceContent>
          <h1>Estética</h1>
          <ContentInfo>
            <ContentInfoDescription>
              <h4 style={{ fontSize: '20px' }}>Clareamento Dental</h4>
              <h4 style={{ fontWeight: 'lighter', marginTop: '20px' }}>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using Content
                here, content here, making it
              </h4>
              <button>
                AGENDE UM HORARIO
                <div />
                <AiOutlineCalendar />
              </button>
            </ContentInfoDescription>
            <img src={clareamentoDental} alt="img" />
          </ContentInfo>
        </ServiceContent>
      </Services>
    </Container>
  );
};

export default ServiceSection;

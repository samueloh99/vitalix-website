/* eslint-disable react/no-array-index-key */
/* eslint-disable array-callback-return */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';

// eslint-disable-next-line prettier/prettier
import Carousel from "react-elastic-carousel";

import { FaHeart } from 'react-icons/fa';

import { Container, Card } from './style';

import { ClientsData } from './clientsData';

import * as colors from '../../styles/colors';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

// eslint-disable-next-line prettier/prettier
function ClientsAvaliation () {
  return (
    <Container>
      <h1>O que dizem sobre nós</h1>
      <div
        style={{
          width: '165px',
          height: '3px',
          backgroundColor: colors.blueshock,
          marginLeft: '10px',
          marginTop: '5px',
        }}
      />
      <Carousel className="carouselContainer" breakPoints={breakPoints}>
        {ClientsData.map((client, index) => (
          <Card key={index}>
            <FaHeart size={30} color={colors.blueshock} />
            <h4 style={{ fontWeight: 'lighter' }}>{client.comment}</h4>
            <h4>{client.name}</h4>
          </Card>
        ))}
      </Carousel>
    </Container>
  );
}

export default ClientsAvaliation;

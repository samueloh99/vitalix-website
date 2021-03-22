import React, { useState } from 'react';

import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

import { Container } from './style';

import { ServiceData } from '../Data';

const IndexMobile: React.FC = () => {
  const [open, setOpen] = useState(-1);
  const [nameType, setNameType] = useState('');
  const [subtitleType, setSubtitleType] = useState('');

  return (
    <Container>
      <h1>Conheça os nossos tratamentos</h1>
    </Container>
  );
};

export default IndexMobile;

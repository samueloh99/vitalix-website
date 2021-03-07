/* eslint-disable react/button-has-type */
import React, { useState } from 'react';

import { FaBars, FaTimes, FaInstagram, FaFacebookF } from 'react-icons/fa';

import { AiOutlineCalendar } from 'react-icons/ai';

import { Link } from 'react-router-dom';

import * as colors from '../../styles/colors';

import {
  Container,
  Header,
  HeaderContent,
  HeaderOptions,
  MobileIcon,
  LineSeparator,
} from './style';

import logoImg from '../../assets/logo.png';

const Navbar: React.FC = () => {
  const [click, setClick] = useState(false);

  const [overFirstImg, setOverFirstImg] = useState(false);
  const [overSecondImg, setOverSecondImg] = useState(false);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  return (
    <Container>
      <Header>
        <HeaderContent>
          <Link onClick={closeMobileMenu} to="/">
            <img src={logoImg} alt="logo" />
          </Link>

          <MobileIcon onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </MobileIcon>

          <HeaderOptions click={click}>
            <Link onClick={closeMobileMenu} to="/" type="button">
              HOME
            </Link>
            <Link onClick={closeMobileMenu} to="/">
              SOBRE NÓS
            </Link>
            <Link onClick={closeMobileMenu} to="/">
              NOSSA EQUIPE
            </Link>
            <Link onClick={closeMobileMenu} to="/">
              TRATAMENTOS
            </Link>
            <Link onClick={closeMobileMenu} to="/">
              CONTATO
            </Link>
            <button>
              AGENDAMENTO ONLINE
              <div />
              <AiOutlineCalendar />
            </button>
            <LineSeparator />
            <a className="instaIcon" href="/">
              <FaInstagram
                size={20}
                onMouseOver={() => setOverFirstImg(true)}
                onMouseLeave={() => setOverFirstImg(false)}
                color={overFirstImg ? colors.blueshock : colors.black}
              />
            </a>
            <a className="facebookIcon" href="/">
              <FaFacebookF
                size={20}
                onMouseOver={() => setOverSecondImg(true)}
                onMouseLeave={() => setOverSecondImg(false)}
                color={overSecondImg ? colors.blueshock : colors.black}
              />
            </a>
          </HeaderOptions>
        </HeaderContent>
      </Header>
    </Container>
  );
};

export default Navbar;

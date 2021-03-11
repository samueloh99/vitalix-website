/* eslint-disable react/jsx-curly-newline */
/* eslint-disable react/button-has-type */
import React, { useState } from 'react';

import { FaBars, FaTimes, FaInstagram, FaFacebookF } from 'react-icons/fa';

import { AiOutlineCalendar } from 'react-icons/ai';

import { HashLink as Link } from 'react-router-hash-link';

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
          <Link onClick={closeMobileMenu} smooth to="/path#top">
            <img src={logoImg} alt="logo" />
          </Link>

          <MobileIcon onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </MobileIcon>

          <HeaderOptions click={click}>
            <Link
              scroll={el =>
                window.scrollTo({
                  top:
                    el.getBoundingClientRect().top + window.pageYOffset + -200,
                  behavior: 'smooth',
                })
              }
              onClick={closeMobileMenu}
              to="#home"
              type="button"
            >
              HOME
            </Link>
            <Link
              scroll={el =>
                window.scrollTo({
                  top:
                    el.getBoundingClientRect().top + window.pageYOffset + -200,
                  behavior: 'smooth',
                })
              }
              onClick={closeMobileMenu}
              to="#infoSection"
            >
              SOBRE NÓS
            </Link>
            <Link
              scroll={el =>
                window.scrollTo({
                  top:
                    el.getBoundingClientRect().top + window.pageYOffset + -100,
                  behavior: 'smooth',
                })
              }
              onClick={closeMobileMenu}
              to="#aboutTeam"
            >
              NOSSA EQUIPE
            </Link>
            <Link
              scroll={el =>
                window.scrollTo({
                  top:
                    el.getBoundingClientRect().top + window.pageYOffset + -200,
                  behavior: 'smooth',
                })
              }
              onClick={closeMobileMenu}
              to="#serviceSection"
            >
              TRATAMENTOS
            </Link>
            <Link
              scroll={el =>
                window.scrollTo({
                  top:
                    el.getBoundingClientRect().top + window.pageYOffset + -200,
                  behavior: 'smooth',
                })
              }
              onClick={closeMobileMenu}
              to="#convenio"
            >
              CONVÊNIO
            </Link>
            <a
              className="buttonCustomized"
              href="https://api.whatsapp.com/send?phone=5511942059930&text=Ol%C3%A1%2C%20desejo%20atendimento."
              target="_blank"
              rel="noopener noreferrer"
            >
              AGENDAMENTO ONLINE
              <div />
              <AiOutlineCalendar />
            </a>
            <LineSeparator />
            <a
              className="instaIcon"
              href="https://www.instagram.com/odontovitalix"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram
                size={20}
                onMouseOver={() => setOverFirstImg(true)}
                onMouseLeave={() => setOverFirstImg(false)}
                color={overFirstImg ? colors.blueshock : colors.black}
              />
            </a>
            <a
              className="facebookIcon"
              href="https://www.facebook.com/odontovitalix"
              target="_blank"
              rel="noopener noreferrer"
            >
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

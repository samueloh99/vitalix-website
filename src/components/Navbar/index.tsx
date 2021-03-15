/* eslint-disable react/jsx-curly-newline */
/* eslint-disable react/button-has-type */
import React, { useState } from 'react';

import { FaBars, FaTimes } from 'react-icons/fa';

import { AiOutlineCalendar } from 'react-icons/ai';

import { HashLink as Link } from 'react-router-hash-link';

import {
  Container,
  Header,
  HeaderContent,
  HeaderOptions,
  MobileIcon,
} from './style';

import logoImg from '../../assets/logo.png';

const Navbar: React.FC = () => {
  const [click, setClick] = useState(false);

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
              to="#aboutOffice"
            >
              A CLÍNICA
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
            <Link
              scroll={el =>
                window.scrollTo({
                  top:
                    el.getBoundingClientRect().top + window.pageYOffset + -200,
                  behavior: 'smooth',
                })
              }
              onClick={closeMobileMenu}
              to="#localization"
            >
              LOCALIZAÇÃO
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
          </HeaderOptions>
        </HeaderContent>
      </Header>
    </Container>
  );
};

export default Navbar;

import styled, { keyframes } from 'styled-components';
import * as colors from '../../styles/colors';

interface NavBarProps {
  click: boolean;
}

const appearFromLeft = keyframes`
  from{
    opacity:0;
    transform:translateX(-50px)
  }
  to{
    opacity:1;
    transform:translateX(0)
  }
`;

const spin = keyframes`
	0% {
		transform: scale(1, 1);
		
	}
	50% {
		transform: scale(-1, 1);
	}
	100% {
		transform: scale(1, 1);
	}
`;

export const Container = styled.div`
  animation: ${appearFromLeft} 1.5s;
  position: sticky;
  top: 0;
  z-index: 999;

  @media screen and (max-width: 1200px) {
    animation: none;
  }
`;

export const Header = styled.header`
  background: ${colors.white};
  padding: 14px 135px 14px 135px;

  @media screen and (max-width: 1200px) {
    padding: 0;
  }
`;

export const HeaderContent = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  position: relative;

  a > img {
    height: 120px;
    animation: ${spin} 4s infinite;
  }
  @media screen and (max-width: 1200px) {
    img {
      margin-left: 10px;
    }
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 1200px) {
    display: block;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    position: absolute;
    right: 0;
    top: 15px;
    color: ${colors.black};
  }
`;

export const HeaderOptions = styled.div<NavBarProps>`
  display: flex;
  flex-direction: row;
  margin-left: auto;
  align-items: center;
  text-align: center;
  font-weight: bold;

  .buttonCustomized {
    color: ${colors.white};
    margin-left: 15px;
    background: ${colors.blueshock};
    padding: 0px 10px 0px 40px;
    display: flex;
    align-items: center;

    div {
      width: 2px;
      height: 35px;
      margin: 0px 10px 0px 40px;
      background-color: ${colors.white};
    }

    &:hover {
      background-color: ${colors.blueDark};
      color: ${colors.white};
      transition: 0.3s;
      div {
        background-color: ${colors.blueDark};
        transition: 0.3s;
      }
    }
  }

  a {
    background: transparent;
    border: 0;
    text-decoration: none;
    color: ${colors.black};
    font-weight: lighter;
    font-size: 15px;

    & + a {
      margin-left: 20px;
    }

    &:hover {
      color: ${colors.blueshock};
      transition: all 0.3s ease;
    }

    & + svg {
      margin-left: 20px;
    }
  }

  @media screen and (max-width: 1200px) {
    position: absolute;
    top: 105px;
    left: ${({ click }) => (click ? 0 : '-200%')};
    opacity: 1;
    transition: all 0.5s ease;
    background: ${colors.white};
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;

    a {
      border: 1px solid ${colors.black};
      height: 100px;
      width: 100%;
      color: ${colors.black};
      display: flex;
      align-items: center;
      justify-content: center;

      & + a {
        margin-left: 0;
      }

      &:hover {
        border-color: ${colors.blueshock};
        color: ${colors.blueshock};
        transition: all 0.3s ease;
      }
    }

    svg,
    .facebookIcon,
    .instaIcon {
      display: none;
    }

    .buttonCustomized {
      color: ${colors.black};
      background: ${colors.blueshock};
      width: 100%;
      height: 100px;
      margin: 0;
      padding: 0;
      text-align: center;
      justify-content: center;
      border: none;
      border: 1px solid black;
      border-bottom: 2px solid black;

      div {
        width: 2px;
        height: 100px;
        background-color: ${colors.black};
      }
      svg {
        display: flex;
      }

      &:hover {
        border: none;
      }
    }
  }
`;

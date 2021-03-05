import styled from 'styled-components';
import * as colors from '../../styles/colors';

interface NavBarProps {
  click: boolean;
}

export const Container = styled.div`
  position: sticky;
  top: 0;
  z-index: 999;
`;

export const Header = styled.header`
  background: ${colors.white};
  padding: 14px 135px 14px 135px;

  @media screen and (max-width: 1250px) {
    padding: 0;
  }
`;

export const HeaderContent = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  position: relative;

  a > img {
    height: 100px;
  }
  @media screen and (max-width: 1250px) {
    img {
      margin-left: 10px;
    }
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 1250px) {
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

  button {
    color: ${colors.white};
    margin-left: 15px;
    border: none;
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

  @media screen and (max-width: 1250px) {
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

    svg {
      display: none;
    }
  }
`;

export const LineSeparator = styled.div`
  border: 1px solid ${colors.black};
  width: 1px;
  height: 54px;
  margin: 0px 38px 0px 38px;

  @media screen and (max-width: 1250px) {
    display: none;
  }
`;

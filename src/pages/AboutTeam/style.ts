import styled from 'styled-components';

import * as colors from '../../styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0px 160px 0px 160px;
`;

export const AboutUsSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 100px;

  h1 {
    color: ${colors.blueDark};
  }

  h4 {
    color: ${colors.black};
    font-weight: lighter;
    margin-top: 23px;
    margin-left: 10px;
    font-size: 20px;
  }
`;

export const DoctorsSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 200px;
  margin-top: 150px;
`;

export const DoctorCard = styled.div`
  text-align: left;
  width: 240px;
  cursor: pointer;
  position: relative;

  display: inline-block; /* shrink wrap to image */
  overflow: hidden; /* hide the excess */

  &:after {
    content: '';
    position: absolute;
    left: 0px;
    top: 0px;
    right: 0px;
    bottom: 0px;
    background-image: linear-gradient(
      to bottom,
      transparent 25%,
      rgba(162, 181, 205, 1) 60%
    );
    border-radius: 10px;
    opacity: 0;
    transition: all 1s;
  }

  &:hover:after {
    opacity: 1;
  }

  &:hover {
    h4,
    h1,
    svg {
      position: relative;
      z-index: 99999;
      color: ${colors.white};
    }
  }

  &:hover {
    img {
      transform: scale(1.3);
      border-radius: 10px;
    }
  }

  img {
    height: 300px;
    border-radius: 10px;
    display: block; /* no whitespace */
    transition: 0.3s ease-in-out;
  }

  h1 {
    color: ${colors.black};
    height: 100px;
    font-size: 25px;
    padding-left: 10px;
  }

  h4 {
    color: ${colors.black};
    font-weight: lighter;
    padding-left: 10px;
    margin-top: 10px;
  }

  svg {
    padding-left: 10px;
  }
`;

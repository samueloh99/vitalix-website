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
  width: 243px;
  cursor: pointer;
  position: relative;

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
      rgba(162, 181, 205, 1) 100%
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

  img {
    height: 300px;
    border-radius: 10px;
  }

  h1 {
    color: ${colors.black};
    height: 100px;
    font-size: 25px;
  }

  h4 {
    color: ${colors.black};
    font-weight: lighter;
  }
`;

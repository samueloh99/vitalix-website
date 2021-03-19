import styled from 'styled-components';

import { shade } from 'polished';

import * as colors from '../../styles/colors';

interface ServiceSubtitleProps {
  opacity: string;
  display: string;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 160px 0px 160px;
  font-weight: lighter;
  position: relative;

  h1 {
    font-size: 30px;
    color: ${colors.grey};
    margin-bottom: 40px;
  }

  @media screen and (max-width: 1300px) {
    padding: 0px 10px 0px 10px;
  }
`;

export const Wrapper = styled.div`
  display: flex;

  @media screen and (max-width: 1300px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ServiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const ServicesTitle = styled.div`
  display: flex;
  background: ${colors.blueDark};
  border-radius: 5px 5px 0px 0px;
  width: 230px;
  height: auto;
  align-items: center;
  margin-top: 20px;
  justify-content: center;
  padding: 10px;
  position: relative;
  cursor: pointer;

  h1 {
    font-size: 15px;
    color: ${colors.white};
    margin: 0;
  }

  svg {
    position: absolute;
    right: 8px;
  }

  &:hover {
    transition: 0.5s ease-in-out;
    background: ${shade(0.2, colors.blueDark)};
  }
`;

export const ServiceSubtitle = styled.div<ServiceSubtitleProps>`
  display: ${props => props.display};
  opacity: ${props => props.opacity};
  overflow: hidden;
  transition: visibility 0s linear 0.33s, opacity 0.33s linear;

  -webkit-animation: fadeInFromNone 0.5s ease-out;
  -o-animation: fadeInFromNone 0.5s ease-out;
  animation: fadeInFromNone 0.5s ease-out;

  @-webkit-keyframes fadeInFromNone {
    0% {
      display: none;
      opacity: 0;
    }

    1% {
      display: block;
      opacity: 0;
    }

    100% {
      display: block;
      opacity: 1;
    }
  }

  @-o-keyframes fadeInFromNone {
    0% {
      display: none;
      opacity: 0;
    }

    1% {
      display: block;
      opacity: 0;
    }

    100% {
      display: block;
      opacity: 1;
    }
  }

  @keyframes fadeInFromNone {
    0% {
      display: none;
      opacity: 0;
    }

    1% {
      display: block;
      opacity: 0;
    }

    100% {
      display: block;
      opacity: 1;
    }
  }

  flex-direction: column;
  width: 230px;
  height: auto;
  padding: 10px;
  background: ${colors.blueDark};
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;

  h1 {
    color: ${colors.white};
    font-size: 15px;
    margin: 0;
  }

  &:hover {
    transition: 0.5s ease-in-out;
    background: ${shade(0.2, colors.blueDark)};
  }
`;

export const ServiceDescription = styled.div`
  display: flex;
  margin: 20px 0px 0px 20px;
  width: 100%;
  height: 100%;

  @media screen and (max-width: 1300px) {
    flex-direction: column;
    align-items: center;
    margin: 30px 0px 0px 0px;
  }
`;

export const WrapContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  h1 {
    font-size: 30px;
    color: ${colors.blueDark};
  }

  h4 {
    font-size: 20px;
    color: ${colors.grey};
    margin-bottom: 10px;
  }

  @media screen and (max-width: 1300px) {
    text-align: center;
    padding: 15px;
  }
`;

export const WrapImgs = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;

  img {
    width: 350px;
    border-radius: 5px;
  }

  @media screen and (max-width: 1300px) {
    img {
      margin-top: 30px;
    }
  }
`;

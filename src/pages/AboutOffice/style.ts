import styled from 'styled-components';

import * as colors from '../../styles/colors';

export const Container = styled.div`
  position: relative;
  height: 70vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 120px;
  padding: 0px 160px 0px 160px;

  h1 {
    color: ${colors.grey};
    font-size: 30px;
  }

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    padding: 0px 10px 0px 10px;
    height: 100vh;
    margin: 0px 0px 70px 0px;
  }
`;

export const ContainerWrapper = styled.div`
  display: flex;
  margin-top: 100px;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  text-align: center;

  h4 {
    width: 400px;
    color: ${colors.black};
  }

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    margin: 0;
  }
`;

export const SliderContainer = styled.div`
  display: flex;
  width: 700px;
  height: 100%;
  position: relative;
  align-items: center;
  justify-content: center;

  img {
    width: 400px;
    height: 400px;
    border-radius: 10px;
  }

  .rightArrow {
    position: absolute;
    top: 50%;
    right: 0;
    color: ${colors.black};
    cursor: pointer;
  }
  .leftArrow {
    position: absolute;
    top: 50%;
    left: 0;
    color: ${colors.black};
    cursor: pointer;
  }

  .slide {
    opacity: 0;
    transition-duration: 1s ease;
  }

  .slide.active {
    opacity: 1;
    transition-duration: 1s;
    transform: scale(1.08);
  }

  @media screen and (max-width: 1000px) {
    width: 100%;
    margin: 70px 0px 70px 0px;

    img {
      width: 250px;
      height: 250px;
    }
  }
`;

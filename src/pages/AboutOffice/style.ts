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
    color: ${colors.blueDark};
  }
`;

export const ContainerWrapper = styled.div`
  display: flex;
  margin-top: 100px;
  width: 100%;
  justify-content: space-around;

  img {
    border-radius: 10px;
    cursor: pointer;
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
`;

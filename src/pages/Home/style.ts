import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  position: relative;
  width: 100%;

  .rightArrow {
    position: absolute;
    top: 50%;
    left: 0;
    z-index: 1;
  }

  .leftArrow {
    position: absolute;
    top: 50%;
    right: 0;
    z-index: 1;
  }
`;

export const Banner = styled.div`
  position: relative;
  width: 100%;

  .slide {
    transition-duration: 1s ease;
  }

  .divTitle {
    position: absolute;
    top: 35%;
    left: 10%;
    right: 10%;

    h1 {
      font-size: 50px;
    }
  }

  .divSubtitle {
    position: absolute;
    top: 50%;
    left: 10%;
    right: 10%;
    width: 400px;

    h4 {
      font-size: 20px;
      font-weight: lighter;

      & + h4 {
        margin-top: 10px;
      }
    }
  }

  img {
    width: 100%;
    height: 100%;
  }
`;

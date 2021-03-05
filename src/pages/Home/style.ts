import styled from 'styled-components';

import * as colors from '../../styles/colors';

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

  button {
    position: absolute;
    color: ${colors.white};
    border: none;
    background: ${colors.blueshock};
    padding: 0px 10px 0px 40px;
    display: flex;
    align-items: center;
    top: 80%;
    left: 10%;

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

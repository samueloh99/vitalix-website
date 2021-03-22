import styled from 'styled-components';

import * as colors from '../../styles/colors';

export const Container = styled.div`
  width: 100%;
  height: 80vh;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  overflow: hidden;
  position: relative;

  .slide {
    display: flex;
    min-width: 100%;
    height: 80vh;
    transition: 0.5s;
    overflow: hidden;
    flex-direction: column;
    justify-content: center;

    h1 {
      margin: 0px 100px 0px 100px;
      font-size: 50px;
    }
    h4 {
      margin: 0px 100px 10px 100px;
      font-weight: lighter;
      font-size: 20px;
      width: 600px;
      z-index: 10;
    }
  }

  .rightArrow {
    position: absolute;
    right: 0;
    z-index: 10;
    transition: 1s ease-in-out !important;

    &:hover {
      background-color: black !important;
    }
  }

  .leftArrow {
    position: absolute;
    left: 0;
    z-index: 10;
    transition: 1s ease-in-out !important;

    &:hover {
      background-color: black !important;
    }
  }

  img {
    position: absolute;
    z-index: -10;
    width: 100%;
  }

  .mobileImg {
    display: none;
  }

  .buttonCustomized {
    color: ${colors.white};
    background: ${colors.blueshock};
    border: 2px solid ${colors.blueshock};
    display: flex;
    align-items: center;
    width: 270px;
    margin: 100px 0px 0px 100px;
    padding: 0px 0px 0px 10px;

    div {
      width: 2px;
      height: 40px;
      margin: 0px 10px 0px 10px;
      background-color: ${colors.white};
    }

    &:hover {
      border: 2px solid ${colors.blueDark};
      background-color: ${colors.blueDark};
      transition: 0.3s;
      div {
        background-color: ${colors.blueDark};
        transition: 0.3s;
      }
    }
  }

  @media screen and (max-width: 630px) {
    .linhaAzulHome {
      display: none;
    }

    .slide {
      display: inline-flex;
      text-align: start;
      align-items: center;

      h1 {
        font-size: 30px;
        margin: 0px 0px 50px 0px;
      }
      h4 {
        font-size: 17px;
        margin: 0px 0px 10px 0px;
        width: 300px;
      }
      a {
        margin: 40px;
      }
    }
    .desktopImg {
      display: none;
    }
    .mobileImg {
      display: flex;
      position: absolute;
      z-index: -10;
    }
  }
`;

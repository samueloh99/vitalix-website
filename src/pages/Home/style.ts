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
    }
  }

  .rightArrow {
    position: absolute;
    right: 0;
    z-index: 10;
  }
  .leftArrow {
    position: absolute;
    left: 0;
    z-index: 10;
  }

  img {
    position: absolute;
    z-index: -10;
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
    width: 240px;
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
    .slide {
      display: inline-block;
      text-align: center;

      h1 {
        font-size: 30px;
        margin: 80px 15px 0px 15px;
      }
      h4 {
        font-size: 17px;
        margin: 0px 50px 5px 50px;
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

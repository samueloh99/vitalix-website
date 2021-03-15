import styled from 'styled-components';

import * as colors from '../../styles/colors';

export const Container = styled.div`
  width: 100%;
  height: 60vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 0px 160px 0px 160px;
  margin: 100px 0px 100px 0px;

  @media screen and (max-width: 900px) {
    flex-direction: column;
    height: 100vh;
    margin: 100px 0px 0px 0px;
    padding: 0;
  }
`;

export const CardContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  @media screen and (max-width: 1300px) {
    margin-bottom: 30px;
  }
`;

export const Card = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  transition: transform 1s ease-in-out;
  transform-style: preserve-3d;

  &:hover {
    transform: rotateY(180deg);
  }
`;

export const CardFront = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${colors.black};
  background: ${colors.white};

  h1 {
    color: ${colors.white};
  }

  @media screen and (max-width: 1300px) {
    h1 {
      font-size: 20px;
    }
  }
`;

export const CardBack = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: absolute;
  backface-visibility: hidden;
  background: #87868a;
  transform: rotateY(180deg);
  text-align: center;
  align-items: center;
  padding: 30px;
  font-size: 17px;
  color: ${colors.white};
  justify-content: center;

  ul {
    display: inline-block;
    text-align: center;
    list-style-type: none;

    li {
      margin-bottom: 10px;
    }
  }

  @media screen and (max-width: 1300px) {
    padding: 10px;
    justify-content: center;

    h4 {
      font-size: 14px;
    }
    ul {
      li {
        font-size: 15px;
      }
    }
  }
`;

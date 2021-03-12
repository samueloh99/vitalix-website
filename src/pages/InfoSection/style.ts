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

  @media screen and (max-width: 800px) {
    flex-direction: column;
    height: 100vh;
    margin-top: 100px;
    margin-bottom: 100px;
  }
`;

export const CardContainer = styled.div`
  width: 300px;
  height: 300px;
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
  box-shadow: 0px 3px 18px 3px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

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
  border-radius: 10px;

  h1 {
    text-shadow: 0 1px 0 #b5b5b5, -1px 2px 1px #bfbfbf, -2px 4px 1px #c7c7c7,
      -4px 6px 1px #d4d4d4, -6px 8px 1px #e6e6e6;
    color: #707070;
  }
`;

export const CardBack = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: absolute;
  backface-visibility: hidden;
  background: ${colors.blueDark};
  transform: rotateY(180deg);
  text-align: center;
  align-items: center;
  padding: 30px;
  font-size: 17px;
  border-radius: 10px;
  color: ${colors.white};

  ul {
    display: inline-block;
    text-align: start;
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

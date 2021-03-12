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
`;

export const CardContainer = styled.div`
  width: 250px;
  height: 300px;
  position: relative;
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
  color: ${colors.white};
  background-image: linear-gradient(
    166deg,
    rgba(0, 201, 255, 1) 0%,
    rgba(162, 181, 205, 1) 60%
  );
  border-radius: 10px;
`;

export const CardBack = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: absolute;
  backface-visibility: hidden;
  background: ${colors.blueshock};
  transform: rotateY(180deg);
  text-align: center;
  align-items: center;
  padding: 30px;
  font-size: 17px;
  border-radius: 10px;

  ul {
    display: inline-block;
    text-align: start;
    li {
      margin-bottom: 10px;
    }
  }
`;

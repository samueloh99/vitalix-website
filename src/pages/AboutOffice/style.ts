import styled, { keyframes } from 'styled-components';

import * as colors from '../../styles/colors';

interface ModalProps {
  open: string;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 160px 0px 160px;
  margin: 100px 0px 200px 0px;

  h1 {
    font-size: 36px;
    color: ${colors.blueshock};
    margin-bottom: 70px;
    text-transform: uppercase;
    font-weight: 700;
  }

  .slick-slide {
    transition: all 0.5s ease-in-out;
    cursor: pointer;

    &:hover {
      transform: scale(1.1);
    }
  }

  img {
    width: 110%;
    height: 100%;
    padding: 40px;
    cursor: pointer;
    transition: 0.3s;
  }

  .prevArrow {
    position: absolute;
    top: 50%;
    left: 0;
    z-index: 100;
    cursor: pointer;
  }

  .nextArrow {
    position: absolute;
    top: 50%;
    right: 0;
    z-index: 100;
    cursor: pointer;
  }

  @media screen and (max-width: 1300px) {
    padding: 0px 10px 0px 10px;

    img {
      width: 100%;
    }
  }
`;

const zoom = keyframes`
  from{
    transform:scale(0)
  }
  to{
    transform:scale(1)
  }
`;

export const Modal = styled.div<ModalProps>`
  display: ${props => props.open}; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 10000; /* Sit on top */
  justify-content: center;
  align-items: center;
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.9); /* Black w/ opacity */

  img {
    width: auto;
    height: auto;
    animation: ${zoom};
    animation-duration: 0.6s;
  }

  svg {
    position: absolute;
    top: 15px;
    right: 35px;
    font-size: 40px;
    transition: 0.3s;
  }
`;

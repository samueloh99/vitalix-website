import styled, { keyframes } from 'styled-components';

import { shade } from 'polished';

import * as colors from '../../../styles/colors';

const appearFromLeft = keyframes`
  from{
    opacity:0;
    transform:translateX(-50px)
  }
  to{
    opacity:1;
    transform:translateX(0)
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 160px 0px 160px;
  font-weight: lighter;
  position: relative;

  h1 {
    font-size: 36px;
    color: ${colors.blueshock};
    margin-bottom: 40px;
    text-transform: uppercase;
  }

  @media screen and (max-width: 1300px) {
    display: none;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ServiceOptions = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ServicesTitle = styled.div`
  display: flex;
  background: ${colors.blueDark};
  border-radius: 5px;
  width: 100%;
  height: auto;
  align-items: center;
  justify-content: center;
  padding: 10px;
  position: relative;
  cursor: pointer;
  margin: 10px;
  text-align: center;

  h1 {
    font-size: 15px;
    color: ${colors.white};
    margin: 0;
  }

  svg {
    position: absolute;
    right: 8px;
  }

  &:hover {
    transition: 0.5s ease-in-out;
    background: ${shade(0.2, colors.blueDark)};
  }
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  animation: ${appearFromLeft} 1s;
`;

export const CardTitle = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  margin-top: 20px;
  width: 100%;
  padding: 10px;

  h1 {
    font-size: 35px;
    color: ${colors.blueDark};
  }

  h4 {
    font-size: 15px;
    color: ${colors.black};
  }

  img {
    margin-top: 50px;
    border-radius: 10px;
    width: 200px;
  }
`;

export const CardInfo = styled.div`
  display: inline-block;
  justify-content: center;
  width: 100%;
  margin-top: 70px;
  text-align: center;
`;

export const CardInfoDescription = styled.div`
  display: inline-block;
  flex-direction: column;
  justify-content: space-between;
  width: 280px;
  text-align: center;
  padding: 30px;
  margin: 25px;
  background: white;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.5s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  .textDesc {
    display: flex;
    flex-direction: column;
    height: 345px;
  }

  h1 {
    font-size: 20px;
    color: ${colors.blueDark};
    height: 60px;
  }

  h5 {
    font-size: 13px;
    color: ${colors.black};
  }

  img {
    margin-top: 50px;
    border-radius: 10px;
    width: 200px;
  }
`;

import styled from 'styled-components';

import * as colors from '../../styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #f8f8f8;
  width: 100%;
  height: 500px;
  padding: 40px 160px 0px 160px;
  justify-content: space-around;

  @media screen and (max-width: 1300px) {
    padding: 0px 10px 0px 10px;
    height: 850px;
  }
`;

export const WrapSection = styled.div`
  display: flex;
`;

export const Section = styled.div`
  display: flex;
  color: black;
  flex-direction: column;
  width: 50%;
  align-items: center;

  h1 {
    font-weight: 700;
    font-size: 20px;
    margin-bottom: 20px;
  }

  img {
    width: 250px;
  }

  h4 {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    font-weight: 200;
  }

  a {
    text-decoration: none;
    margin-left: 5px;
    color: black;
  }

  .h4Personalized {
    margin-top: 20px;
  }

  svg {
    margin-right: 10px;
  }
`;

export const FooterEnd = styled.div`
  display: flex;
  width: 100%;
  color: white;
  background: ${colors.grey};
  flex-direction: column;
  align-items: center;

  h4 {
    font-weight: 200;
    font-size: 10px;
  }

  a {
    text-decoration: none;
    margin-left: 5px;
    color: white;
    font-weight: 200;
    font-size: 10px;
  }
`;

export const SocialMediaSection = styled.div`
  width: 100%;
  text-align: center;

  a {
    margin: 10px;
  }

  svg {
    background: ${colors.blueshock};
    border-radius: 50%;
    width: 50px;
    height: 50px;
    padding: 7px;
  }
`;

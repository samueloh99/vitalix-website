import styled from 'styled-components';

import * as colors from '../../styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 160px 0px 160px;
  margin-bottom: 200px;
  margin-top: 40px;
  height: 100%;

  @media screen and (max-width: 1300px) {
    flex-direction: column;
    padding: 0px 10px 0px 10px;
    align-items: start;
  }
`;

export const Header = styled.div`
  margin-bottom: 40px;
  h1 {
    font-size: 36px;
    color: ${colors.blueshock};
    text-transform: uppercase;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    width: 500px;
    margin: 85px 10px 0px 30px;
    text-align: center;

    h4 {
      font-size: 17px;
      color: ${colors.black};
      margin-bottom: 30px;
    }
  }

  .mapDesktop {
    border-radius: 10px;
    cursor: pointer;
    width: 500px;
  }

  .mapMobile {
    display: none;
    border-radius: 10px;
    cursor: pointer;
  }

  @media screen and (max-width: 1300px) {
    flex-direction: column;
    width: 100%;
    text-align: center;

    div {
      width: 350px;
      margin-top: 40px;
      text-align: center;
      margin: 30px 0px 0px 0px;
    }

    .mapDesktop {
      display: none;
    }

    .mapMobile {
      display: flex;
      border-radius: 10px;
      cursor: pointer;
      width: 300px;
      height: 300px;
    }

    a {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;

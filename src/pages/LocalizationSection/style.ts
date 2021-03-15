import styled from 'styled-components';

import * as colors from '../../styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 160px 0px 160px;
  margin-bottom: 200px;
  margin-top: 100px;
  height: 100%;

  @media screen and (max-width: 1300px) {
    flex-direction: column;
    padding: 0px 10px 0px 10px;
    align-items: start;
  }
`;

export const Header = styled.div`
  margin-bottom: 70px;
  h1 {
    font-size: 30px;
    color: ${colors.grey};
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    width: 500px;
    margin: 0px 10px 0px 30px;

    h4 {
      font-size: 17px;
      color: ${colors.grey};
      margin-bottom: 30px;
    }
  }

  .mapDesktop {
    border-radius: 10px;
    cursor: pointer;
  }

  .mapMobile {
    display: none;
    border-radius: 10px;
    cursor: pointer;
  }

  @media screen and (max-width: 1300px) {
    flex-direction: column;
    width: 100%;

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
  }
`;

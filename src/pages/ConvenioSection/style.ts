import styled from 'styled-components';

import * as colors from '../../styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 80px 160px 50px 160px;
  margin-bottom: 50px;
  background: white;

  h1 {
    color: #73849b;
    font-size: 33px;
    text-transform: uppercase;
    font-weight: 700;
  }

  div {
    display: inline-block;

    margin-top: 20px;
    text-align: center;

    img {
      height: 150px;
      margin: 15px;
    }
  }

  @media screen and (max-width: 1300px) {
    padding: 0 10px 0px 10px;

    h1 {
      margin-top: 40px;
    }

    div {
      text-align: center;

      img {
        height: 100px;
        margin-left: 10px;
      }
    }
  }
`;

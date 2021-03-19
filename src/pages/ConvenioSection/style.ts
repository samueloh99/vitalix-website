import styled from 'styled-components';

import * as colors from '../../styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0px 160px 0px 160px;
  margin-top: 50px;
  margin-bottom: 50px;

  h1 {
    color: ${colors.grey};
    font-size: 30px;
  }

  div {
    display: inline-block;

    margin-top: 20px;
    text-align: center;

    img {
      height: 150px;
    }
  }

  @media screen and (max-width: 1300px) {
    padding: 0 10px 0px 10px;

    div {
      text-align: center;

      img {
        height: 100px;
        margin-left: 10px;
      }
    }
  }
`;

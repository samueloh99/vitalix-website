import styled from 'styled-components';
import * as colors from '../../styles/colors';

export const Container = styled.div`
  display: flex;
  height: 200px;
  background: ${colors.blueshock};
  justify-content: center;
  align-items: center;

  h1 {
    font-weight: lighter;
    display: flex;
    flex-direction: row;

    p {
      font-weight: bold;
      margin-left: 10px;
    }
  }

  .buttonCustomized {
    color: ${colors.white};
    margin-left: 80px;
    background: transparent;
    padding: 0px 10px 0px 10px;
    border: 2px solid ${colors.white};
    display: flex;
    align-items: center;

    div {
      width: 2px;
      height: 40px;
      margin: 0px 10px 0px 40px;
      background-color: ${colors.white};
    }

    &:hover {
      border: 2px solid ${colors.blueDark};
      background-color: ${colors.blueDark};
      transition: 0.3s;
      div {
        background-color: ${colors.blueDark};
        transition: 0.3s;
      }
    }
  }

  @media screen and (max-width: 1300px) {
    flex-direction: column;
    text-align: center;

    h1 {
      flex-direction: column;
      font-size: 25px;
    }

    .buttonCustomized {
      margin: 30px 0px 0px 0px;
    }
  }
`;

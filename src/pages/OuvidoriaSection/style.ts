import styled from 'styled-components';

import ouvidoria from '../../assets/ouvidoria.jpg';

import * as colors from '../../styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 80px 160px 100px 160px;
  height: 100%;
  background-image: url(${ouvidoria});
  background-repeat: no-repeat, repeat;
  background-size: cover;

  @media screen and (max-width: 1300px) {
    flex-direction: column;
    padding: 0px 10px 0px 10px;
    align-items: start;
  }
`;

export const Header = styled.div`
  h1 {
    font-size: 36px;
    color: ${colors.blueshock};
    text-transform: uppercase;
    margin-bottom: 30px;
    font-weight: bold;
  }

  @media screen and (max-width: 1300px) {
    margin-top: 40px;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  form {
    display: flex;
    flex-direction: column;
    justify-content: start;
    width: 400px;

    label {
      color: ${colors.black};
      margin: 0px 0px 10px 0px;
    }

    input {
      margin-bottom: 5px;
      width: 400px;
      padding: 5px;
      border-radius: 5px;
      border: 1px solid black;
    }

    textarea {
      margin-bottom: 30px;
      width: 400px;
    }

    #subject {
      width: 400px;
      height: 200px;
    }

    .buttonSend {
      border: none;
      background: ${colors.blueshock};
      width: 200px;
      height: 40px;
      color: ${colors.white};
      cursor: pointer;
      text-align: center;
      transition: 0.5s ease-out;

      &:hover {
        background: ${colors.blueDark};
      }
    }
  }

  @media screen and (max-width: 1300px) {
    flex-direction: column;
    width: 100%;
    margin-bottom: 50px;

    form {
      width: 100%;

      input {
        width: 100%;
      }

      #subject {
        width: 80%;
        height: 200px;
      }
    }
  }
`;

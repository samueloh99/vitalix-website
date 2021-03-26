import styled from 'styled-components';
import * as colors from '../../styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 80px 160px 100px 160px;
  height: 100%;
  background: white;

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
      width: 300px;
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

  .ouvidoriaDesktop {
    border-radius: 50%;
    cursor: pointer;
  }

  .ouvidoriaMobile {
    display: none;
    border-radius: 10px;
    cursor: pointer;
  }

  @media screen and (max-width: 1300px) {
    flex-direction: column;

    form {
      width: 100%;
      input {
        width: 100%;
      }
    }
    .ouvidoriaDesktop {
      display: none;
    }

    textarea {
      margin-bottom: 30px;
      width: 400px;
    }

    .ouvidoriaMobile {
      display: flex;
      border-radius: 50%;
      cursor: pointer;
      width: 300px;
      height: 300px;
      margin-bottom: 100px;
      margin-top: 50px;
    }
  }
`;

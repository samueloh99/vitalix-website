import styled from 'styled-components';
import * as colors from '../../styles/colors';

export const Container = styled.div`
  height: 80vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0px 160px 0px 160px;
  margin-bottom: 100px;

  h1 {
    font-size: 30px;
    color: ${colors.grey};
    margin-bottom: 30px;
  }

  form {
    justify-content: start;
    width: 300px;

    label {
      color: ${colors.black};
      margin: 0px 0px 10px 0px;
    }

    input {
      margin-bottom: 30px;
      width: 250px;
      padding: 5px;
    }

    textarea {
      margin-bottom: 30px;
    }

    #subject {
      width: 400px;
      height: 150px;
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

    display: flex;
    flex-direction: column;
  }

  div {
    h4 {
      color: ${colors.black};
      margin-bottom: 10px;
    }
    svg {
      margin: 10px 10px 0px 0px;
    }
  }

  img {
    border-radius: 10px;
    cursor: pointer;
  }

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    padding: 0px 10px 0px 10px;
    height: 130vh;
    align-items: start;

    img {
      width: 300px;
      height: 300px;
      margin: 60px 0px 0px 0px;
    }

    form {
      #subject {
        width: 100%;
      }
    }
  }
`;

import styled from 'styled-components';
import * as colors from '../../styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 160px 0px 160px;
  margin-bottom: 100px;
  height: 100%;

  @media screen and (max-width: 1300px) {
    flex-direction: column;
    padding: 0px 10px 0px 10px;
    align-items: start;
  }
`;

export const Header = styled.div`
  h1 {
    font-size: 30px;
    color: ${colors.grey};
    margin-bottom: 30px;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

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

export const MidiaInfo = styled.div`
  display: flex;
  flex-direction: column;

  div {
    display: flex;

    svg {
      margin: 10px 10px 10px 0px;
    }
  }

  h4 {
    color: ${colors.black};
  }

  @media screen and (max-width: 1300px) {
    margin-top: 20px;
  }
`;

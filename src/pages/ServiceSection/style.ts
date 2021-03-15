import styled from 'styled-components';

import * as colors from '../../styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 160px 0px 160px;
  font-weight: lighter;

  h1 {
    font-size: 30px;
    color: ${colors.grey};
  }

  @media screen and (max-width: 1300px) {
    padding: 0px 10px 0px 10px;
  }
`;

export const Services = styled.div`
  display: flex;
  margin-top: 70px;

  @media screen and (max-width: 1300px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ServiceOptions = styled.div`
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    border-radius: 5px;
    background: ${colors.blueDark};
    margin-bottom: 10px;
    padding: 10px;
    width: 260px;
    justify-content: space-between;
    align-items: center;
  }

  .info {
    flex-direction: column;

    div {
      padding: 0 10px 0 10px;

      &:hover {
        color: ${colors.blueshock};
        cursor: pointer;
        transition: 1s;
      }
    }
  }
`;

export const ServiceContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 100px;

  @media screen and (max-width: 1300px) {
    margin-top: 100px;
    margin-left: 0;
    text-align: center;
  }
`;

export const ContentInfo = styled.div`
  display: flex;
  flex-direction: row;

  h4 {
    color: ${colors.black};
  }

  button {
    margin-top: 100px;
    color: ${colors.black};
    background: transparent;
    padding: 0px 10px 0px 10px;
    border: 2px solid ${colors.black};
    display: flex;
    align-items: center;

    div {
      width: 2px;
      height: 40px;
      margin: 0px 10px 0px 40px;
      background-color: ${colors.black};
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

  img {
    height: 200px;
    margin: 40px 0px 0px 30px;
  }

  @media screen and (max-width: 1300px) {
    flex-direction: column;
    align-items: center;

    img {
      margin-top: 40px;
      width: 300px;
      height: 200px;
    }
  }
`;

export const ContentInfoDescription = styled.div`
  max-width: 550px;

  @media screen and (max-width: 1300px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

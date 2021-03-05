import styled from 'styled-components';

import * as colors from '../../styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 160px 0px 160px;
  font-weight: lighter;

  h1 {
    color: ${colors.blueDark};
  }
`;

export const Services = styled.div`
  display: flex;
  margin-top: 70px;
`;

export const ServiceOptions = styled.div`
  display: flex;
  flex-direction: column;
  animation: ease-in-out 1s;

  div {
    animation: ease-in-out 1s;
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
    animation: ease-in-out 1s;
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
`;

export const ContentInfo = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 40px;

  h4 {
    color: ${colors.black};
    text-transform: uppercase;
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
  }
`;

export const ContentInfoDescription = styled.div``;

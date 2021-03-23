import styled from 'styled-components';

import * as colors from '../../styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: ${colors.grey};
  width: 100%;
  height: 500px;
  padding: 0px 160px 0px 160px;
  justify-content: space-between;

  @media screen and (max-width: 1300px) {
    padding: 0px 10px 0px 10px;
    height: 700px;
  }
`;

export const FooterInfo = styled.div`
  display: flex;
  flex: row;
  margin-top: 30px;
  justify-content: space-between;

  @media screen and (max-width: 1300px) {
    flex-direction: column;
    text-align: center;
    align-items: center;
  }
`;

export const FooterInfoSection = styled.div`
  display: flex;
  flex-direction: column;
  left: 0;

  h4 {
    margin-bottom: 10px;
    color: ${colors.white};
    font-weight: lighter;
    font-size: 15px;
  }

  @media screen and (max-width: 1300px) {
    margin-bottom: 10px;
    h4 {
      font-size: 12px;
    }
  }
`;

export const FooterMidle = styled.div`
  display: flex;
  flex-direction: column;
  left: 0;
  align-items: center;

  svg {
    margin-right: 10px;
  }
  h4 {
    margin-bottom: 10px;
    color: ${colors.white};
    font-size: 15px;
    font-weight: bold;
  }

  div {
    display: flex;
    justify-content: center;
  }

  img {
    width: 150px;
  }

  @media screen and (max-width: 1300px) {
    margin: 20px 0px 50px 0px;
    h4 {
      font-size: 12px;
    }
  }
`;

export const FooterEnd = styled.div`
  text-align: center;
  margin-bottom: 30px;

  a {
    color: ${colors.white};
  }

  h4 {
    color: ${colors.white};
    font-weight: lighter;
    font-size: 15px;
  }

  @media screen and (max-width: 1300px) {
    h4 {
      font-size: 10px;
    }
  }
`;

import styled from 'styled-components';

import * as colors from '../../styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 160px 0px 160px;
  margin-bottom: 200px;
  margin-top: 40px;
  height: 100%;

  @media screen and (max-width: 1300px) {
    flex-direction: column;
    padding: 0px 10px 0px 10px;
    align-items: start;
  }
`;

export const Header = styled.div`
  margin-bottom: 40px;

  h1 {
    font-size: 33px;
    color: #73849b;
    text-transform: uppercase;
    font-weight: 700;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;

  .mapImg {
    border-radius: 10px;
    cursor: pointer;
    width: 500px;
  }

  @media screen and (max-width: 1300px) {
    flex-direction: column;
    align-items: center;

    .mapImg {
      width: 300px;
    }
  }
`;

export const WrapperText = styled.div`
  display: flex;
  flex-direction: column;
  color: ${colors.black};
  width: 50%;

  @media screen and (max-width: 1300px) {
    margin-bottom: 100px;
    width: 100%;
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  h4 {
    font-size: 15px;
    margin: 0;
  }
`;

export const Subtitle = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CardInfo = styled.div`
  display: flex;
  text-align: center;
  border-radius: 10px;
  background: ${colors.white};
  padding: 40px;
  height: 100%;
  align-items: center;
`;

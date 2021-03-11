import styled from 'styled-components';
import * as colors from '../../styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0px 160px 0px 160px;

  @media screen and (max-width: 1300px) {
    padding: 0;
    margin: 0;
  }
`;

export const DescriptionSection = styled.div`
  display: flex;
  margin-top: 30px;
  margin-bottom: 30px;
  align-items: center;

  img {
    height: 200px;
    margin-right: 30px;
  }

  h4 {
    color: ${colors.black};
    font-weight: lighter;
    font-size: 16px;
  }

  @media screen and (max-width: 1300px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-bottom: 100px;

    img {
      width: 200px;
      height: 200px;
      padding: 0;
      margin: 0;
    }

    h4 {
      font-size: 15px;
    }
  }
`;

export const ImgSection = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 30px;

  img {
    width: 100%;
    height: 300px;
    border-radius: 10px;
    margin-right: 20px;
  }

  @media screen and (max-width: 1300px) {
    display: inline-block;
    text-align: center;

    img {
      width: 200px;
      height: 200px;
      margin: 10px;
      padding: 0;
    }
  }
`;

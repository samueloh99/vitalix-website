import styled from 'styled-components';

import * as colors from '../../../styles/colors';

export const Container = styled.div`
  display: none;

  @media screen and (max-width: 1300px) {
    display: flex;
    flex-direction: column;
    padding: 0px 10px 0px 10px;

    h1 {
      font-size: 30px;
      color: ${colors.grey};
      margin-bottom: 40px;
    }
  }
`;

export const ServiceOptions = styled.div`
  display: none;

  @media screen and (max-width: 1300px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;

export const ServicesTitle = styled.div`
  display: none;

  @media screen and (max-width: 1300px) {
    display: flex;
    background: ${colors.blueDark};
    border-radius: 5px;
    width: 100%;
    height: auto;
    align-items: center;
    justify-content: center;
    padding: 10px;
    position: relative;
    cursor: pointer;
    margin: 0px 0px 20px 0px;
    text-align: center;

    h1 {
      font-size: 15px;
      color: ${colors.white};
      margin: 0;
    }

    svg {
      position: absolute;
      right: 8px;
    }
  }
`;

import styled from 'styled-components';

import * as colors from '../../styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 160px 0px 160px;
  margin: 200px 0px 200px 0px;

  h1 {
    font-size: 30px;
    color: ${colors.grey};
    margin-bottom: 70px;
  }

  img {
    width: 100%;
    height: 100%;
    padding: 40px;
  }

  .slick-slide .slick-active .slick-current {
    background: red;
  }

  .prevArrow {
    position: absolute;
    top: 50%;
    left: 0;
    z-index: 100;
    cursor: pointer;
  }

  .nextArrow {
    position: absolute;
    top: 50%;
    right: 0;
    z-index: 100;
    cursor: pointer;
  }

  @media screen and (max-width: 1300px) {
    padding: 0px 10px 0px 10px;
  }
`;

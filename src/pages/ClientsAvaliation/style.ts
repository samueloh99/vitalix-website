import styled from 'styled-components';

import * as colors from '../../styles/colors';

export const Container = styled.div`
  padding: 40px 160px 0px 160px;
  margin: 200px 0px 0px 0px;
  width: 100%;
  height: 90vh;
  background: white;

  > h1 {
    color: ${colors.blueshock};
    font-size: 36px;
    margin-bottom: 50px;
    text-transform: uppercase;
  }

  .slick-slide {
    padding: 20px;
    transition: all 0.2s ease-in-out;
    height: 300px;
    cursor: pointer;

    &:hover {
      transform: scale(1.1);
    }
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
    padding: 40px 10px 0px 10px;

    .slick-slide {
      margin-bottom: 20px;
      height: 300px;
    }

    .slick-prev {
      left: 0;
    }
    .slick-next {
      right: 0;
    }
  }
`;

export const MainCard = styled.div`
  padding: 0px 20px 0px 20px;
  cursor: pointer;

  h1 {
    font-size: 20px;
    color: ${colors.black};
  }
  h4 {
    color: ${colors.black};
    font-size: 15px;
    margin-top: 10px;
  }
`;

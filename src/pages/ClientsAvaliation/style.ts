import styled from 'styled-components';

import * as colors from '../../styles/colors';

export const Container = styled.div`
  padding: 0px 160px 0px 160px;
  margin: 200px 0px 100px 0px;
  width: 100%;

  > h1 {
    color: ${colors.grey};
    font-size: 30px;
    margin-bottom: 100px;
  }

  .slick-slide {
    padding: 20px;
  }

  @media screen and (max-width: 1300px) {
    padding: 0px 10px 0px 10px;

    .slick-slide {
      margin-bottom: 20px;
    }

    .slick-prev {
      left: 0;
    }
    .slick-next {
      right: 0;
    }
  }
`;

export const Card = styled.div`
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

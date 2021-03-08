import styled from 'styled-components';

import * as colors from '../../styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 160px 0px 160px;
  margin-top: 250px;
  margin-bottom: 100px;

  h1 {
    color: ${colors.blueDark};
  }

  .carouselContainer {
    margin-top: 100px;

    button.rec-dot {
      background-color: black;
    }

    .eHuHp {
      box-shadow: 0 0 1px 3px rgba(162, 181, 205, 10);
    }

    button.rec-dot:hover,
    button.rec-dot:active,
    button.rec-dot:focus {
      box-shadow: 0 0 1px 3px ${colors.blueshock};
    }

    .gQJlrl {
      background: transparent;
    }

    .cFfBuL {
      background: transparent;
    }
  }

  @media screen and (max-width: 1300px) {
    padding: 0px 10px 0px 10px;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  height: 250px;
  width: 100%;
  background-color: transparent;
  color: ${colors.black};
  margin: 0 15px;
  font-size: 4em;
  padding: 30px;

  h4 {
    font-size: 20px;
  }
`;

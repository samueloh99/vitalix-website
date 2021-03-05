import styled from 'styled-components';

import * as colors from '../../styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 160px 0px 160px;
  margin-top: 70px;
  margin-bottom: 100px;

  h1 {
    color: ${colors.blueDark};
  }
`;

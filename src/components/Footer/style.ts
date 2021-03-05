import styled from 'styled-components';

import * as colors from '../../styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: ${colors.grey};
  width: 100%;
  height: 300px;
  padding: 0px 160px 0px 160px;
  justify-content: space-between;
`;

export const FooterInfo = styled.div`
  display: flex;
  flex: row;
  margin-top: 30px;
  justify-content: space-between;
  align-items: center;

  img {
    height: 150px;
    right: auto;
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
`;

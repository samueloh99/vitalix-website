import styled from 'styled-components';

export const Container = styled.div`
  box-sizing: border-box;
  padding: 0px 160px 0px 160px;
  text-align: center;

  h1 {
    font-size: 33px;
    color: #73849b;
  }

  @media screen and (max-width: 1300px) {
    padding: 100px 10px 0px 10px;
  }
`;

export const Title = styled.div`
  display: flex;
  margin-bottom: 70px;
`;

export const Card = styled.div`
  position: relative;
  display: inline-flex;
  flex-direction: column;
  background: white;
  border-radius: 10px;
  padding: 20px;
  margin: 70px 10px 10px 10px;
  width: 30%;
  height: 500px;

  h1,
  h4 {
    color: black;
  }

  h1 {
    font-size: 20px;
    height: 80px;
    margin-top: 50px;
  }

  h4 {
    font-size: 15px;
    font-weight: 200;
  }

  img {
    width: 100px;
    border-radius: 50%;
    position: absolute;
    top: -55px;
    left: 120px;
  }

  @media screen and (max-width: 1300px) {
    width: 80%;
    text-align: center;
    margin: 70px 0px 10px 0px;
  }
`;

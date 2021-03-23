import styled from 'styled-components';
import * as colors from '../../styles/colors';

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
`;

export const ModalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  cursor: pointer;
  z-index: 1001;
`;

export const ModalBox = styled.div`
  display: flex;
  position: relative;
  width: 80%;
  height: 100%;
  margin: 0 10%;
  padding: 0px 10px 0px 10px;
  border-radius: 10px;
  background: #e6e7e9;
  cursor: auto;
  z-index: 1002;
  justify-content: center;
`;

export const ModalCloseBtn = styled.div`
  display: flex;
  position: absolute;
  top: 10px;
  right: 10px;
`;

export const ModalTitle = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  padding: 40px 10px 40px 10px;
  align-items: center;
  text-align: center;

  img {
    width: 200px;
    margin: 30px 0px 0px 0px;
  }

  h1 {
    color: ${colors.blueDark};
    font-size: 20px;
    margin: 0px 0px 5px 0px;
  }

  h4 {
    color: ${colors.black};
    font-size: 10px;
    width: 200px;
  }

  button {
    background: none;
    border: none;
    margin-top: 50px;
  }
`;

export const ModalServiceContent = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  padding: 20px;
  width: 90%;
  margin: 10px 0px 40px 0px;
  background: white;
  text-align: center;
  align-items: center;

  h1 {
    color: ${colors.blueDark};
    font-size: 15px;
    margin: 0px 0px 5px 0px;
    height: 40px;
  }

  h4 {
    color: ${colors.black};
    font-size: 10px;
    width: 200px;
  }

  img {
    width: 200px;
    margin: 30px 0px 0px 0px;
  }
`;

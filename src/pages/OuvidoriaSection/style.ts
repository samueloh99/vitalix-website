import styled from 'styled-components';
import * as colors from '../../styles/colors';

export const Container = styled.div`
  height: 80vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0px 160px 0px 160px;
  margin-bottom: 100px;

  form {
    justify-content: start;
    width: 300px;

    label {
      color: ${colors.black};
    }

    input {
      margin-bottom: 30px;
      width: 250px;
      padding: 5px;
    }

    textarea {
      margin-bottom: 30px;
    }

    #subject {
      width: 400px;
      height: 150px;
    }

    .buttonSend {
      border: none;
      background: ${colors.blueshock};
      width: 200px;
      height: 40px;
      color: ${colors.white};
      cursor: pointer;
      text-align: center;
      transition: 0.5s ease-out;

      &:hover {
        background: ${colors.blueDark};
      }
    }

    display: flex;
    flex-direction: column;
  }

  div {
    h4 {
      color: ${colors.black};
      margin-bottom: 10px;
    }
    svg {
      margin: 10px 10px 0px 0px;
    }
  }

  img {
    border-radius: 10px;
    cursor: pointer;
  }
`;

// export const Container = styled.div`
//   display: flex;
//   height: 200px;
//   background: ${colors.blueshock};
//   justify-content: center;
//   align-items: center;

//   h1 {
//     font-weight: lighter;
//     display: flex;
//     flex-direction: row;

//     p {
//       font-weight: bold;
//       margin-left: 10px;
//     }
//   }

//   .buttonCustomized {
//     color: ${colors.white};
//     margin-left: 80px;
//     background: transparent;
//     padding: 0px 10px 0px 10px;
//     border: 2px solid ${colors.white};
//     display: flex;
//     align-items: center;

//     div {
//       width: 2px;
//       height: 40px;
//       margin: 0px 10px 0px 10px;
//       background-color: ${colors.white};
//     }

//     &:hover {
//       border: 2px solid ${colors.blueDark};
//       background-color: ${colors.blueDark};
//       transition: 0.3s;
//       div {
//         background-color: ${colors.blueDark};
//         transition: 0.3s;
//       }
//     }
//   }

//   @media screen and (max-width: 1300px) {
//     flex-direction: column;
//     text-align: center;

//     h1 {
//       flex-direction: column;
//       font-size: 25px;
//     }

//     .buttonCustomized {
//       margin: 30px 0px 0px 0px;
//     }
//   }
// `;

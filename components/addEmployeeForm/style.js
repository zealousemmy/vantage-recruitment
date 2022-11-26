import styled from "styled-components";

export const FormContainer = styled.div`
  background: ${({ theme }) => theme.body};
  width: 45%;
  margin: auto;
  display: flex;
  justify-content: center;
  height: 92vh;
  .overall {
    width: 90%;
    margin: 1rem 0;
    position: relative;
    .topTitle {
      display: flex;
      .closeBtn {
        /* background-color: black; */
        padding: 5px;
        position: absolute;
        right: 0;
        border: none;
        background-color: transparent;
        font-size: 15px;
        cursor: pointer;
        color: ${({ theme }) => theme.text};
      }
    }
    h1 {
      font-style: normal;
      font-weight: 500;
      font-size: 24px;
      line-height: 30px;
    }
    .addEmployeeBtn {
      position: absolute;
      right: 1rem;
      bottom: 1rem;
      background: #0d99ff;
      color: #ffffff;
      padding: 10px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
  }
  .inputContainer {
    display: flex;
    flex-direction: column;
    margin: 1rem 0;
    label {
      margin: 0.5rem 0;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      font-family: "Roboto";
    }
    input {
      width: 80%;
      padding: 10px;
    }
  }
`;

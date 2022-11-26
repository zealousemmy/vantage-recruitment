import styled from "styled-components";

export const StyledDashBoard = styled.div`
  /* display: flex; */

  padding: 10px;
  flex-wrap: wrap;
  .heading {
    display: flex;
    justify-content: space-between;
    margin: 1rem 0 2rem 0;
  }
  .left {
    display: flex;
    align-items: center;
    width: 60%;
    justify-content: space-between;
    .tab {
      button {
        padding: 15px 20px;
        margin-right: 1rem;
        border: none;
        background-color: ${({ theme }) => theme.sidebar};
        border-radius: 10px;
      }
    }
    input {
      padding: 10px;
      width: 50%;
      outline: none;
      border: none;
      background-color: #f1f5f9;
      border-radius: 2px;
    }
  }
  .right {
    width: 20%;
    text-align: right;
    .bar {
      padding: 8px 10px;
      border: none;
      @media (max-width: 700px) {
        padding: 5px;
      }
    }
    .view {
      padding: 8px 10px;
      margin-left: 0.7rem;
      border: none;
      background-color: ${({ theme }) => theme.bgButton};
      color: ${({ theme }) => theme.body};
      @media (max-width: 700px) {
        padding: 5px;
      }
    }
  }
  .views {
    width: 100%;
    /* .viewOne {
      display: ${({ show }) => (show === false ? "none" : "block")};
    } */
    .viewTwo {
      display: ${({ show }) => (show === false ? "none" : "block")};
    }
  }
`;
export const ViewOne = styled.div`
  display: ${({ show }) => (show === false ? "block" : "none")};
`;
export const ViewTwo = styled.div`
  display: ${({ show }) => (show === false ? "none" : "block")};
`;

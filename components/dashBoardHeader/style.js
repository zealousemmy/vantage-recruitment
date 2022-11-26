import styled from "styled-components";

export const StyledDashBoard = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  .left {
    h4 {
      @media (max-width: 700px) {
        font-size: 14px;
      }
    }
    p {
      @media (max-width: 700px) {
        font-size: 10px;
      }
    }
  }
  .right {
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
`;

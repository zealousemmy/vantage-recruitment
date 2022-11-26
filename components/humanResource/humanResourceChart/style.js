import styled from "styled-components";

export const StyledChartContainer = styled.div`
  width: 25%;
  padding: 10px 0;
  box-shadow: ${({ theme }) => theme.boxShadow} 0px 1px 4px;
  .header {
    border-bottom: 1px solid ${({ theme }) => theme.sidebar};
    padding: 10px;
    p {
      font-size: 12px;
    }
    h2 {
      font-size: 24px;
    }
  }
  .project {
    margin-top: 2rem;
    .projectStatus {
      border-top: 1px solid ${({ theme }) => theme.sidebar};
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      margin-top: 1rem;
      .card {
        background-color: ${({ theme }) => theme.sidebar};
        width: 45%;
        padding: 20px 10px;
        text-align: center;
        margin: 1rem 0;
        color: ${({ theme }) => theme.sidebarColor};
        h4 {
          font-size: 12px;
        }
        p {
          margin-top: 1.5rem;
        }
      }
    }
  }
`;

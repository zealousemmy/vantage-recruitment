import styled from "styled-components";

export const ActivityContainer = styled.div`
  width: ${({ width }) => (width ? width : "55%")};
  background: ${({ theme }) => theme.body};
  margin-top: 3rem;
  box-shadow: ${({ theme }) => theme.boxShadow} 0px 1px 4px;
  border-radius: 10px;
  padding: 20px;
  @media (max-width: 700px) {
    width: 100%;
  }
  .heading {
    display: flex;
    justify-content: space-between;
  }
  .headerTitle {
    background: ${({ theme }) => theme.sidebar};
    color: ${({ theme }) => theme.sidebarColor};

    padding: 10px;
    text-transform: uppercase;
    display: flex;
    justify-content: space-between;
    h2 {
      font-size: 14px;
      text-align: left;
      width: 40%;
    }
  }
  .activity {
    margin-top: 0.3rem;
  }
  .activityLog {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    /* background-color: red; */
    border-bottom: 1px solid ${({ theme }) => theme.sidebar};
    .user {
      display: flex;
      align-items: center;
      p {
        margin-left: 0.4rem;
        font-size: 14px;
      }
    }
    .mail {
      font-size: 14px;
    }
  }
`;

import styled from "styled-components";

export const StyledNav = styled.div`
  position: fixed;
  width: 85%;
  display: flex;
  align-items: center;
  right: 0;
  background-color: ${({ theme }) => theme.sidebar};
  color: ${({ theme }) => theme.sidebarColor};
  padding: 10px;
  justify-content: space-between;
  z-index: 7;
  @media (max-width: 900px) {
    width: 100%;
    display: flex;
    /* justify-content: right; */
  }
  .rightContent {
    display: flex;
    width: 30%;
    justify-content: space-between;
    .mode {
      background-color: transparent;
      border: none;
      font-size: 20px;
      color: ${({ theme }) => theme.sidebarColor};
    }
    .user {
      display: flex;
      width: 80%;
      align-items: center;
      .search {
        margin: 0 1rem;
        border: none;
        background-color: transparent;
        font-size: 15px;
        color: ${({ theme }) => theme.sidebarColor};
      }
      .notification {
        border: none;
        font-size: 25px;
        background-color: transparent;
        padding: 1px 0;
        color: ${({ theme }) => theme.sidebarColor};
      }
      p {
        font-size: 14px;
        font-weight: 400;
      }
      .userImage {
        height: 30px;
        width: 12%;
        margin: 0 1rem;
        img {
          width: 100%;
          height: inherit;
        }
      }
    }
  }
  .displayButton {
    display: none;
    @media (max-width: 900px) {
      display: block;
      border: none;
      background-color: transparent;
      font-size: 24px;
    }
  }
`;

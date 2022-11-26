import styled from "styled-components";

export const StyledSideBar = styled.div`
  position: fixed;
  width: 15%;
  background-color: ${({ theme }) => theme.sidebar};
  color: ${({ theme }) => theme.sidebarColor};
  height: 100vh;
  z-index: 9;
  .logOutContainer {
    width: 100%;
    text-align: center;
  }
  .logOut {
    padding: 10px;
    width: 70%;
    margin: 0 auto;
    background: #2d2e4d;
    border: none;
    color: #c7fdf5;
    border-radius: 5px;
  }
  .logo {
    width: 100%;
    text-align: center;
    padding: 16px 10px;
    background-color: ${({ theme }) => theme.logo};
  }
  .sideBarContainer {
    display: flex;
    justify-content: space-between;
    padding: 5px 10px;
    .dashBoardHeading {
      display: flex;
      align-items: center;
      width: 100%;
      justify-content: left;
      margin-top: 2rem;
      .icon {
        font-size: 25px;
      }
      h2 {
        font-size: 18px;
        width: 60%;
        margin-left: 0.4rem;
      }
    }
  }
  .cancelBtn {
    display: none;
    @media (max-width: 900px) {
      display: block;
    }
  }
  @media (max-width: 900px) {
    /* display: ${(displayItem) =>
      displayItem !== true ? "none" : "block"}; */
    left: ${({ close }) => (close ? "0" : "-100%")};
    transition: 0.7s;
    width: 60%;
    z-index: 9;
  }
  .navLinks {
    display: flex;
    flex-direction: column;
    padding: 5px 15px;
    margin: 1rem 0;
    li {
      list-style: none;
      margin: 1rem 0;
      width: 100%;
      a {
        font-weight: 500;
        font-size: 18px;
      }
      .link {
        font-weight: 400;
        font-size: 16px;
        display: flex;
        align-items: center;
        padding: 10px;
        color: ${({ theme }) => theme.text};
        .linkIcon {
          color: ${({ theme }) => theme.text};
        }
        p {
          margin-left: 0.6rem;
        }
      }
      .navText {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        border: none;
        padding: 10px;
        background-color: transparent;
        color: ${({ theme }) => theme.text};
        /* font-size: 18px; */
        .iconText {
          width: 90%;
          font-size: 16px;
          display: flex;
          align-items: center;
          justify-content: left;
          p {
            margin-left: 0.7rem;
            font-size: 15px;
          }
        }
      }
    }
  }
`;
export const IconDisplay = styled.div`
  display: ${({ show }) => (show === true ? "flex" : "none")} !important;
`;
export const IconDown = styled.div`
  display: ${({ show }) => (show === false ? "flex" : "none")} !important;
`;
export const Dropdown = styled.div`
  display: ${({ show }) => (show === false ? "flex" : "none")} !important;
  flex-direction: column !important;
  padding: 5px 10px;
  color: ${({ theme }) => theme.text};
  a {
    font-weight: normal !important;
    font-size: 14px !important;
    margin: 0.4rem 0 !important;
  }
`;

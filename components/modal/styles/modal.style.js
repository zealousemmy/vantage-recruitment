import styled from "styled-components";

export const ModalOverlay = styled.div`
  width: 100%;
  /* background-color: rgba(255, 255, 255, 0.548); */
  background-color: rgba(0, 0, 0, 0.39);
  height: 100vh;
  position: fixed;
  z-index: 24;
  top: 0;
  left: 0;
  display: ${({ show }) => (show === false ? "none" : "flex")};
  justify-content: center;
  align-items: center;
  .modalContent {
    width: inherit;
  }
`;

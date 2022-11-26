import styled from "styled-components";

export const StyledMessageContainer = styled.div`
  width: ${({ width }) => (width ? width : "25%")};
  box-shadow: ${({ theme }) => theme.boxShadow} 0px 1px 4px;
  border-radius: 10px;
  height: inherit;
  padding: 10px 0;
  @media (max-width: 700px) {
    width: 100%;
    margin-top: 1.5rem;
  }
  .headerText {
    padding: 10px 20px;
  }
`;
export const StyledMessageCard = styled.div`
  /* background-color: red; */
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.boxShadow};
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
  /* border-radius: 6px; */
  margin: 1rem 0;
  .profileImage {
    width: 15%;
    img {
      width: 100%;
    }
  }
  .width-80 {
    width: 80%;
  }
  .nameTimeContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    h5 {
      font-weight: 500;
      font-size: 14px;
    }
    p {
      font-size: 10px;
    }
  }
  .message {
    font-size: 12px;
  }
`;

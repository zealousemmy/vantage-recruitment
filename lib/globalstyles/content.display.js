import styled from "styled-components";

export const DataDisplay = styled.div`
  position: absolute;
  background: ${({ theme }) => theme.body};
  width: 85%;
  right: 0;
  top: 2.4rem;
  padding: 40px;
  .flex {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .container {
      width: 70%;
      @media (max-width: 700px) {
        width: 100%;
      }
    }
  }
  @media (max-width: 900px) {
    width: 100%;
  }
  .businessHeading {
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    text-transform: capitalize;
  }
  .bizText {
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    font-family: "Merriweather", serif;
  }
`;

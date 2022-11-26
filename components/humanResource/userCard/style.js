import styled from "styled-components";

export const StyledUserCard = styled.div`
  width: ${({ width }) => (width ? width : "70%")};
  display: flex;
  flex-wrap: wrap;
  .card {
    width: ${({ width }) => (width ? width : "30%")};
    box-shadow: ${({ theme }) => theme.boxShadow} 0px 1px 4px;
    padding: 0;
    padding-top: 15px;
    border-radius: 5px;
    text-align: center;
    margin: 1rem 0.5rem;
    .image {
      width: 35%;
      height: 100px;
      margin: 0 auto;
      img {
        width: 100%;
        height: inherit;
      }
    }
    .name {
      font-weight: 550;
      font-size: 15px;
      margin-top: 0.5rem;
    }
    .mail {
      font-size: 12px;
    }
    .status {
      font-size: 16px;
      margin-top: 2rem;
      margin-bottom: 0.5rem;
    }
    .jobTitle {
      border-top: 2px solid ${({ theme }) => theme.sidebar};
      padding: 10px;
      font-weight: 400;
      font-size: 16px;
    }
  }
`;

import styled from "styled-components";

export const StyledCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 1rem 0;
  width: ${({ width }) => (width ? width : "100%")};
  @media (max-width: 700px) {
    width: 95%;
    justify-content: center;
    /* background-color: red; */
    margin: 0.5rem auto;
  }
`;
export const StyledCard = styled.div`
  width: ${({ width }) => (width ? width : "30%")};
  box-shadow: ${({ theme }) => theme.boxShadow} 0px 1px 4px;
  padding: 20px 15px;
  text-align: center;
  border-radius: 10px;
  height: 18vh;
  @media (max-width: 700px) {
    width: 100%;
    margin: 0.5rem 0;
  }
  h4 {
    margin: 0.6rem 0;
  }
  .employeesNum {
    display: flex;
    /* width: 22%; */
    margin: auto;
    justify-content: center;
    align-items: center;
    .iconContainer {
      background-color: rgba(13, 153, 255, 0.2);
      padding: 8px 10px;
      border-radius: 15px;
      margin-right: 0.4rem;
    }
  }
`;

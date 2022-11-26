import styled from "styled-components";

export const StyledChart = styled.div`
  box-shadow: ${({ theme }) => theme.boxShadow} 0px 1px 4px;
  padding: 20px;
  margin-top: 2rem;
  border-radius: 10px;
  @media (max-width: 700px) {
    width: 100%;
    height: 40vh;
  }
`;

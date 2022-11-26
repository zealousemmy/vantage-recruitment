import styled from "styled-components";

export const StyledTable = styled.div`
  width: 100%;
  margin: 1rem 0;
  .headingRole {
    display: flex;
    background-color: #1e6ce1;
    padding: 10px;
    h4 {
      width: 20%;
      color: #fefefe;
    }
  }
  .dataRole {
    display: flex;
    align-items: center;
    input{
      margin-right:0.5rem;
    }
    p {
      width: 20%;
      font-weight: 400;
      font-size: 16px;
      font-family: "Merriweather", serif;
    }
  }
  .dataRole {
    padding: 20px 10px;
    border: 1px solid #fafafa;
    margin: 1rem 0;
  }
  .seeAll {
    padding: 10px;
    position: absolute;
    right: 3rem;
  }
`;

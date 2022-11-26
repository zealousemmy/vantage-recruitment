import styled from "styled-components";

export const StyledTable = styled.div`
  width: 100%;
  margin: 1rem 0;
  width: 100%;
  .headingRole {
    display: flex;
    background: #1e6ce1;
    padding: 10px;
    color: #fefefe;
    h2 {
      font-weight: 400;
      font-size: 16px;
      width: 20%;
    }
    .fName {
      width: 30%;
    }
    /* justify-content: space-between; */
  }
  .dataRole {
    width: 100%;
    border: 1px solid #fafafa;
    .profileImage {
      width: 4%;
      height: 40px;
      padding-left: 3px;
      margin-right: 1rem;
      img {
        width: 100%;
        height: inherit;
      }
    }
    p {
      width: 20%;
    }
    .fulName {
      width: 300px;
    }
  }
  .dataRole {
    display: flex;
    width: 100%;
    position: relative;
    align-items: center;
    padding: 15px 0;
    margin: 0.5rem 0;
    button {
      width: 30px;
      position: absolute;
      right: 1rem;
      top: 1px;
      bottom: 1px;
      padding: 5px;
      height: 30px;
      margin: auto;
    }
  }

  .seeAll {
    padding: 10px;
    position: absolute;
    right: 3rem;
  }
`;

import styled from "styled-components";

export const TemplatesContainer = styled.div`
  .flex {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .template {
    padding: 30px 10px;
    border: 1px solid ${({ theme }) => theme.border};
    width: 22%;
    text-align: center;
    margin: 1.5rem 0;
    .icon {
      font-size: 90px;
    }
    h2 {
      font-weight: 400;
      font-size: 26px;
    }
  }
`;

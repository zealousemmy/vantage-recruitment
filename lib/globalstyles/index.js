import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding:0;
        box-sizing: border-box;
    }
    body{
        background: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text};
        transition: all 0.50s linear;
        position:relative;
        /* font-family: 'Inter', sans-serif; */
        /* font-family: 'Nunito', sans-serif; */
        /* font-family: 'Nunito Sans', sans-serif; */
        font-family: 'Public Sans', sans-serif;
    }
`;

import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        list-style: none;
        outline: none;
    }

    body{
        background: ${({ theme }) => theme.COLORS.WHITE_100};
        color: ${({ theme }) => theme.COLORS.BLACK_300};
        font-family: 'Poppins', sans-serif;
        -webkit-font-smoothing: antialiased;
    }

    button, a{
        cursor: pointer;
        transition: filter 0.2s;
    }

    button:hover, a:hover{
        filter: brightness(0.9)
    }

`;

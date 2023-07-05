import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        list-style: none;
        outline: none;
        scroll-behavior:smooth;
    }

    body{
        background: ${({ theme }) => theme.COLORS.WHITE_100};
        color: ${({ theme }) => theme.COLORS.BLACK_300};
        font-family: 'Poppins', sans-serif;
        -webkit-font-smoothing: antialiased;
        overflow-x: hidden;
    }

    button, a{
        cursor: pointer;
        transition: filter 0.2s;
    }

    button:hover, a:hover{
        filter: brightness(0.9)
    }

    html ::-webkit-scrollbar {
        width: 4px;
    }

    html ::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.COLORS.ORANGE};
    }
    
    html ::-webkit-scrollbar-track {
      background: ${({ theme }) => theme.COLORS.BLACK_300};
    }

`;

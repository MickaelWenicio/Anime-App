import { createGlobalStyle } from "styled-components";

const globalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body{
        background-color: #0E0E0E;
        display: flex;
        align-items: center;

    }

    p, span, h1, h2, h3, h4 {
        font-family: "Fira Sans", sans-serif;
        color: #ffffff;
    }

`

export default globalStyle
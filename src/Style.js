import { createGlobalStyle } from "styled-components";

const globalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    #root{
        width: 100%;
        height: 100%;
    }

    :root{
        --text-gray: #a8a8a8;
    }

    body{
        background-color: #0E0E0E;
        width: 100vw;
        height: 100vh;
        overflow-x: hidden;
    }

    p, span, h1, h2, h3, h4 {
        font-family: "Montserrat", sans-serif;
        color: #ffffff;
    }

`

export default globalStyle
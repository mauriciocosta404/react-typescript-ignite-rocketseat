import {createGlobalStyle} from 'styled-components';

const GlobalStyle=createGlobalStyle`
    *{
        font-family: 'Courier New', Courier, monospace;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline:none;
        border: none;
        transition: all .5s linear;
    }
    html{
        font-size: 62.5%;
        scroll-padding-top: 5.5rem;
        scroll-behavior: smooth;
    }
    body{
        display: flex;
        justify-content: center;
    }

`;

export default GlobalStyle;
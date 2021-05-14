import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
    }

    body{
        font-szie: 16px;
        font-family: serif;
    }

    h1{
        font-size: 2rem;
    }

    .screen-readers {
        position: absolute;
        left: -10000px;
        top: auto;
        width: 1px;
        height: 1px;
        overflow: hidden;
    }
`;

export default GlobalStyle;
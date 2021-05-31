import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
    }

    html{
        font-size: 16px;
        fonr-familiy: "Roboto", serif;
    }

    body{
        background-color: ${({ theme }) =>theme.basic.background};
        color: ${({ theme }) =>theme.basic.color};
    }

    h1{
        font-size: 1.5rem;
    }

    h2{
        font-size: 1.3rem;
    }

    .screen-readers {
        position: absolute;
        left: -10000px;
        top: auto;
        width: 1px;
        height: 1px;
        overflow: hidden;
    }

    @media (max-width: 640px){
        .hide{
            display: none;
        }
    }
`;

export default GlobalStyle;
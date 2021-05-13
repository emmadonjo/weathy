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
`;

export default GlobalStyle;
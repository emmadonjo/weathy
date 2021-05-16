import React from 'react';
import styled from 'styled-components';

import Nav from './Nav';

const  Head = styled.header`
    height: 100vh;
    position: fixed;
    display:flex;
    flex-direction: column;
    width: 200px;
    left: 0;
    top: 0;
    z-index: 1000;
    background-color: ${({ theme }) =>theme.main.background};
    display: none;

    @media (max-width: 640px){
        width: 30%;
    }

    @media (max-width: 320px){
        width: 140px;
    }
`;



const Header = props => {

    return(
        <>
            <Head>
                <h1>WEATHY</h1>          
                <Nav />
            </Head>
        </>
    )
}

export default Header;
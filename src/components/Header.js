import React, { useContext } from 'react';
import styled from 'styled-components';
import MenuContext from '../utilities/MenuContext';

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

    h1{
        padding: 20px 20px 10px 20px;
    }

    @media (max-width: 640px){
        width: 30%;
    }

    @media (max-width: 320px){
        width: 140px;
    }

    label{
        display: inline-block;
        height: 30px;
        width: 30px;
        border-radius: 50%;
        position: relative;
        margin-left: 25px;
        margin-top: 10px;
        border: 1px solid ${({ theme }) => theme.primary.color };
    }

    label span{
        position: absolute;
        border-radius: 50%;
        width: 15px;
        height: 15px;
        content: '';
        display: block;
        background-color: ${({ theme }) => theme.primary.color };
        top: 7.5px;
        left: 7.5px;
    }

    input {
        display: none;
    }

    input:checked + span{
        background: #fff;
    }
`;



const Header = props => {

    const {menu} = props;

    return(
        <>
        
            <Head>
                <h1>WEATHY</h1>          
                <Nav />
                <label title="Switch theme" >
                    <input type='checkbox' name='theme-switcher' id='themeSwitcher' />
                    <span class='theme-display' ></span>
                </label>
            </Head>
        
        </>
    )
}

export default Header;  
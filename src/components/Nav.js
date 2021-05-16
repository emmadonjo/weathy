import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {ReactComponent as SearchIcon} from '../icons/search.svg';

const Navigation = styled.nav`
    box-sizing: border-box;
    width: 100%;
    padding:10px  0;

    @media (max-width: 640px){
        .hide{
            display: none;
        }
    }

    ul li{
        list-style-type:none;
        padding: 0;
    }

    li a{
        text-decoration: none;
        display: inline-block;
        width:80%;
        padding: 5px 10%;
        color: ${({ theme }) => theme.abstract}
    }

    li a:hover{
        background-color: #f00;
        color: #000;

    }
`;

const Button = styled.button`
    border: none;
    background-color: inherit;
    color: ${({ theme }) => theme.abstract };
    display: flex-inline;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
    margin-left: 20px;
    margin-top: 20px;

    &:hover{
        opacity: .8;
        cursor: pointer;
    }
`;

const Nav = props =>{

    return(
        
        <Navigation >
            <ul>
                <li>
                    <Link to='/' title='Home'>
                        
                        Home
                    </Link>
                </li>
                <li>
                    <Link to='/search' title='Search'>
                        <SearchIcon /> Search
                    </Link>
                </li>
                <li>
                    <Link to='/locations' title='Locations'>Locations</Link>
                </li>
            </ul>
        </Navigation>
    )
};

export default Nav;
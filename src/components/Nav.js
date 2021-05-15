import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {ReactComponent as SearchIcon} from '../icons/search.svg';

const Navigation = styled.nav`
    box-sizing: border-box;
    width: 100%;
    padding:10px  0;

    ul li{
        list-style-type:none;
        padding: 0;
    }

    li a{
        text-decoration: none;
        display: inline-block;
        width:80%;
        padding: 5px 10%;
    }

    li a:hover{
        background-color: #f00;
        color: #fff;

    }
`;

const Nav = () =>{

    return(

        <Navigation>
            <ul>
                <li>
                    <Link to='/' title='Home'>
                        
                         Home
                    </Link>
                </li>
                <li>
                    <Link to='/search' title='Search'>
                        <SearchIcon />
                          Search
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
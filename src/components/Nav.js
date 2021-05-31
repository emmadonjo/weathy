import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {ReactComponent as SearchIcon} from '../icons/search.svg';
import {ReactComponent as HomeIcon} from '../icons/house-fill.svg';
import {ReactComponent as LocationIcon} from '../icons/geo-alt-fill.svg';

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

    li:active,
    .current,
    li a:hover{
        background-color: ${({ theme }) => theme.abstract};
        color: #000;

    }
`;

const Nav = props =>{

    let [path, setPath ] = useState('home');


    useEffect(()=>{
        // get pathname
        // remove trailing slash
        let pathname = window.location.pathname.replace('/', '');
        
        // get the path of the current url
        switch(pathname){

            case 'search':
                setPath('search');
                break;

            case 'locations':
                setPath('locations');
                break;
                
            default:
                setPath('home');
        }

    }, [path]);

    return(
        
        <Navigation >
            <ul>
                <li>
                    <Link to='/' title='Home' className={path==='home' ? 'current' : '' }>                        
                        <HomeIcon /> Home
                    </Link>
                </li>
                <li>
                    <Link to='/search' title='Search' className={path==='search' ? 'current' : '' }>
                        <SearchIcon /> Search
                    </Link>
                </li>
                <li>
                    <Link to='/locations' title='Locations' className={path==='locations' ? 'current' : '' }> 
                        <LocationIcon /> Locations
                    </Link>
                </li>
            </ul>
        </Navigation>
    )
};

export default Nav;
import React from 'react';
import {Link} from 'react-router-dom';

const Nav = () =>{

    return(

        <nav>
            <Link to='/' title='Home'>Home</Link>
            <Link to='/search' title='Search'>Search</Link>
            <Link to='/locations' title='Locations'>Locations</Link>
        </nav>
    )
};

export default Nav;
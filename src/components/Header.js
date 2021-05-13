import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Nav from './Nav';
import Home from '../pages/Home';
import Search from '../pages/Search';
import Locations from '../pages/Locations';


const Header = props => {

    return(
        <>
            <Router>
                <Nav />
                <Switch>
                    <Route exact path='/' component={Home} />
                </Switch>
                <Switch>
                    <Route exact path='/search' component={Search} />
                </Switch>
                <Switch>
                    <Route exact path='/locations' component={Locations} />
                </Switch>
            </Router>
        </>
    )
}

export default Header;
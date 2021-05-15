import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import GlobalStyle from './theme/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import useTheme from './theme/UseTheme';

import Home from './pages/Home';
import Search from './pages/Search';
import Locations from './pages/Locations';


const App = () => {
    const [theme, setTheme] = useTheme();


    return (
        <ThemeProvider theme = { theme }>
            <GlobalStyle />
            <Router>
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
        </ThemeProvider>
    )
}

export default App;
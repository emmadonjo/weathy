import React, { useEffect, useState } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import GlobalStyle from './theme/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import useTheme from './theme/UseTheme';

import Home from './pages/Home';
import Search from './pages/Search';
import Locations from './pages/Locations';
import MenuContext from './utilities/MenuContext';



const App = () => {
    const [theme, setTheme] = useTheme();
    const [menu, setMenu ] = useState();
    // const menu = useContext(MenuContext);
    
    
    useEffect(() =>{
        let showMenu = (window.innerWidth > 640 ? true : false);

        setMenu(showMenu);
    }, [menu]);


    return (
        <MenuContext.Provider value = {menu}>
            <ThemeProvider theme = { theme }>
                <GlobalStyle />

                <button>HI</button>
                <Router>
                    <Switch>
                        <Route exact path='/'>
                            <Home />
                        </Route>
                    </Switch>
                    <Switch>
                        <Route exact path='/search' component={Search} />
                    </Switch>
                    <Switch>
                        <Route exact path='/locations' component={Locations} />
                    </Switch>
                </Router>            
            </ThemeProvider>
        </MenuContext.Provider>
    )
}

export default App;
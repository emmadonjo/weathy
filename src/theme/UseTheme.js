import {useState, useEffect} from 'react';
import {setStorage, getStorage} from '../utilities/Storage';
import * as allThemes from '../theme/theme.json';

// custom hook to manage theme toggle and storage
const useTheme = () => {

    const [theme, setTheme] = useState(()=>{
        let localTheme = getStorage('themes');
        return localTheme || allThemes.data.dark;
    });

    useEffect(() => {

        // save current or selected theme on localStorage
        setStorage('themes', theme);
    }, [theme]);

    return [theme, setTheme];
};

export default useTheme;
import React, { useState, useEffect } from 'react';
import {ReactComponent as RainIcon} from '../icons/cloud-rain-fill.svg';
import {ReactComponent as CloudIcon} from '../icons/clouds-fill.svg';


const WeatherIcon = props => {

    let [icon, setIcon] = useState(props.icon);

    useEffect(() =>{

        switch(icon){
            case 'rain':
                setIcon('rain');
                break;
            
            default:
                setIcon('clouds');
        }

    }, [icon]);

    return (
        <>
            { 
                icon === 'rain'? <RainIcon /> : <CloudIcon />
            }
        </>
    );

};

export default WeatherIcon;
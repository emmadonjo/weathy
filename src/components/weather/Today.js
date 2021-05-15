import React from 'react';
import styled from 'styled-components';
import WeatherIcon from '../WeatherIcon';


const Div = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;

    @media(max-width:400px){
        flex-direction: column;
        justify-content: center;
        align-items: center;

        div{
            margin-top: 10px;
            text-align: center;
        }
    }

    .today-temp span{
        font-size: 2rem;
    }
`;


const Today = props => {

    let { city, time, temp, weather } = props;

    return (
        <Div>
            <div className='city'>
                <h4>{ city }</h4>
                <span className='date-stats-fetched'>
                    { time }
                </span>
            </div>
            <div className='today-temp'>
                <span>
                    { temp } <sup>0</sup>C
                </span>
            </div>
            <div className='icon'>
                <span> { weather[0].toUpperCase() + weather.substring(1) } </span>
                <br />
                <WeatherIcon data-testid='weather-icon' icon= {weather} />
            </div>
        </Div>
    )

};

export default Today;
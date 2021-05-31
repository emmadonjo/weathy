import React from 'react';
import styled from 'styled-components';
import WeatherIcon from '../WeatherIcon';


const Div = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 20px;
    background-color: ${({ theme }) => theme.main.background };
    margin-top: 20px;
    box-shadow: 0px 0px 3px #000;
    text-align: center;

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

    svg{
        height: 2.5rem;
        width: 2.5rem;
        color: ${({ theme }) => theme.abstract };
    }

    .icon{
        justify-content: center;
        align-items: center;
        display: flex;
        flex-direction: column;
    }

    button{
        background: ${({ theme }) => theme.abstract };
        border:none;
        padding: 10px;

        &:hover{
            opacity: .8;
        }
    }
`;


const Today = props => {

    let { city, time, temp, weather, handleSave } = props;
    let d = new Date(time * 1000 );

    return (
        <>
        Today
        <Div>
            <div className='city'>
                <h4>{ city }</h4>
                <span className='date-stats-fetched'>
                    { d.toDateString() }
                </span>
            </div>
            <div className='today-temp'>
                <span>
                    { temp } <sup>0</sup>c
                </span>
            </div>
            <div className='icon'>
                <span> { weather[0].toUpperCase() + weather.substring(1) } </span>
                <br />
                <WeatherIcon className='weather-icon' data-testid='weather-icon' icon= {weather} />
            </div>

            <button type="button" title="Save location" onClick = { handleSave }>
                Save
            </button>
        </Div>
        </>
    )

};

export default Today;
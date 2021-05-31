import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Title from '../components/Title';
import { getStorage } from '../utilities/Storage';
import { Link } from 'react-router-dom';

const Container = styled.div`
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

const Main = styled.main`
    margin-left: 200px;
    flex-basis: 100%;
    padding: 10px;
    position: relative;

    @media (max-width: 640px){
        margin-left: 0;
    }
`;

const CardsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    box-sizing: border-box;
    position: absolute;
    width: 100%;
`;


const Cards = styled.div`
    padding: 20px;
    background-color: ${({ theme }) => theme.primary.background };
    text-align: center;
    border-radius: 10px;
    box-shadow: 0 0 3px #000;
    flex-basis: 190px;
    margin: 15px auto;

    @media (min-width: 980px) and (max-width: 1200px){
        flex-basis: 23%;
    }

    @media (min-width: 640px) and (max-width: 980px){
        flex-basis: 35%;
    }

    @media (max-width: 640px){
        flex-basis: 40%;
    }

    @media (max-width: 420px){
        flex-basis: 80%;
    }

    span{
        font-size: 1.3rem;
        color: ${({ theme }) => theme.abstract };
        display: inline-block;
        margin-bottom: 10px;
    }

    a{
        background-color: ${({ theme }) => theme.abstract };
        color: #000;
        padding: 10px 5px;
        display: inline-block;
        margin-top: 10px;
        width: auto;
        text-decoration: none;
        border-radius:5px;

        &:hover{
            opacity: .8;
            cursor: pointer;
        }
    }
`;


const Home = props => {
    const [locations, setLocations] = useState({});


    useEffect(() =>{

        // get locations from localStorage
        let locs = getStorage('_weathy_locations_');

        if(locs) setLocations(locs);
    }, []);

    return(
        <Container>
            <Header />
            <Main>
                <Title title='Home' />
                <CardsWrapper>
                    <Cards>
                        <span>
                            {
                                Object.keys(locations).length
                            } Saved locations
                        </span> 
                        <p>
                            View and manage weather stats of saved locations
                        </p>
                        
                        <Link to='/locations' title='See saved locations'>
                            See saved locations
                        </Link>
                    </Cards>

                    <Cards>
                        <h4>
                            <span>Current Stats</span>
                        </h4>
                        <p>
                            Get <span>real-time</span> weather stats of any city and place including temperature, pressure, visibility, etc.
                        </p>
                        
                        <Link to='/search' title='See saved locations'>
                            Search
                        </Link>
                    </Cards>

                    <Cards>
                        <h4>
                            <span>Weather Forecasts</span>
                        </h4>
                        <p>
                            Access <span>7 days</span> weather forecasts for your preferred locations.
                        </p>
                        
                        <Link to='/search' title='See saved locations'>
                            Search
                        </Link>
                    </Cards>

                    <Cards>
                        <h4>
                            <span>Save City</span>
                        </h4>
                        <p>
                            Save weather stats of your favourite cities and places for quick offline reference any time and day.
                        </p>
                        
                        <Link to='/locations' title='See saved locations'>
                            See more...
                        </Link>
                    </Cards>
                </CardsWrapper>
                
            </Main>
            
        </Container>
    )
}

export default Home;
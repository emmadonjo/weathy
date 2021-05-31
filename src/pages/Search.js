import React, {useState} from 'react';
import SearchForm from '../components/SearchForm';
import Today from '../components/weather/Today';
import Header from '../components/Header';
import styled from 'styled-components';
import Title from '../components/Title';
import ForecastElement from '../components/weather/ForecastElement';
import Temperature from '../components/weather/Temperature';
import Wind from '../components/weather/Wind';
import Phv from '../components/weather/Phv';
import Loading from '../components/Loading';
import GeoData from '../services/WeatherApi';
import { saveLocation } from '../utilities/Storage';


const Container = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
`;

const Main = styled.main`
    margin-left: 200px;
    flex-basis: 100%;
    padding: 10px;

    .info{
        text-align: center;
        color: ${({ theme }) => theme.abstract};
    }

    @media (max-width: 640px){
        margin-left: 0;
    }

    .forecasts{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        flex-wrap: wrap;
        margin: 20px auto;
    }

    .forecasts h4{
        display: block;
        width: 100%;
    }

    .forecasts > div {
        margin: 10px;
        flex-basis: 10%;
        box-shadow: 0 0 5px #000;
    }

    .today-stats h4{
        display:block;
        width: 100%;
    }

    .today-stats{
        display:flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
    }

    .today-stats > div{
        box-shadow: 0 0  5px ${({ theme }) => theme.main.background };
        padding: 15px;
    }
`;

const Search = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const [error, setError ] = useState('');
    const [ data, setData ] = useState({});
    const [loading, setLoading] = useState(false);


    const handleSubmit = async e => {
        // prevent default submission
        e.preventDefault();

        if(searchTerm.trim().length === 0){
            setError('Please enter city name');
            setLoading(false);

            return;
        }

        setError(`Getting weather stats for ${searchTerm}...`);
        setLoading(true);

        try{
            let response = await GeoData(searchTerm);


            let data = await response.json();
            

            let res = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&exclude=minutely,hourly,alerts&units=metric&appid=${process.env.REACT_APP_API_KEY}`);


            let stats = await res.json();

            // log stats
            console.log(stats);
            
            // save results to data state
            setError('');
            setLoading(false);
            setData(stats);

        }catch(error){

            console.log(error);

            setError(`Could not get weather stats for ${searchTerm}`);
            setLoading(true);

            return;
        }
 
    };


    // saves a particular location to localStorage
    // @return void
    const handleSave = () =>{

        // data isn't set
        // do nothing
        if(!data){
            return;

        }

        // save location states
        saveLocation(data?.dt, searchTerm, data);
    };

    return(
        <Container>
            <Header />
            <Main>
                <Title title='Search' />
                <SearchForm
                searchTerm = { searchTerm }
                setSearchTerm = { setSearchTerm }
                handleSubmit = { handleSubmit }
                />

                {
                    error && <div className='info' role='alert'>
                        <small>{ error }</small>
                    </div>
                }
                { loading === true ? <Loading width = "200px" height = "30px" /> : 
                    <>

                    {data.hasOwnProperty('lat') && <>
                        <Today 
                            city ={ searchTerm }
                            time = { data.current.dt }
                            weather = { data.current.weather[0].main }
                            temp = { data.current.temp }
                            handleSave = { handleSave }
                        />

                        <div className="forecasts">
                            <h4>Daily Forecast</h4>
                            {
                                data.daily.map(day =><ForecastElement
                                        date = { day.dt }
                                        temp = { day.temp.day }
                                        weather = { day.weather[0].main }
                                        title = { day.weather[0].main }
                                        key = { day.dt }
                                    />)
                            }
                        </div>

                        <div className='today-stats'>
                            <h4 style={{ textAlign: 'center'}}>More Stats</h4>
                            <Temperature
                                min={ data.daily[0].temp.min }
                                max={ data.daily[0].temp.max }
                                temp={ data.current.temp }
                            />

                            <Wind 
                                windSpeed = { data.current.wind_speed }
                                windDeg = { data.current.wind_deg }
                            />  

                            <Phv 
                                pressure = { data.current.pressure }
                                humidity = { data.current.humidity }
                                visibility = { data.current.visibility }
                            />
                        </div>
                    </>
                    }
                    </>
                }
            </Main>
        </Container>
    )
}

export default Search;
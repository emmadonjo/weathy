import React, {useState} from 'react';
import SearchForm from '../components/SearchForm';
import Today from '../components/weather/Today';
import Header from '../components/Header';
import styled from 'styled-components';
import Title from '../components/Title';

const Container = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
`;

const Main = styled.main`
    margin-left: 200px;
    flex-basis: 100%;
    padding: 10px;

    @media (max-width: 640px){
        margin-left: 0;
    }
`;

const Search = () => {

    const [searchTerm, setSearchTerm] = useState('');

    const handleSubmit = () => {
        return;
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

                <Today 
                    city ='Lagos'
                    time = 'Fri May 14, 2021'
                    weather = 'rain'
                    temp = '25'
                />
            </Main>
        </Container>
    )
}

export default Search;
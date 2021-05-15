import React from 'react';
import styled from 'styled-components';
import {ReactComponent as SearchIcon} from '../icons/search.svg';

const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    box-sizing: border-box;
    margin-bottom: 40px;

    @media (min-width: 916px){
        width: 80%;
        margin: auto;
    }
    

    input{
       flex-basis: 95%;
       border: 1px solid red;
       border-radius: 5px 0 0 5px;
       padding: 0 15px;
    }

    input:focus{
        border: 1px solid red;
    }
`;

const Button = styled.button`
    border: 1px solid red;
    background-color: #f00;
    padding: 10px 15px;
    border-radius: 0 5px 5px 0;
    color: #000;
    font-weight: bold;

    &:hover{
        opacity: .5;
        cursor: pointer;
    }
`;

const SearchForm = ({searchTerm, setSearchTerm, handleSubmit }) => {

    return (
        <>
            <Form method='get'>
                <label className='screen-readers' htmlFor='search-field'>Search city</label>
                <input 
                    type='search' 
                    value={searchTerm} 
                    name='search' 
                    id='search-field' 
                    placeholder = 'Enter city to search'
                    pattern = '[a-zA-Z]'
                    title = 'Only texts are allowed'
                    onChange = {e=>{
                        setSearchTerm(e.target.value)}
                    }
                />

                <Button type='submit' onClick = { handleSubmit }>
                    <span className='screen-readers'>Search</span>
                    <SearchIcon />
                </Button>
            </Form>
        </>
    )
}

export default SearchForm;
import React from 'react';
import styled from 'styled-components';
import {ReactComponent as SearchIcon} from '../icons/search.svg';

const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    box-sizing: border-box;
`;

const Button = styled.button`
    border: none;
    background-color: #f00;
    padding: 10px 15px;
    border-radius: 5px;
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
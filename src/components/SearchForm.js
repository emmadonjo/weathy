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
       border: 1px solid ${({ theme }) => theme.main.background };
       border-radius: 5px 0 0 5px;
       padding: 0 15px;
       background-color: ${({ theme }) => theme.main.background };
       color: ${({ theme }) => theme.main.color };
       box-shadow: 0px 0px 5px #000;
       font-size: 1.2rem;

       &::placeholder{
        color: ${({ theme }) => theme.main.color };
       }
    }

    input:focus{
        border: 1px solid ${({ theme }) => theme.main.background };;
    }
`;

const Button = styled.button`
    border: 1px solid ${({ theme }) => theme.main.background };
    background-color: ${({ theme }) => theme.main.background };
    padding: 10px 15px;
    border-radius: 0 5px 5px 0;
    color: ${({ theme }) => theme.primary.color };
    font-weight: bold;
    font-size: 1.2rem;

    &:hover{
        cursor: pointer;
        background-color: red;
        color: ${({ theme }) => theme.main.background };
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
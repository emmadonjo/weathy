import React, {useState} from 'react';
import SearchForm from '../components/SearchForm';

const Search = props => {

    const [searchTerm, setSearchTerm] = useState('');

    const handleSubmit = () => {
        return;
    };

    return(
        <>
            <h1>Search</h1>
            <SearchForm
                searchTerm = { searchTerm }
                setSearchTerm = { setSearchTerm }
                handleSubmit = { handleSubmit }
            />
        </>
    )
}

export default Search;
import {screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import SearchForm from '../../components/SearchForm.js';
import Init from '../Init';


describe('Search from in DOM', () => {

    test('Search field shows', ()=>{
        Init(SearchForm);

        expect(screen.getByLabelText(/search city/i)).toBeInTheDocument();
    });

    test('Search button shows', ()=>{
        Init(SearchForm);

        expect(screen.getByRole('button',{name: /search/i})).toBeInTheDocument();
    });
});


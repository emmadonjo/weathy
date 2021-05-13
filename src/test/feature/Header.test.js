import {screen, render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router';
import '@testing-library/jest-dom';
import Header from '../../components/Header';


const setUp = () =>{

    return <MemoryRouter>
        
        <Header />
    </MemoryRouter>
}

describe('Test Header', ()=>{

    test('Checks if search page shows', ()=>{

        render(
            setUp()
        );

        const search = screen.getByRole('link', {name: /search/i});
        userEvent.click(search);
        

        expect(screen.getByRole('heading', {name: /search/i})).toBeInTheDocument();
    });

    test('Checks if search locations shows', ()=>{

        render(
            setUp()
        );

        const locations = screen.getByRole('link', {name: /locations/i});
        userEvent.click(locations);
        

        expect(screen.getByRole('heading', {name: /locations/i})).toBeInTheDocument();
    });

    test('Checks if home page shows', ()=>{

        render(
            setUp()
        );

        const home = screen.getByRole('link', {name: /home/i});
        
        userEvent.click(home);
        

        expect(screen.getByRole('heading', {name: /home/i})).toBeInTheDocument();
    });

});
import {screen, render} from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router';
import Nav from '../../components/Nav';

const setUp = () =>{
    return <MemoryRouter>
        <Nav />
    </MemoryRouter>
};

describe('Test Nav', ()=>{
    test('Nav has 3 links0', ()=>{
        render(setUp());
        expect(screen.getAllByRole('link').length).toEqual(3);
    });

    test('Nav has home link', ()=>{
        
        render(setUp());
        expect(screen.getByRole('link', {name: /home/i})).toBeInTheDocument();

    });

    test('Nav has search link', ()=>{
        
        render(setUp());
        expect(screen.getByRole('link', {name: /search/i})).toBeInTheDocument();

    });

    test('Nav has locations link', ()=>{
        
        render(setUp());
        expect(screen.getByRole('link', {name: /locations/i})).toBeInTheDocument();

    });
});
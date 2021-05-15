import {screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import Temperature from '../../components/weather/Temperature';
import Init from '../Init';

describe('Test temp component', ()=>{
    const temp = {
        min: 24, 
        max: 30, 
        temp: 25
    };

    test('Has title', ()=>{
        Init(Temperature , temp);

        expect(screen.getByRole('heading', {name: /temperature/i})).toBeInTheDocument();
    });

    test('Has max temp 30', ()=>{
        Init(Temperature, temp);

        expect(screen.getByText(/max/i)).toBeInTheDocument();
        expect(screen.getByText('30')).toBeInTheDocument()
    });

    test('Has min temp of 24', ()=>{
        Init(Temperature, temp);

        expect(screen.getByText(/min/i)).toBeInTheDocument();
        expect(screen.getByText('24')).toBeInTheDocument();
    });

    test('Has temp of 25', ()=>{
        Init(Temperature, temp);

        expect(screen.getByText('25')).toBeInTheDocument();
    });
});
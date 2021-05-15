import {screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import Today from '../../components/weather/Today';
import Init from '../Init';

describe('Today Component', ()=>{

    test('City shows as Lagos', () => {

        Init(Today, {city: 'Lagos', time: 'May 20, 2021 16:43', weather: 'clouds', temp: '28'});

        expect(screen.getByText(/Lagos/i)).toBeInTheDocument();
    });

    test('Time to show', () =>{

        Init(Today, {city: 'Lagos', time: 'May 20, 2021 16:43', weather: 'clouds', temp: '28'});

        expect(screen.getByRole('time', {name: /May 20, 2021 16:43/i})).toBeInTheDocument();
        
    });

    test('Temperature is 28', ()=>{

        Init(Today, {city: 'Lagos', time: 'May 20, 2021 16:43', weather: 'clouds', temp: '28'});

        expect(screen.getByText('28')).toBeInTheDocument();
    });

    // test('Weather icon', () => {

    //     Init(Today, {weather: 'clouds'});

    //     expect(screen.getByTestId(/weather-icon/i).nodeName).toBe('SVG');
    // });
});
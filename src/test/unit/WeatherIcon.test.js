import {screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import WeatherIcon from '../../components/WeatherIcon';
import Init from '../Init';

describe('Display Weather Icon', () => {

    test('Display rain icon', () => {
        Init(WeatherIcon, 'rain', () => {

            expect(screen.getByTestId(/weather-icon/i)).toBeInTheDocument();

            expect(screen.getByTestId(/weather-icon/i).className.indexOf('bi-cloud-rain-fill')).not.toEqual(-1);
        });
    });
});
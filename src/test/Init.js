import { render } from '@testing-library/react';
import {MemoryRouter} from 'react-router';

// function to initialize components for tests
// Keeps everything Dry
const Init = (Component, props = null) => {
    return render(
        <MemoryRouter>
            <Component  {...props} />
        </MemoryRouter>
    )
};

export default Init;
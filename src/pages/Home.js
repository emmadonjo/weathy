import React from 'react';

const Home = props => {

    return(
        <>
            <h1>Home</h1>
            <p>
                <strong>Key:</strong>
                {process.env.REACT_APP_API_KEY}
            </p>
        </>
    )
}

export default Home;
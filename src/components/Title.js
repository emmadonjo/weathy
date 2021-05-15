import React, {useState} from 'react';
import styled from 'styled-components';

const Heading = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    padding: 10px 30px;

    time{
        text-align: right;
        align-self: center;
        justify-self: flex-end;
        font-size: .9rem;
    }
`;

const Title = props => {
    let [timer, setTimer] = useState(new Date());

    setInterval(()=>{
        setTimer(new Date());
    }, 1000);

    return (
        <Heading>
            <h1>{props.title}</h1>
            <time>
                { 
                `${timer.toDateString()} ${timer.getUTCHours()}:${timer.getUTCMinutes()}:${timer.getUTCSeconds()}`
                
                }
            </time>
        </Heading>
    )
};

export default Title;
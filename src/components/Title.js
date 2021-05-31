import React, {useState} from 'react';
import styled from 'styled-components';
import{ReactComponent as MenuIcon} from '../icons/three-dots-vertical.svg';


const Heading = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px 0;
    border-bottom: 1px solid ${({ theme }) => theme.abstract };
    margin-bottom: 20px;

    time{
        text-align: right;
        align-self: center;
        justify-self: flex-end;
        font-size: .9rem;
        color: ${({ theme }) => theme.abstract };
        opacity: .8;
    }

    button{
        background-color: inherit;
        padding: 15px;
        color: ${({ theme }) => theme.abstract };
        border: none;

        &:hover{
            cursor: pointer;
            opacity: .8;
        }

        @media (min-width: 640px){
            display: none;
        }
    }
`;

const Title = props => {
    let [timer, setTimer] = useState(new Date());

    setInterval(()=>{
        setTimer(new Date());
    }, 1000);

    return (
        <Heading>
            <button>
                <span className='screen-readers'>Menu</span>
                <MenuIcon />
            </button>
            <h2>{props.title}</h2>
            <time>
                { 
                `${timer.toDateString()} ${timer.getUTCHours()}:${timer.getUTCMinutes()}:${timer.getUTCSeconds()}`
                
                }
            </time>
        </Heading>
    )
};

export default Title;
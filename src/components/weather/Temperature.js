import React from 'react';
import styled from 'styled-components';

const Temp = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
`;

const TempInner = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items:center;

    .temp{
        font-size:1.2rem;
        color: #000;
        padding: 15px;
        background-color: ${({ theme }) => theme.abstract };
    }
`;

const MinMax = styled.div`
    display: inherit;
    flex-direction:column;
    justify-content: space-beteen;
    .min-max{
        padding: 10px;
    }
`;

const Temperature = props => {

    let {max, min, temp} = props;

    return(
        <>
            <Temp>
                <h4>Temperature</h4>
                <TempInner>                    
                    <span className='temp'>
                        { temp }<sup>0</sup>C
                    </span>

                    <MinMax>
                        <div className='min-max'>
                            <span className='min-max-text'>
                            <small>Max</small>
                            </span>
                            <br />
                            <span className='temp-max'>
                                { max }<sup>0</sup>c
                            </span>

                        </div>
                        <div className='min-max'>
                            <span className='min-max-text'>
                                <small>Min</small>
                            </span>
                            <br />
                            <span className='temp-min'>
                                { min }<sup>0</sup>c
                            </span>
                        </div>
                    </MinMax>
                </TempInner>
            </Temp>
        </>
    )
};

export default Temperature;
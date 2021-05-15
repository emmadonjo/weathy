import React from 'react';
import styled from 'styled-components';

const Temp = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const TempInner = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const MinMax = styled.div`
    display: inherit;
    flex-direction:column;
    justify-content: space-evenly;
`;

const Temperature = props => {

    let {max, min, temp} = props;

    return(
        <>
            <Temp>
                <h4>Temperature</h4>
                <TempInner>                    
                    <span className='temp'>
                        { temp }
                    </span>

                    <MinMax>
                        <div className='min-max'>
                            <span className='min-max-text'>
                                Max
                            </span>
                            <br />
                            <span className='temp-max'>
                                { max }
                            </span>

                        </div>
                        <div className='min-max'>
                            <span className='min-max-text'>
                                Min
                            </span>
                            <br />
                            <span className='temp-min'>
                                { min }
                            </span>
                        </div>
                    </MinMax>
                </TempInner>
            </Temp>
        </>
    )
};

export default Temperature;
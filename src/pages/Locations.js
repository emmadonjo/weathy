import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Title from '../components/Title';
import Locs from '../components/weather/Locs';
import {ReactComponent as DeleteIcon} from '../icons/x.svg';
import Modal from '../components/Modal';
import { deleteLocation, deleteAll, getStorage } from '../utilities/Storage';

const Container = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    overflow-x: scroll;
`;

const Main = styled.main`
    margin-left: 200px;
    flex-basis: 100%;
    padding: 10px;

    @media (max-width: 640px){
        margin-left: 0;
    }
`;

const TopBar = styled.div`
    padding: 10px 20px;
`;
const Button = styled.button`
    border: none;
    color: #000;
    background-color: ${({ theme }) => theme.abstract };
    border-radius: 5px;
    padding: 5px 15px;
    margin: 5px;

    &:hover{
        opacity: .8;
        cursor: pointer;
    }
`;



const Locations = props => {

    const [locations, setLocations ] = useState({});

    const [showModal, setShowModal] = useState(false);


    useEffect(()=>{

        // get saved locations from localStorage
        let storedLocations = getStorage('_weathy_locations_');

        // if there are stored locations,
        // set locations
        if(storedLocations) setLocations(storedLocations);

        console.log(storedLocations);

    }, [locations]);

    const handleDelete = (id) => {

        // delete location

        deleteLocation(id);

        // hide modal
        setShowModal(false);
    };

    const handleDeleteAll = () => {

        // delete all locations from localStorage

        deleteAll();

        // hide modal
        setShowModal(false);
    };

    return(
        <Container>
            {
                showModal && <Modal
                    multiple = { true }
                    total = { Object.keys(locations).length }
                    handleDelete = { handleDelete }
                    handleDeleteAll = { handleDeleteAll }
                    setShowModal = { setShowModal }
                />
            }
            <Header />
            <Main>
                <Title title='Locations' />

                <TopBar>
                    {Object.keys(locations).length } Saved locations

                    { Object.keys(locations).length > 0 &&
                        <Button title='Delete all locations' type='button' onClick={ ()=>{setShowModal(true)} }>
                            <span className='screen-readers'>Delete all locations</span>
                            <DeleteIcon />
                        </Button>
                    }

                </TopBar>

                {Object.keys(locations).length > 0 && <>
                    { 
                        locations.map(location =>
                            <Locs
                                city = { location.city }
                                id = { location.id }
                                current = { location.data.current }
                                handleDelete = { handleDelete }
                                handleDeleteAll = { handleDeleteAll }
                            />
                        )
                    }
                    
                </>
                }

                {
                    Object.keys(locations).length === 0 && <span>There are no saved locations</span>
                }
            </Main>
            
        </Container>
    )
}

export default Locations;
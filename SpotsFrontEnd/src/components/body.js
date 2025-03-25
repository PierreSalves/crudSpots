import { formHandler } from '../handlers/formHandler.js';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap'
import { ModalAddSpot } from './ModalAddSpot.js';
import { ModalViewSpot } from './ModalViewSpot.js';

import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2'

export const BodyForm = () => {
    const [spots, setSpots] = useState([]);

    const [showModalAddSpot, setShowModalAddSpot] = useState(false);
    const [showModalViewSpot, setShowModalViewSpot] = useState(false);
    const [selectedSpotId, setSelectedSpotId] = useState(null);

    const handleOpenModalAddSpot = () => setShowModalAddSpot(true);
    const handleCloseModalAddSpot = () => setShowModalAddSpot(false);

    const handleOpenModalViewSpot = (spotId) => {
        setShowModalViewSpot(true);
        setSelectedSpotId(spotId);
    }
    const handleCloseModalViewSpot = () => {
        setShowModalViewSpot(false);
        setSelectedSpotId(null);
    }

    const listSpots = () => {
        formHandler('get', 'https://localhost:7181/api/Spots/listSpots', 'searchForm')
            .then((response) => {
                if (typeof response.status != null && response.status === 400) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Algo deu errado!',
                    })
                } else {
                    setSpots(response.spots);               
                }
            });
    }

    useEffect(() => {
        listSpots();      
    }, []);

    return (
        <Container>
            <Form id="searchForm">
                <Row>
                    <Col>
                        <Form.Group controlId="searchInput">
                            <Form.Label>Pesquisa</Form.Label>
                            <Form.Control id="filterInput" type="text" placeholder="Digite o que deseja encontrar" name="filter" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group><Form.Label>&nbsp;</Form.Label></Form.Group>
                        <Button variant="primary" type="button" onClick={async () => {
                            if (document.getElementById('filterInput').value.trim() != '') {
                                await formHandler('get', 'https://localhost:7181/api/Spots/filterSpots', 'searchForm')
                                    .then((response) => {
                                        if (typeof response.status != null && response.status === 400) {
                                            Swal.fire({
                                                icon: 'error',
                                                title: 'Oops...',
                                                text: 'Algo deu errado!',
                                            })
                                        } else {
                                            setSpots(response.spots);
                                            for (let i = 1; i <= response.spots[0].qtdPaginas; i++) {
                                                setPageNumbers(i); 
                                            }
                                        }
                                    });
                            } else {
                                Swal.fire({
                                    icon: 'warning',
                                    title: 'Atenção',
                                    text: 'Digite no campo Pesquisa o que deseja encontrar!',
                                })
                            }
                        }}>
                            <i className="bi bi-search" />&nbsp;
                            Buscar
                        </Button>
                        &nbsp;&nbsp;
                        <Button variant="success" type="button" onClick={handleOpenModalAddSpot}>
                            <i className="bi bi-plus-circle" />&nbsp;
                            Cadastrar um Ponto Turístico
                        </Button>
                    </Col>
                </Row>
            </Form>
            <ModalAddSpot show={showModalAddSpot} onClose={handleCloseModalAddSpot} />
            <br></br>
            <div id='cardsPlace'>
                {
                    spots.map((spot, index) => (
                        <div key={spot.spotid}>
                            <Card className='col-12'>
                                <Card.Body>
                                    <Card.Title>{spot.spotname}</Card.Title>
                                    <Card.Text>
                                        {spot.spotdescription}
                                    </Card.Text>
                                    <Button variant="secondary" size='sm' onClick={() => { handleOpenModalViewSpot(spot.spotid) }}>Ver detalhes</Button>
                                </Card.Body>
                            </Card>
                            <div><br></br></div>
                        </div>
                    ))
                }
            </div>
            <ModalViewSpot show={showModalViewSpot} onClose={handleCloseModalViewSpot} spotid={selectedSpotId} />            
        </Container>
    );
}
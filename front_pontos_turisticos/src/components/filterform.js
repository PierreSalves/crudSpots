import { formHandler } from '../handlers/formHandler.js';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap'
import React, { useState, useEffect } from 'react';
import { SpotCard } from './spotCard.js';
import Swal from 'sweetalert2'

export const FilterForm = () => {
    const [spots, setSpots] = useState([]);

    return (
        <Container>
            <Form id="searchForm">
                <Row>
                    <Col>
                        <Form.Group controlId="searchInput">
                            <Form.Label>Pesquisa</Form.Label>
                            <Form.Control type="text" placeholder="Digite o que deseja encontrar" name="filter" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group><Form.Label>&nbsp;</Form.Label></Form.Group>
                        <Button variant="primary" type="button" onClick={async () => {
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
                                       
                                        // Swal.fire({
                                        //     icon: 'success',
                                        //     title: 'Buscando...',
                                        //     text: 'Aguarde',
                                        //     timer: 2000
                                        // })
                                    }
                                    console.log(response);
                                });
                        }}>
                            <i className="bi bi-search" />&nbsp;
                            Buscar
                        </Button>
                    </Col>
                </Row>
            </Form>
            <br></br>
            <div id='cardsPlace'>
                {
                    spots.map((spot, index) => (
                        <Row>
                            <Card className='col-12' key={index}>
                                <Card.Body>
                                    <Card.Title>{spot.spotname}</Card.Title>
                                    <Card.Text>
                                        {spot.spotdescription}
                                    </Card.Text>
                                    <Button variant="secondary">Ver detalhes</Button>
                                </Card.Body>
                            </Card>
                            <p></p>
                        </Row>
                    ))
                }
            </div>
        </Container>
    );
}
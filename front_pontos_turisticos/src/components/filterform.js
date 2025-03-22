import { formHandler } from '../handlers/formHandler.js';
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import React, { useState, useEffect } from 'react';
import { SpotCard } from './spotCard.js';
import Swal from 'sweetalert2'

export const FilterForm = () => {
    const [spots, setSpots] = useState([]);

    function CreateCard(spot) {
        setSpots([...spots, spot]);
    }

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
                                        response.spots.map((spot, index) => {
                                            CreateCard(spot);
                                        });

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
            <Row id='cardsPlace'>
                {
                    spots.map((spot, index) => (
                        <SpotCard key={index} spot={spot} />
                    ))
                }
            </Row>
        </Container>
    );
}
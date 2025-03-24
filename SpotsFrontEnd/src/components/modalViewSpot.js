import { Modal, Row, Col, Form, Button } from 'react-bootstrap'
import React, { useState, useEffect } from 'react';

import { formHandler } from '../handlers/formHandler.js';

export function ModalViewSpot({ show, onClose, spotid }) {

    const [spotData, setSpotData] = useState('');

    const getSpotData = async () => {
        const formData = await formHandler('get', `https://localhost:7181/api/Spots/getSpot`, 'getSpotData');
        setSpotData(formData.spots[0]);
        console.log(formData.spots[0]);

    }

    useEffect(() => {
        if (show) {
            getSpotData();
        }
    }, [show]);

    return (
        <Modal show={show} onHide={onClose} backdrop="static" keyboard={false} size="lg">
            <Form id='getSpotData' method='get' >
                <Form.Control
                    name='spotid'
                    type='hidden'
                    value={spotid}
                >
                </Form.Control>
            </Form>
            <Form id="ViewSpotForm" method="get">
                <Modal.Header closeButton>
                    <Modal.Title>Visualizar Ponto Turístico</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col>
                            <Form.Group controlId="">
                                <Form.Label>Nome</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Digite o nome do ponto turístico"
                                    name='spotName'
                                    value={spotData.spotname}
                                    maxLength={100}
                                    disabled
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="col-4">
                            <Form.Group controlId="stateInput">
                                <Form.Label>Estado</Form.Label>
                                <Form.Control
                                    disabled
                                    value={spotData.statename}
                                    name="statename"
                                >
                                </Form.Control>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="cityInput">
                                <Form.Label>Cidade</Form.Label>
                                <Form.Control
                                    disabled
                                    name="cityname"
                                    value={spotData.cityname}
                                >
                                </Form.Control>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group controlId="">
                                <Form.Label>Localização</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Digite a referência"
                                    name='spotReference'
                                    value={spotData.spotreference}
                                    maxLength={100}
                                    disabled
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group controlId="">
                                <Form.Label>Descricao</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    type="text"
                                    placeholder="Digite a descrição"
                                    name='spotDescription'
                                    value={spotData.spotdescription}
                                    maxLength={100}
                                    rows={3}
                                    disabled
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={onClose}>
                        <i className="bi bi-x"></i>&nbsp;
                        Fechar
                    </Button>
                </Modal.Footer>
            </Form >
        </Modal >
    );
}
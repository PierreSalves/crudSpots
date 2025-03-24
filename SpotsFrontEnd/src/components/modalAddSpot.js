import { Modal, Row, Col, Form, Button } from 'react-bootstrap'
import React, { useState, useEffect } from 'react';

import { fetchStates, fetchCities } from '../services/apiIBGE.js';

import { formHandler } from '../handlers/formHandler.js';

export function ModalAddSpot({ show, onClose }) {

    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);
    const [selectedState, setSelectedState] = useState('');
    const [selectedCity, setSelectedCity] = useState('');

    const [spotName, setSpotName] = useState('');
    const [spotDescription, setSpotDescription] = useState('');
    const [spotReference, setSpotReference] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        await formHandler('post', 'https://localhost:7181/api/Spots/insertSpot', 'addSpotForm').then(response => {
            onClose();
            window.location.reload();
        });
    }

    useEffect(() => {
        if (show) {
            fetchStates().then(data => {
                setStates(data);
            });
        }
    }, [show]);

    useEffect(() => {
        if (selectedState) {
            fetchCities(selectedState).then(data => {
                setCities(data);
            });
        } else {
            setCities([]);
        }
    }, [selectedState]);

    return (
        <Modal show={show} onHide={onClose} backdrop="static" keyboard={false} size="lg">
            <Form id="addSpotForm" method="post" onSubmit={handleSubmit}>
                <Modal.Header closeButton>
                    <Modal.Title>Adicionar Ponto Turístico</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col>
                            <Form.Group controlId="searchInput">
                                <Form.Control
                                    name='spotId'
                                    type='hidden'
                                    value={0}
                                >
                                </Form.Control>
                                <Form.Label>Nome</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Digite o nome do ponto turístico"
                                    name='spotName'
                                    value={spotName}
                                    onChange={(e) => setSpotName(e.target.value)}
                                    maxLength={100}
                                    required
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="col-4">
                            <Form.Group controlId="stateInput">
                                <Form.Label>Estado</Form.Label>
                                <Form.Select
                                    required
                                    value={selectedState}
                                    name="spotState.stateId"
                                    onChange={(e) => setSelectedState(e.target.value)}
                                >
                                    <option value="">Selecione um estado</option>
                                    {
                                        states.map((state) => (
                                            <option key={state.id} value={state.id}>
                                                {state.nome}
                                            </option>
                                        ))
                                    }
                                </Form.Select>
                                <Form.Control
                                    name='spotState.stateName'
                                    type='hidden'
                                    value={states.find(state => state.id == selectedState)?.nome}
                                >
                                </Form.Control>
                                <Form.Control
                                    name='spotState.stateAbbreviation'
                                    type='hidden'
                                    value={states.find(state => state.id == selectedState)?.sigla}
                                >
                                </Form.Control>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="cityInput">
                                <Form.Label>Cidade</Form.Label>
                                <Form.Select
                                    required
                                    name="spotCity.cityId"
                                    value={selectedCity}
                                    onChange={(e) => setSelectedCity(e.target.value)}
                                    disabled={!selectedState}
                                >

                                    <option value="">Selecione uma cidade</option>
                                    {
                                        cities.map((city) => (
                                            <option key={city.id} value={city.id}>
                                                {city.nome}
                                            </option>
                                        ))
                                    }
                                </Form.Select>
                                <Form.Control
                                    name='spotCity.cityName'
                                    type='hidden'
                                    value={cities.find(city => city.id == selectedCity)?.nome}
                                >
                                </Form.Control>
                                <Form.Control
                                    name='spotCity.cityStateId'
                                    value={selectedState}
                                    type='hidden'
                                >
                                </Form.Control>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group controlId="searchInput">
                                <Form.Label>Localização</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Digite a referência"
                                    name='spotReference'
                                    value={spotReference}
                                    onChange={(e) => setSpotReference(e.target.value)}
                                    maxLength={100}
                                    required
                                />
                            </Form.Group>
                        </Col>
                    </Row>     
                    <Row>
                        <Col>
                            <Form.Group controlId="searchInput">
                                <Form.Label>Descricao</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    type="text"
                                    placeholder="Digite a descrição"
                                    name='spotDescription'
                                    value={spotDescription}
                                    onChange={(e) => setSpotDescription(e.target.value)}
                                    maxLength={100}
                                    required
                                    rows={3}
                                />
                            </Form.Group>
                        </Col>
                    </Row>                                   
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={onClose}>
                        <i className="bi bi-x-square"></i>&nbsp;
                        Cancelar
                    </Button>
                    <Button variant="primary" type='submit' /* onClick={} */>
                        <i className="bi bi-floppy"></i>&nbsp;
                        Salvar
                    </Button>
                </Modal.Footer>
            </Form >
        </Modal >
    );
}
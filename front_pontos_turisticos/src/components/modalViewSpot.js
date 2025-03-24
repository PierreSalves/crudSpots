
import { Modal, Row, Col, Form, Button } from 'react-bootstrap'
import React, { useState, useEffect } from 'react';
export function ModalViewSpot({ show, onClose }) {
    return (
        <Modal show={show} onHide={onClose} backdrop="static" keyboard={false}>
            <Modal.Header closeButton>
                <Modal.Title>Título do Modal VIEW</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Este é o conteúdo do modal.</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>
                    Fechar
                </Button>
                <Button variant="primary" onClick={onClose}>
                    Salvar
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
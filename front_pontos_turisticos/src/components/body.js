import React, { useState, useEffect } from 'react';

import { Container, Row } from 'react-bootstrap'

import { SpotCard } from './spotCard.js';

export const Body = ({ spots = [] }) => {
    return (
        <Container>
            <br></br>
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
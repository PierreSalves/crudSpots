import { Row, Col, Button, Card } from 'react-bootstrap'
export const SpotCard = (spot, index) => {
    <p>
        <Card className='col-12' key={index}>
            <Card.Body>
                <Card.Title>{spot.spotname}</Card.Title>
                <Card.Text>
                    {spot.spotdescription}
                </Card.Text>
                <Button variant="secondary">Ver detalhes</Button>
            </Card.Body>
        </Card>
    </p>
}
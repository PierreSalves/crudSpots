import { Row, Col, Button, Card } from 'react-bootstrap'
export const SpotCard = (spot, index) => {
    <div key={index}>
        <Card className='col-12'>
            <Card.Body>
                <Card.Title>{spot.spotname}</Card.Title>
                <Card.Text>
                    {spot.spotdescription}
                </Card.Text>
                <Button variant="secondary">Ver detalhes</Button>
            </Card.Body>
        </Card>
        <div><br></br></div>
    </div>
}

import { Container, Row, Col, Button, Card, Form ,Table} from 'react-bootstrap'

export const body = () => {
    return (
        <Container>     
            <br></br>       
            <Table striped bordered hover condensed>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Location</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Table content will be dynamically populated based on search */}
                </tbody>
            </Table>
        </Container>
    );
}

import { Container, Row, Col, Form, Button } from 'react-bootstrap'

export const filterform = () => {
    return (
        <Container>
            <Form  onSubmit={handleSearch}>
                <Row>
                    <Col>
                        <Form.Group controlId="searchInput">
                            <Form.Label>Pesquisa</Form.Label>
                            <Form.Control type="text" placeholder="Digite o que deseja encontrar" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group><Form.Label>&nbsp;</Form.Label></Form.Group>
                        <Button variant="primary" type="submit">
                            <i className="bi bi-search" />&nbsp;
                            Buscar
                        </Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    );
}
const handleSearch = (event) => {
    event.preventDefault();
    const { searchInput: { value: search } } = event.currentTarget.elements;
    console.log(search);
}

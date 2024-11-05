import React from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import './BuscarEventos.css';

const eventos = [
    { id: 1, deporte: 'Fútbol', ubicacion: 'Boedo', participantes: '1/10', nivel: 'Intermedio', genero: 'Masculino' },
    { id: 2, deporte: 'Tenis', ubicacion: 'Belgrano', participantes: '2/4', nivel: 'Intermedio', genero: 'Mixto' },
    { id: 3, deporte: 'Pádel', ubicacion: 'Caballito', participantes: '3/4', nivel: 'Intermedio', genero: 'Mixto' },
    { id: 4, deporte: 'Squash', ubicacion: 'Palermo', participantes: '1/2', nivel: 'Principiante', genero: 'Femenino' },
    { id: 5, deporte: 'Running', ubicacion: 'Parque Chacabuco', participantes: '3/12', nivel: 'Intermedio', genero: 'Mixto' },
    { id: 6, deporte: 'Básquet', ubicacion: 'Parque Patricios', participantes: '1/2', nivel: 'Intermedio', genero: 'Masculino' },
];

const SearchEvents = () => {
    return (
        <Container className="buscar-eventos">
            <Row className="align-items-center">
                <Col xs={1}>
                    <Button variant="link" href="/" className="text-white bg-dark">
                        <i className="bi bi-arrow-left"></i>
                    </Button>
                </Col>
                <Col>
                    <h4>BUSCAR EVENTOS</h4>
                </Col>
            </Row>
            <Form className="my-3">
                <Form.Control type="text" placeholder="Buscar" />
            </Form>
            {eventos.map(evento => (
                <Card key={evento.id} className="mb-3">
                    <Card.Body className="d-flex align-items-center">
                        <img src="/path/to/your/event-image.jpg" alt={evento.deporte} className="event-image me-3" />
                        <div className="flex-grow-1">
                            <h5>{evento.deporte}</h5>
                            <p><i className="bi bi-geo-alt-fill"></i> {evento.ubicacion}</p>
                            <div className="d-flex flex-wrap gap-2">
                                <span className="badge bg-light text-dark">{evento.participantes}</span>
                                <span className="badge bg-info text-white">{evento.nivel}</span>
                                <span className="badge bg-info text-white">{evento.genero}</span>
                            </div>
                        </div>
                        <Button variant="link">
                            <i className="bi bi-chevron-right"></i>
                        </Button>
                    </Card.Body>
                </Card>
            ))}
            <footer className="text-center mt-3">
                <p>&copy;2024 <span style={{ color: '#80C855' }}>NEXOSPORT</span>. Todos los derechos reservados.</p>
            </footer>
        </Container>
    );
};

export default SearchEvents;

import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaChevronRight, FaMapMarkerAlt } from 'react-icons/fa';

const OtherEvents = () => {
    const eventos = [
        { id: 1, titulo: 'Evento 1', ubicacion: 'Ubicación 1' },
        { id: 2, titulo: 'Evento 2', ubicacion: 'Ubicación 2' },
        { id: 3, titulo: 'Evento 3', ubicacion: 'Ubicación 3' },
    ];

    return (
        <Container>
            <h2>Otros Eventos</h2>
            <Row>
                {eventos.map(evento => (
                    <Col key={evento.id} md={4}>
                        <Card className="mb-3">
                            <Card.Body>
                                <Card.Title>{evento.titulo}</Card.Title>
                                <Card.Text>
                                    <FaMapMarkerAlt /> {evento.ubicacion}
                                </Card.Text>
                                <Link to={`/otros-eventos/${evento.id}`}>
                                    Ver detalles <FaChevronRight />
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default OtherEvents;

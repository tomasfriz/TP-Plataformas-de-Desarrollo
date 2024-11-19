import React from 'react';
import { Container, Row, Col, Badge, Card, Button } from 'react-bootstrap';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const EventDetails = () => {
    const evento = {
        nombre: 'Fútbol',
        fecha: '05/05/2024',
        hora: '22:00 hs',
        ubicacion: 'Boedo',
        jugadores: '1/10',
        nivel: 'Intermedio',
        genero: 'Masculino',
        imagen: 'banner.jpg',
    };

    return (
        <div>
            <Container className="mt-3">
                <Button variant="link" href="/searchEvents" className="text-white bg-dark">
                    <i className="bi bi-arrow-left"></i>
                </Button>
            </Container>
            <Container className="my-4">
                <Card className="shadow-sm border-0">
                    <div className="position-relative">
                        <img src={evento.imagen} alt="Evento" className="img-fluid w-100" style={{ height: '300px', objectFit: 'cover' }} />
                        <div className="overlay position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>
                        <h1 className="position-absolute top-50 start-50 translate-middle text-white">
                            <Badge bg="info" className="p-2">{evento.nombre}</Badge>
                        </h1>
                        <div className="position-absolute bottom-0 start-0 p-3">
                            <Badge bg="primary" className="me-1">{evento.jugadores}</Badge>
                            <Badge bg="secondary" className="me-1">{evento.genero}</Badge>
                            <Badge bg="info">{evento.nivel}</Badge>
                        </div>
                    </div>
                    <Card.Body>
                        <Row className="mb-3">
                            <Col xs={1}><FaCalendarAlt /></Col>
                            <Col>
                                <h6>{evento.fecha}</h6>
                                <p>{evento.hora}</p>
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col xs={1}><FaMapMarkerAlt /></Col>
                            <Col>
                                <h6>{evento.ubicacion}</h6>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
};

export default EventDetails;

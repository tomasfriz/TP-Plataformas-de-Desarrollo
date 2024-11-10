import React from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaChevronRight, FaMapMarkerAlt } from 'react-icons/fa';

const MyEvents = () => {
    const eventos = [
        { nombre: 'Fútbol', ubicacion: 'Boedo', jugadores: '1/10', nivel: 'Intermedio', genero: 'Masculino' },
        { nombre: 'Tenis', ubicacion: 'Belgrano', jugadores: '2/4', nivel: 'Intermedio', genero: 'Mixto' },
        { nombre: 'Pádel', ubicacion: 'Caballito', jugadores: '3/4', nivel: 'Intermedio', genero: 'Mixto' },
        { nombre: 'Squash', ubicacion: 'Palermo', jugadores: '1/2', nivel: 'Principiante', genero: 'Femenino' },
        { nombre: 'Running', ubicacion: 'Parque Chacabuco', jugadores: '3/12', nivel: 'Intermedio', genero: 'Mixto' },
        { nombre: 'Básquet', ubicacion: 'Parque Patricios', jugadores: '4/10', nivel: 'Avanzado', genero: 'Mixto' },
    ];

    return (
        <Container className="my-4">
            <h2 className="mb-4">MIS EVENTOS</h2>
            {eventos.map((evento, index) => (
                <Card key={index} className="mb-3 shadow-sm">
                    <Card.Body>
                        <Row className="align-items-center">
                            <Col xs={2}>
                                <img src="/banner.jpg" alt="evento" className="img-fluid rounded" />
                            </Col>
                            <Col xs={8}>
                                <h5>{evento.nombre}</h5>
                                <p className="mb-1"><FaMapMarkerAlt /> {evento.ubicacion}</p>
                                <Badge bg="info" className="me-1">{evento.jugadores}</Badge>
                                <Badge bg="primary" className="me-1">{evento.nivel}</Badge>
                                <Badge bg="secondary">{evento.genero}</Badge>
                            </Col>
                            <Col xs={2} className="text-end">
                                <Link to="#">
                                    <FaChevronRight />
                                </Link>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            ))}
        </Container>
    );
};

export default MyEvents;

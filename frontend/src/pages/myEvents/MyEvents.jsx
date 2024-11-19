import React from 'react';
import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaChevronRight, FaMapMarkerAlt } from 'react-icons/fa';

const MyEvents = () => {
    const eventos = [
        { nombre: 'Fútbol', ubicacion: 'Boedo', jugadores: '1/10', nivel: 'Intermedio', genero: 'Masculino', imagen: "/equipo-perfil.jpg" },
        { nombre: 'Tenis', ubicacion: 'Belgrano', jugadores: '2/4', nivel: 'Intermedio', genero: 'Mixto', imagen: "/equipo-perfil.jpg" },
        { nombre: 'Pádel', ubicacion: 'Caballito', jugadores: '3/4', nivel: 'Intermedio', genero: 'Mixto', imagen: "/equipo-perfil.jpg" },
        { nombre: 'Squash', ubicacion: 'Palermo', jugadores: '1/2', nivel: 'Principiante', genero: 'Femenino', imagen: "/equipo-perfil.jpg" },
        { nombre: 'Running', ubicacion: 'Parque Chacabuco', jugadores: '3/12', nivel: 'Intermedio', genero: 'Mixto', imagen: "/equipo-perfil.jpg" },
        { nombre: 'Básquet', ubicacion: 'Parque Patricios', jugadores: '4/10', nivel: 'Avanzado', genero: 'Mixto', imagen: "/equipo-perfil.jpg" },
    ];

    return (
        <div>
            <Container className="mt-3">
                <Button variant="link" href="/" className="text-white bg-dark">
                    <i className="bi bi-arrow-left"></i>
                </Button>
            </Container>
            <Container className="my-4">
                <h2 className="mb-4">MIS EVENTOS</h2>
                {eventos.map((evento, index) => (
                    <Card key={index} className="mb-3 shadow-sm">
                        <Card.Body>
                            <Row className="align-items-center">
                                <Card.Img
                                    variant="left"
                                    src={evento.imagen}
                                    style={{ width: '100px', height: '80px', objectFit: 'cover', marginRight: '15px' }}
                                />
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
        </div>
    );
};

export default MyEvents;

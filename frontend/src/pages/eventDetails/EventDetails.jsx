import React from 'react';
import { Container, Row, Col, Badge, Card, Button } from 'react-bootstrap';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import infoEvent from '../constantes/InfoEvent';

const EventDetails = () => {
    return (
        <div>
            <Container className="mt-3">
                <Button variant="link" href="/" className="text-white bg-dark">
                    <i className="bi bi-arrow-left"></i>
                </Button>
            </Container>
            <Container className="my-4">
                <Card className="shadow-sm border-0">
                    <div className="position-relative">
                        <img src={infoEvent.evento.imagen} alt="Evento" className="img-fluid w-100" style={{ height: '500px', objectFit: 'cover' }} />
                        <div className="overlay position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>
                        <h1 className="position-absolute top-50 start-50 translate-middle text-white">
                            <Badge className="p-2" style={{ backgroundColor: "var(--custom-green) !important", color: "var(--custom-white) !important" }}>{infoEvent.evento.nombre}</Badge>
                        </h1>
                        <div className="position-absolute bottom-0 start-0 p-3">
                            <Badge className="me-1" style={{ backgroundColor: "var(--custom-green) !important", color: "var(--custom-white) !important" }}>{infoEvent.evento.jugadores}</Badge>
                            <Badge className="me-1" style={{ backgroundColor: "var(--custom-green) !important", color: "var(--custom-white) !important" }}>{infoEvent.evento.genero}</Badge>
                            <Badge style={{ backgroundColor: "var(--custom-green) !important", color: "var(--custom-white) !important" }}>{infoEvent.evento.nivel}</Badge>
                        </div>
                    </div>
                    <Card.Body>
                        <Row className="mb-3">
                            <Col xs={1}><FaCalendarAlt /></Col>
                            <Col>
                                <h6>{infoEvent.evento.fecha}</h6>
                                <p>{infoEvent.evento.hora}</p>
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col xs={1}><FaMapMarkerAlt /></Col>
                            <Col>
                                <h6>{infoEvent.evento.ubicacion}</h6>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
};

export default EventDetails;

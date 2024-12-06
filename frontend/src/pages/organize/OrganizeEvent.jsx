import React from 'react';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';

const OrganizeEvent = () => {
    return (
        <div>
            <Container className="mt-3">
                <Button variant="link" href="/" className="text-white bg-dark">
                    <i className="bi bi-arrow-left"></i>
                </Button>
            </Container>

            <Container className="p-4 mb-5 mt-5" style={{ maxWidth: '600px', backgroundColor: 'var(--custom-gray)', borderRadius: '8px' }}>
                <h3 className="text-center mb-5">ORGANIZAR EVENTO</h3>
                <Form>
                    <Row className="mt-3">
                        <Col>
                            <Form.Group controlId="eventSport">
                                <Form.Label>Nombre del deporte:</Form.Label>
                                <Form.Control type="text" placeholder="Ej: Fútbol" />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="eventLocation">
                                <Form.Label>Localidad del evento:</Form.Label>
                                <Form.Control type="text" placeholder="Ej: Boedo" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col>
                            <Form.Group controlId="eventAddress">
                                <Form.Label>Dirección del evento:</Form.Label>
                                <Form.Control type="text" placeholder="Ej: AV. Boedo 47" />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="maxPlayers">
                                <Form.Label>Máximo de jugadores:</Form.Label>
                                <Form.Control as="select" defaultValue="2">
                                    <option>2</option>
                                    <option>4</option>
                                    <option>6</option>
                                    <option>8</option>
                                    <option>10</option>
                                    <option>12</option>
                                    <option>16</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col>
                            <Form.Group controlId="eventDate">
                                <Form.Label>Fecha del evento:</Form.Label>
                                <Form.Control type="date" />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="eventTime">
                                <Form.Label>Hora del evento:</Form.Label>
                                <Form.Control type="time" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col>
                            <Form.Group controlId="skillLevel">
                                <Form.Label>Nivel de habilidad:</Form.Label>
                                <Form.Control as="select" defaultValue="Principiante">
                                    <option>Principiante</option>
                                    <option>Intermedio</option>
                                    <option>Avanzado</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="playerGender">
                                <Form.Label>Género de los jugadores:</Form.Label>
                                <Form.Control as="select" defaultValue="Mixto">
                                    <option>Mixto</option>
                                    <option>Masculino</option>
                                    <option>Femenino</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Button type="submit" className="w-100 mt-4" style={{
                        backgroundColor: 'var(--custom-green)',
                        color: 'var(--custom-white)',
                    }}>
                        Crear Evento
                    </Button>
                </Form>
            </Container>
        </div>
    );
};

export default OrganizeEvent;

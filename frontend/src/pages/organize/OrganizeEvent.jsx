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

            <Container className="p-4" style={{ maxWidth: '600px', backgroundColor: '#f7f7f7', borderRadius: '8px' }}>
                <h3 className="text-center mb-4">ORGANIZAR EVENTO</h3>
                <Form>
                    <Form.Group controlId="eventSport">
                        <Form.Label>Nombre del deporte:</Form.Label>
                        <Form.Control type="text" placeholder="Ej: Fútbol" />
                    </Form.Group>

                    <Form.Group controlId="eventLocation" className="mt-3">
                        <Form.Label>Localidad del evento:</Form.Label>
                        <Form.Control type="text" placeholder="Ej: Boedo" />
                    </Form.Group>

                    <Form.Group controlId="eventAddress" className="mt-3">
                        <Form.Label>Dirección del evento:</Form.Label>
                        <Form.Control type="text" placeholder="Ej: AV. Boedo 47" />
                    </Form.Group>

                    <Row className="mt-3">
                        <Col>
                            <Form.Group controlId="eventDate">
                                <Form.Label>Fecha del evento:</Form.Label>
                                <Form.Control type="date" />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="eventRegistrationDeadline">
                                <Form.Label>Fecha límite de inscripción del evento:</Form.Label>
                                <Form.Control type="date" />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Form.Group controlId="eventTime" className="mt-3">
                        <Form.Label>Hora del evento:</Form.Label>
                        <Form.Control type="time" />
                    </Form.Group>

                    <Form.Group controlId="maxPlayers" className="mt-3">
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

                    <Form.Group controlId="skillLevel" className="mt-3">
                        <Form.Label>Nivel de habilidad:</Form.Label>
                        <Form.Control as="select" defaultValue="Principiante">
                            <option>Principiante</option>
                            <option>Intermedio</option>
                            <option>Avanzado</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="playerGender" className="mt-3">
                        <Form.Label>Género de los jugadores:</Form.Label>
                        <Form.Control as="select" defaultValue="Mixto">
                            <option>Mixto</option>
                            <option>Masculino</option>
                            <option>Femenino</option>
                        </Form.Control>
                    </Form.Group>

                    <Button variant="primary" type="submit" className="w-100 mt-4">
                        Crear Evento
                    </Button>
                </Form>
            </Container>

            <footer className="bg-dark text-center text-white py-3 mt-4">
                <Container>
                    <small>&copy;2024 NEXOSPORT. Todos los derechos reservados.</small>
                </Container>
            </footer>
        </div>
    );
};

export default OrganizeEvent;

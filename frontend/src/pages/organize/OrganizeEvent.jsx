import React, { useContext, useState }  from 'react';
import { Container, Form, Row, Col, Button, Alert } from 'react-bootstrap';
import { createEvent } from '../api.js';

const OrganizeEvent = () => {
    const storedMail = sessionStorage.getItem('userMail');
    const [showSuccess, setShowSuccess] = useState(false);
    const [formData, setFormData] = useState({
        organizerEmail: storedMail,
        eventSport: '',
        eventLocation: '',
        eventAddress: '',
        maxPlayers: '2',
        eventDate: '',
        eventRegistrationDeadline: '',
        eventTime: '',
        skillLevel: 'Principiante',
        playerGender: 'Mixto',
        participants: [storedMail]
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
    };


    const handleFormSubmit = async (e) => {
        e.preventDefault();
    
        console.log('Formulario enviado:', formData);
    
        try {
            const response = await createEvent(formData);
    
            // Si la respuesta es exitosa, mostramos el mensaje de éxito
            setShowSuccess(true);
    
            // Limpiamos el formulario después de crear el evento
            setFormData({
                organizerEmail: storedMail,
                eventSport: '',
                eventLocation: '',
                eventAddress: '',
                maxPlayers: '2',
                eventDate: '',
                eventRegistrationDeadline: '',
                eventTime: '',
                skillLevel: 'Principiante',
                playerGender: 'Mixto',
                participants: [storedMail]
            });
    
            // Ocultamos el mensaje de éxito después de 3 segundos
            setTimeout(() => setShowSuccess(false), 3000);
    
        } catch (error) {
            // Si ocurre un error, lo mostramos en consola o puedes manejarlo de otra forma
            console.error('Error al crear el evento:', error);
        }
    };

    return (
        <div>
            <Container className="mt-3">
                <Button variant="link" href="/" className="text-white bg-dark">
                    <i className="bi bi-arrow-left"></i>
                </Button>
            </Container>

            <Container className="p-4 mb-5 mt-5" style={{ maxWidth: '600px', backgroundColor: 'var(--custom-gray)', borderRadius: '8px' }}>
                <h3 className="text-center mb-5">ORGANIZAR EVENTO</h3>
                {showSuccess && (
                    <Alert variant="success" onClose={() => setShowSuccess(false)} dismissible>
                        ¡El evento deportivo se ha creado con éxito!
                    </Alert>
                )}

                <Form onSubmit={handleFormSubmit}>
                    <Row className="mt-3">
                        <Col>
                            <Form.Group controlId="eventSport">
                                <Form.Label>Nombre del deporte:</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Ej: Fútbol"
                                    value={formData.eventSport}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="eventLocation">
                                <Form.Label>Localidad del evento:</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Ej: Boedo"
                                    value={formData.eventLocation}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col>
                            <Form.Group controlId="eventAddress">
                                <Form.Label>Dirección del evento:</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Ej: AV. Boedo 47"
                                    value={formData.eventAddress}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="maxPlayers">
                                <Form.Label>Máximo de jugadores:</Form.Label>
                                <Form.Control
                                    as="select"
                                    value={formData.maxPlayers}
                                    onChange={handleChange}
                                    required
                                >
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
                                <Form.Control
                                    type="date"
                                    value={formData.eventDate}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="eventTime">
                                <Form.Label>Hora del evento:</Form.Label>
                                <Form.Control
                                    type="time"
                                    value={formData.eventTime}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col>
                            <Form.Group controlId="skillLevel">
                                <Form.Label>Nivel de habilidad:</Form.Label>
                                <Form.Control
                                    as="select"
                                    value={formData.skillLevel}
                                    onChange={handleChange}
                                    required
                                >
                                    <option>Principiante</option>
                                    <option>Intermedio</option>
                                    <option>Avanzado</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="playerGender">
                                <Form.Label>Género de los jugadores:</Form.Label>
                                <Form.Control
                                    as="select"
                                    value={formData.playerGender}
                                    onChange={handleChange}
                                    required
                                >
                                    <option>Mixto</option>
                                    <option>Masculino</option>
                                    <option>Femenino</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Button
                        type="submit"
                        className="w-100 mt-4"
                        style={{
                            backgroundColor: 'var(--custom-green)',
                            color: 'var(--custom-white)',
                        }}
                    >Crear Evento</Button>
                </Form>
            </Container>
        </div>
    );
};

export default OrganizeEvent;

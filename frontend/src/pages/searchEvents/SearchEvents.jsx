import React, { useState } from 'react';
import { Card, ListGroup, Container, Form, Badge, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import infoEvent from '../constantes/InfoEvent';

const SearchEvents = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredEventos = infoEvent.eventosData.filter((evento) =>
        evento.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
        evento.ubicacion.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleEventoClick = (id) => {
        navigate(`/eventDetails/${id}`);
    };

    return (
        <div>
            <Container className="mt-3">
                <Button variant="link" href="/" className="text-white bg-dark">
                    <i className="bi bi-arrow-left"></i>
                </Button>
            </Container>
            <Container>
                <h2 className="my-4">Buscar Eventos</h2>
                <Form.Control
                    type="text"
                    placeholder="Buscar"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="mb-4"
                />
                <ListGroup variant="flush">
                    {filteredEventos.map((evento) => (
                        <ListGroup.Item
                            key={evento.id}
                            action
                            onClick={() => handleEventoClick(evento.id)}
                            className="d-flex align-items-center mb-3"
                        >
                            <Card.Img
                                variant="left"
                                src={evento.imagen}
                                style={{ width: '150px', height: '80px', objectFit: 'cover', marginRight: '15px' }}
                            />
                            <div className="flex-grow-1">
                                <h5>{evento.titulo}</h5>
                                <p className="text-muted mb-1"><i className="bi bi-geo-alt"></i> {evento.ubicacion}</p>
                                <div>
                                    <Badge bg="primary" className="me-1">{evento.cupos}</Badge>
                                    <Badge bg="info" className="me-1">{evento.nivel}</Badge>
                                    <Badge bg="secondary">{evento.genero}</Badge>
                                </div>
                            </div>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </Container>
        </div>
    );
};

export default SearchEvents;

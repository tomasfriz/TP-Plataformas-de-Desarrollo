import React, { useState } from 'react';
import { Card, ListGroup, Container, Form, Badge } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const eventosData = [
    { id: 1, titulo: "Fútbol", ubicacion: "Boedo", imagen: "/images/futbol.jpg", nivel: "Intermedio", genero: "Masculino", cupos: "1/10" },
    { id: 2, titulo: "Tenis", ubicacion: "Belgrano", imagen: "/images/tenis.jpg", nivel: "Intermedio", genero: "Mixto", cupos: "2/4" },
    { id: 3, titulo: "Pádel", ubicacion: "Caballito", imagen: "/images/padel.jpg", nivel: "Intermedio", genero: "Mixto", cupos: "3/4" },
    { id: 4, titulo: "Squash", ubicacion: "Palermo", imagen: "/images/squash.jpg", nivel: "Principiante", genero: "Femenino", cupos: "1/2" },
    { id: 5, titulo: "Running", ubicacion: "Parque Chacabuco", imagen: "/images/running.jpg", nivel: "Intermedio", genero: "Mixto", cupos: "3/12" },
    { id: 6, titulo: "Básquet", ubicacion: "Parque Patricios", imagen: "/images/basquet.jpg", nivel: "Intermedio", genero: "Mixto", cupos: "3/10" },
];

const SearchEvents = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredEventos = eventosData.filter((evento) =>
        evento.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
        evento.ubicacion.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleEventoClick = (id) => {
        navigate(`/eventos/${id}`);
    };

    return (
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
                            style={{ width: '80px', height: '80px', objectFit: 'cover', marginRight: '15px' }}
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
    );
};

export default SearchEvents;

import React, { useState } from "react";
import { Container, Form, ListGroup, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import InfoEvent from "../constantes/InfoEvent";
import EventItem from "../../Components/eventItem/EventItem";

const SearchEvents = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredEventos = InfoEvent.eventos.filter(
        (evento) =>
            evento.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
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
                        <EventItem key={evento.id} evento={evento} onClick={() => handleEventoClick(evento.id)} />
                    ))}
                </ListGroup>
            </Container>
        </div>
    );
};

export default SearchEvents;

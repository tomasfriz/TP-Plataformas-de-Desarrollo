import React, { useState, useEffect } from "react";
import { Container, Form, ListGroup, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import InfoEvent from "../constantes/InfoEvent";
import EventItem from "../../Components/eventItem/EventItem";
import { getEvents} from '../api.js';

const SearchEvents = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const [myEvents, setEvents] = useState([]);

    const searcheventlists = async () => {
        try {
            // Obtenemos los eventos de la API
            const response = await getEvents();
            // Actualizamos el estado con los eventos obtenidos
            setEvents(response);
        } catch (error) {
            console.error('Error al buscar mis eventos:', error);
        }
    };

    useEffect(() => {
        searcheventlists();
        }, []);

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
                    {myEvents.map((evento, index) => (
                        <EventItem key={index} evento={evento} onClick={() => handleEventoClick(evento.id)} />
                    ))}
                </ListGroup>
            </Container>
        </div>
    );
};

export default SearchEvents;

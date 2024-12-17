import React, { useState, useEffect } from "react";
import { Container, Button, ListGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import InfoEvent from "../constantes/InfoEvent";
import EventItem from "../../Components/eventItem/EventItem";
import {myEvents} from '../api.js';

const MyEvents = () => {
    const navigate = useNavigate();

    const handleNoticiaClick = (id) => {
        navigate(`/eventDetails/${id}`);
    };
    const storedMail = sessionStorage.getItem('userMail');
    const [myEvents, setMyEvents] = useState([]);

    
    const searchMyevents = async () => {
        try {
            // Obtenemos los eventos de la API
            const response = await myEvents(storedMail);
            // Actualizamos el estado con los eventos obtenidos
            setMyEvents(response);
        } catch (error) {
            console.error('Error al buscar mis eventos:', error);
        }
    };

    useEffect(() => {
        searchMyevents();
    }, []);

    return (
        <div>
            <Container className="mt-3">
                <Button variant="link" href="/" className="text-white bg-dark">
                    <i className="bi bi-arrow-left"></i>
                </Button>
            </Container>
            <Container>
                <h2 className="my-4">Mis eventos</h2>
                <ListGroup variant="flush">
                    {myEvents.map((evento, index) => (
                        <EventItem key={index} evento={evento} onClick={() => handleNoticiaClick(evento.id)} />
                    ))}
                </ListGroup>
            </Container>
        </div>
    );
};

export default MyEvents;

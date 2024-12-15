import React from "react";
import { Container, Button, ListGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import InfoEvent from "../constantes/InfoEvent";
import EventItem from "../../Components/eventItem/EventItem";

const MyEvents = () => {
    const navigate = useNavigate();

    const handleNoticiaClick = (id) => {
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
                <h2 className="my-4">Mis eventos</h2>
                <ListGroup variant="flush">
                    {InfoEvent.misEventos.map((evento, index) => (
                        <EventItem key={index} evento={evento} onClick={() => handleNoticiaClick(index + 1)} />
                    ))}
                </ListGroup>
            </Container>
        </div>
    );
};

export default MyEvents;

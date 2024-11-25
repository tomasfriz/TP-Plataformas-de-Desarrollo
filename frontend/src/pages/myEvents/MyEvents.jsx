import React from 'react';
import { Container, Card, Button, ListGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import infoEvent from '../constantes/InfoEvent';


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
                    {infoEvent.misEventos.map((evento) => (
                        <ListGroup.Item
                            key={evento.id}
                            action
                            onClick={() => handleNoticiaClick(evento.id)}
                            className="d-flex align-items-center mb-3"
                        >
                            <Card.Img
                                variant="left"
                                src={evento.imagen}
                                style={{ width: '150px', height: '80px', objectFit: 'cover', marginRight: '15px' }}
                            />
                            <div className="flex-grow-1">
                                <h5>{evento.titulo}</h5>
                                <p className="text-muted">{evento.ubicacion}</p>
                            </div>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </Container>
        </div>
    );
};

export default MyEvents;

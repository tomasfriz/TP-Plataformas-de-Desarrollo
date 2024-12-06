import React from 'react';
import { Container, Card, ListGroup, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import infoEvent from '../constantes/InfoEvent';

const OtherEvents = () => {
    const navigate = useNavigate();

    const handleEventClick = (url) => {
        if (url.startsWith('http') || url.startsWith('https')) {
            window.open(url, '_blank');
        } else {
            navigate(url);
        }
    };

    return (
        <div>
            <Container className="mt-3">
                <Button variant="link" href="/" className="text-white bg-dark">
                    <i className="bi bi-arrow-left"></i>
                </Button>
            </Container>
            <Container>
                <h2 className="my-4">Otros eventos</h2>
                <ListGroup variant="flush">
                    {infoEvent.otrosEventos.map((evento) => (
                        <ListGroup.Item
                            key={evento.id}
                            action
                            onClick={() => handleEventClick(evento.url)}
                            className="d-flex align-items-center mb-3" style={{
                                borderRadius: '10px',
                                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                            }}>
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

export default OtherEvents;

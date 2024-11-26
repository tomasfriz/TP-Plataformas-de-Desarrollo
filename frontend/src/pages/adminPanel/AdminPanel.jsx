import React from 'react';
import { Container, ListGroup, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import infoEvent from '../constantes/InfoEvent';
import infoLogin from '../constantes/InfoLogin';

const AdminPanel = () => {
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
                <h2 className="my-4">Eventos</h2>
                <ListGroup variant="flush">
                    {infoEvent.otrosEventos.map((evento) => (
                        <ListGroup.Item
                            key={evento.id}
                            action
                            onClick={() => handleEventClick(evento.url)}
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
            <Container>
                <h2 className="my-4">Usuarios</h2>
                <ListGroup variant="flush">
                    {infoLogin.usuarios.map((user) => (
                        <ListGroup.Item>
                            <div className="flex-grow-1">
                                <h5>{user.usuario} - {user.rol}</h5>
                                <p className="text-muted">{user.ubicacion}</p>
                            </div>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </Container>
        </div>
    );
};


export default AdminPanel;

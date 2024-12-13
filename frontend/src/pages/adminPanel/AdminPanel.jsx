import React from 'react';
import { Container, ListGroup, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import infoEvent from '../constantes/InfoEvent';
import infoLogin from '../constantes/InfoLogin';
import EventItem from "../../Components/eventItem/EventItem";

const AdminPanel = () => {
    const navigate = useNavigate();

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
                <h2 className="my-5">Panel de administrador</h2>
                <h3 className="my-4">Eventos</h3>
                <ListGroup variant="flush">
                    {infoEvent.eventos.map((evento) => (
                        <EventItem key={evento.id} evento={evento} onClick={() => handleEventoClick(evento.id)} />
                    ))}
                </ListGroup>
            </Container>
            <Container>
                <h3 className="my-4">Usuarios</h3>
                <ListGroup variant="flush">
                    {infoLogin.usuarios.map((user) => (
                        <ListGroup.Item className="d-flex align-items-center mb-3" style={{
                            borderRadius: '10px',
                            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                        }}>
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

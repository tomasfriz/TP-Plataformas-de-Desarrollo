import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { Container, ListGroup, Card, Button } from 'react-bootstrap';
import AppContext from '../../context/AppContext';
import infoEvent from '../constantes/InfoEvent';
import EventItem from '../../Components/eventItem/EventItem';

const AdminPanel = () => {
    const { user } = useContext(AppContext);

    if (!user || user.rolId !== 1) {
        return <Navigate to="/" replace />;
    }

    const handleEventoClick = (id) => {
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
                    {user && user.usuarios && user.usuarios.map((usuario) => (
                        <ListGroup.Item
                            key={usuario.id}
                            className="d-flex align-items-center mb-3"
                            style={{
                                borderRadius: '10px',
                                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                            }}
                        >
                            <div className="flex-grow-1">
                                <h5>{usuario.usuario} - {usuario.rol}</h5>
                                <p className="text-muted">{usuario.ubicacion || 'Ubicación no disponible'}</p>
                            </div>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </Container>
        </div>
    );
};

export default AdminPanel;

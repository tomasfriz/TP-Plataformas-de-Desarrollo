import React from 'react';
import { Card, ListGroup, Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const lugaresData = [
    { id: 1, nombre: "Centros deportivos", imagen: "/polideportivos.jpg" },
    { id: 2, nombre: "Skate y longboard", imagen: "/skate.jpg" },
    { id: 3, nombre: "Bicicleta", imagen: "/bici.jpg" },
    { id: 4, nombre: "Rollers", imagen: "/rollers.jpg" },
    { id: 5, nombre: "Running", imagen: "/correr.jpg" },
];

const Places = () => {
    const navigate = useNavigate();

    const handleLugarClick = (id) => {
        navigate(`/lugares/${id}`);
    };

    return (
        <div>
            <Container className="mt-3">
                <Button variant="link" href="/" className="text-white bg-dark">
                    <i className="bi bi-arrow-left"></i>
                </Button>
            </Container>
            <Container>
                <h2 className="my-4">Lugares</h2>
                <ListGroup variant="flush">
                    {lugaresData.map((lugar) => (
                        <ListGroup.Item
                            key={lugar.id}
                            action
                            onClick={() => handleLugarClick(lugar.id)}
                            className="d-flex align-items-center mb-3"
                        >
                            <Card.Img
                                variant="left"
                                src={lugar.imagen}
                                style={{ width: '100px', height: '80px', objectFit: 'cover', marginRight: '15px' }}
                            />
                            <div className="flex-grow-1">
                                <h5>{lugar.nombre}</h5>
                            </div>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </Container>
        </div>

    );
};

export default Places;

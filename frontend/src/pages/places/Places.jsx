import React from 'react';
import { Card, ListGroup, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const lugaresData = [
    { id: 1, nombre: "Centros deportivos", imagen: "/images/centros-deportivos.jpg" },
    { id: 2, nombre: "Skate y longboard", imagen: "/images/skate-longboard.jpg" },
    { id: 3, nombre: "Bicicleta", imagen: "/images/bicicleta.jpg" },
    { id: 4, nombre: "Rollers", imagen: "/images/rollers.jpg" },
    { id: 5, nombre: "Running", imagen: "/images/running.jpg" },
];

const Places = () => {
    const navigate = useNavigate();

    const handleLugarClick = (id) => {
        navigate(`/lugares/${id}`);
    };

    return (
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
    );
};

export default Places;

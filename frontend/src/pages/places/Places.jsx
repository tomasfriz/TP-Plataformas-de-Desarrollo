import React from 'react';
import { Card, ListGroup, Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const lugaresData = [
    { id: 1, nombre: "Centros deportivos", imagen: "/polideportivos.jpg", url: "https://buenosaires.gob.ar/jefaturadegabinete/deportes/espacios-deportivos" },
    { id: 2, nombre: "Skate y longboard", imagen: "/skate.jpg", url: "https://www.tangol.com/blog/esp/9-lugares-para-andar-en-skate-y-longboard-en-buenos-aires_nota_1031" },
    { id: 3, nombre: "Bicicleta", imagen: "/bici.jpg", url: "https://turismo.buenosaires.gob.ar/es/article/buenos-aires-en-bici" },
    { id: 4, nombre: "Rollers", imagen: "/rollers.jpg", url: "https://www.tangol.com/blog/esp/8-lugares-lindos-para-patinar-en-rollers-en-buenos-aires_nota_1029" },
    { id: 5, nombre: "Running", imagen: "/correr.jpg", url: "https://soymaratonista.com/donde-correr-en-buenos-aires/" },
];

const Places = () => {
    const navigate = useNavigate();

    const handleLugarClick = (url) => {
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
                <h2 className="my-4">Lugares</h2>
                <ListGroup variant="flush">
                    {lugaresData.map((lugar) => (
                        <ListGroup.Item
                            key={lugar.id}
                            action
                            onClick={() => handleLugarClick(lugar.url)}
                            className="d-flex align-items-center mb-3"
                        >
                            <Card.Img
                                variant="left"
                                src={lugar.imagen}
                                style={{ width: '150px', height: '80px', objectFit: 'cover', marginRight: '15px' }}
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

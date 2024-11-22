import React from 'react';
import { Container, Card, ListGroup, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const eventos = [
    { id: 1, titulo: 'Yoga', ubicacion: 'Varios lugares', imagen: "/yoga.jpg", url: "https://buenosaires.gob.ar/noticias/clases-de-yoga-gratuitas-en-la-ciudad" },
    { id: 2, titulo: 'Zumba', ubicacion: 'Barracas', imagen: "/zumba.jpg", url: "https://buenosaires.gob.ar/cultura/usina-del-arte/clase-de-zumba" },
    { id: 3, titulo: 'Bicicleta', ubicacion: 'Retiro', imagen: "/bicicleta.jpg", url: "https://www.biketours.com.ar/" },
    { id: 4, titulo: 'Patin', ubicacion: 'Palermo', imagen: "/patin.jpg", url: "https://www.meetup.com/es/buenos-aires-roller-skating-meetup/" },
];

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
                    {eventos.map((evento) => (
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
        </div>
    );
};

export default OtherEvents;

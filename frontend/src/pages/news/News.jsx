import React from 'react';
import { Card, ListGroup, Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const noticiasData = [
    { id: 1, titulo: "Maratón 42K", ubicacion: "Saavedra", imagen: "/42k.jpg" },
    { id: 2, titulo: "Maratón 21K", ubicacion: "Saavedra", imagen: "/21k.jpg" },
    { id: 3, titulo: "Maratón 30K", ubicacion: "Saavedra", imagen: "/30k.jpg" },
];

const News = () => {
    const navigate = useNavigate();

    const handleNoticiaClick = (id) => {
        navigate(`/noticias/${id}`);
    };

    return (
        <div>
            <Container className="mt-3">
                <Button variant="link" href="/" className="text-white bg-dark">
                    <i className="bi bi-arrow-left"></i>
                </Button>
            </Container>
            <Container>
                <h2 className="my-4">Noticias</h2>
                <ListGroup variant="flush">
                    {noticiasData.map((noticia) => (
                        <ListGroup.Item
                            key={noticia.id}
                            action
                            onClick={() => handleNoticiaClick(noticia.id)}
                            className="d-flex align-items-center mb-3"
                        >
                            <Card.Img
                                variant="left"
                                src={noticia.imagen}
                                style={{ width: '100px', height: '80px', objectFit: 'cover', marginRight: '15px' }}
                            />
                            <div className="flex-grow-1">
                                <h5>{noticia.titulo}</h5>
                                <p className="text-muted">{noticia.ubicacion}</p>
                            </div>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </Container>
        </div>
    );
};

export default News;

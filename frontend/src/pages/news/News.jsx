import React from 'react';
import { Card, ListGroup, Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const noticias = [
    { id: 1, titulo: "Maratón 42K", imagen: "/42k.jpg", url: "https://maratondebuenosaires.com/maraton-de-buenos-aires-42k.html" },
    { id: 2, titulo: "Maratón 21K", imagen: "/21k.jpg", url: "https://maratondebuenosaires.com/medio-maraton-de-buenos-aires-21k.html" },
    { id: 3, titulo: "Maratón 30K", imagen: "/30k.jpg", url: "https://raceseries.newbalance.com.ar/2024/30kbuenosaires/" },
];

const News = () => {
    const navigate = useNavigate();

    const handleNoticiaClick = (url) => {
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
                <h2 className="my-4">Noticias</h2>
                <ListGroup variant="flush">
                    {noticias.map((noticia) => (
                        <ListGroup.Item
                            key={noticia.id}
                            action
                            onClick={() => handleNoticiaClick(noticia.url)}
                            className="d-flex align-items-center mb-3"
                        >
                            <Card.Img
                                variant="left"
                                src={noticia.imagen}
                                style={{ width: '100px', height: '80px', objectFit: 'cover', marginRight: '15px' }}
                            />
                            <div className="flex-grow-1">
                                <h5>{noticia.titulo}</h5>
                            </div>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </Container>
        </div>
    );
};

export default News;

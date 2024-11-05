import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaChevronRight, FaMapMarkerAlt } from 'react-icons/fa';

const OtherEvents = () => {
    const eventos = [
        { id: 1, nombre: 'Yoga', ubicacion: 'Varios lugares', imagen: '/banner.jpg' },
        { id: 2, nombre: 'Zumba', ubicacion: 'Barracas', imagen: '/banner.jpg' },
        { id: 3, nombre: 'Bicicleta', ubicacion: 'Retiro', imagen: '/banner.jpg' },
        { id: 4, nombre: 'Patin', ubicacion: 'Parque Patricios', imagen: '/banner.jpg' },
    ];

    return (
        <Container className="my-4">
            <h3>OTROS EVENTOS</h3>
            {eventos.map(evento => (
                <Card key={evento.id} className="mb-3 shadow-sm border-0">
                    <Row className="g-0 align-items-center">
                        <Col md={2}>
                            <Card.Img src={evento.imagen} alt={evento.nombre} className="img-fluid rounded-start" />
                        </Col>
                        <Col md={9}>
                            <Card.Body>
                                <Card.Title>{evento.nombre}</Card.Title>
                                <Card.Text>
                                    <FaMapMarkerAlt className="me-2" />
                                    {evento.ubicacion}
                                </Card.Text>
                            </Card.Body>
                        </Col>
                        <Col md={1} className="text-center">
                            <Link to={`/detalle-evento/${evento.id}`}>
                                <FaChevronRight size={24} />
                            </Link>
                        </Col>
                    </Row>
                </Card>
            ))}
            <footer className="text-center mt-4 bg-primary text-white p-2">
                ©2024 <strong>NEXOSPORT</strong>. Todos los derechos reservados.
            </footer>
        </Container>
    );
};

export default OtherEvents;

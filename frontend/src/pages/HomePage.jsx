import React from 'react';
import { Container, Row, Col, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import mainImage from '/banner.jpg';

const HomePage = () => {
    return (
        <div>
            <div
                style={{
                    position: 'relative',
                    backgroundImage: `url(${mainImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '400px',
                    width: '100%',
                }}
            >

                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                    }}
                >
                    <h1 className="text-white text-center p-5 pb-3">
                        ¡Bienvenido/a a un nuevo espacio para el encuentro con la actividad física!
                    </h1>
                    <p className="text-white text-center">¿Qué quieres hacer hoy?</p>
                </div>
            </div>

            <Container fluid className="bg-dark text-white py-4">
                <Container>
                    <p className="text-center mb-0">
                        Crea eventos sobre la disciplina que más te guste y elige el lugar, la fecha y la hora.
                        <br />
                        Busca eventos que sean de tu agrado.
                        <br />
                        Infórmate de los lugares donde se realizan actividades físicas y no te pierdas de nada en nuestro noticiero.
                        <br />
                        ¡Anímate a ser el gestor de tus actividades físicas!
                    </p>
                </Container>
            </Container>

            <Container className="text-center my-5">
                <Row>
                    <Col>
                        <Link to="/organize">
                            <Button variant="info" className="btn m-2 p-4">ORGANIZAR</Button>
                        </Link>
                    </Col>
                    <Col>
                        <Link to="/searchEvents">
                            <Button variant="success" className="btn m-2 p-4">BUSCAR EVENTO</Button>
                        </Link>
                    </Col>
                    <Col>
                        <Link to="/myEvents">
                            <Button variant="info" className="btn m-2 p-4">MIS EVENTOS</Button>
                        </Link>
                    </Col>
                    <Col>
                        <Link to="/otherEvents">
                            <Button variant="success" className="btn m-2 p-4">OTROS EVENTOS</Button>
                        </Link>
                    </Col>
                    <Col>
                        <Link to="/places">
                            <Button variant="info" className="btn m-2 p-4">LUGARES</Button>
                        </Link>
                    </Col>
                    <Col>
                        <Link to="/news">
                            <Button variant="success" className="btn m-2 p-4">NOTICIAS</Button>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default HomePage;

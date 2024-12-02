import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import mainImage from '/banner.jpg';
import CardButton from '../Components/cardButton/CardButton';

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
                        ¡Bienvenido a un nuevo espacio para el encuentro con la actividad física!
                    </h1>
                    <h2 className="text-white text-center pt-5">¿Qué quieres hacer hoy?</h2>
                </div>
            </div>

            <Container fluid className="bg-dark text-white py-4">
                <Container>
                    <p className="text-center mb-0 p-3">
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
                        <CardButton texto="Buscar Evento" link="/searchEvents">
                            <span className="bi bi-search fs-2"></span>
                        </CardButton>
                    </Col>
                    <Col>
                        <CardButton texto="Otros Eventos" link="/otherEvents">
                            <span className="bi bi-question-square fs-3"></span>
                        </CardButton>
                    </Col>
                    <Col>
                        <CardButton texto="Lugares" link="/places">
                            <span className="bi bi-geo-alt fs-2"></span>
                        </CardButton>
                    </Col>
                    <Col>
                        <CardButton texto="Noticias" link="/news">
                            <span className="bi bi-newspaper fs-2"></span>
                        </CardButton>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default HomePage;

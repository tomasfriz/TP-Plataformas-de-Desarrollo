import React from 'react';
import './error404.css';
import error404 from '/error404.png';
import { Container, Button } from 'react-bootstrap';

const Error404 = () => {
    return (
        <>
            <Container className="mt-3">
                <Button variant="link" href="/" className="text-white bg-dark">
                    <i className="bi bi-arrow-left"></i>
                </Button>
            </Container>
            <Container className="error-container flex flex-col items-center justify-center">
                <h1 className="titulo">404</h1>
                <p className="texto">Lo siento, la página que estás buscando no se pudo encontrar.</p>
                <img className="imagen" src={error404} alt="Error 404" />
            </Container>
        </>
    );
};

export default Error404
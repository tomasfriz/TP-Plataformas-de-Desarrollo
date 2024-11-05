import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import './AuthSelection.css';

const AuthSelection = () => {
    return (
        <div className="auth-selection d-flex justify-content-center align-items-center vh-100">
            <Container className="text-center">
                <Row className="justify-content-center">
                    <Col md={4}>
                        <div className="logo">
                            <img src="/logo.png" alt="NEXOSPORT Logo" />
                        </div>
                        <h1 className="mb-4">NEXOSPORT</h1>
                        <Button variant="success" className="mb-3" style={{ width: '100%' }}>
                            Iniciar sesión
                        </Button>
                        <p>¿No tenés una cuenta? <a href="/register" className="text-success">¡Registrate!</a></p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AuthSelection;

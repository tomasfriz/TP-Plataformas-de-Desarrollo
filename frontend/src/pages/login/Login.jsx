import React from 'react';
import { Button, Container, Row, Col, Form } from 'react-bootstrap';
import './Login.css';

const Login = () => {
    return (
        <div className="login-page d-flex justify-content-center align-items-center vh-100">
            <Container>
                <Row>
                    <Col xs={12} className="d-flex justify-content-between align-items-center">
                        <Button variant="link" href="/authSelection" className="text-white bg-dark">
                            <i className="bi bi-arrow-left"></i>
                        </Button>
                        <img src="/logo.png" alt="NEXOSPORT Logo" className="logo" />
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col md={6}>
                        <h2 className="mb-4 text-center">¡Bienvenido!</h2>
                        <p className="text-center">Ingrese su nombre de usuario y su contraseña para empezar</p>
                        <Form>
                            <Form.Group className="mb-3" controlId="formUsername">
                                <Form.Label>Nombre de usuario:</Form.Label>
                                <Form.Control type="text" placeholder="Ingrese su nombre de usuario aquí..." />
                            </Form.Group>
                            <Form.Group className="mb-4" controlId="formPassword">
                                <Form.Label>Contraseña:</Form.Label>
                                <Form.Control type="password" placeholder="Ingrese su contraseña aquí..." />
                            </Form.Group>
                            <Button variant="success" type="submit" style={{ width: '100%' }}>
                                Iniciar sesión
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Login;

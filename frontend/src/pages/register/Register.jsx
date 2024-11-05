import React from 'react';
import { Button, Container, Row, Col, Form } from 'react-bootstrap';
import './Register.css';

const Register = () => {
    return (
        <div className="register-page d-flex justify-content-center align-items-center vh-100">
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
                        <h2 className="mb-4 text-center">¡Regístrate!</h2>
                        <p className="text-center">Regístrese con nombre de usuario y contraseña para empezar</p>
                        <Form>
                            <Form.Group className="mb-3" controlId="formUsername">
                                <Form.Label>Nombre de usuario:</Form.Label>
                                <Form.Control type="text" placeholder="..." />
                            </Form.Group>
                            <Form.Group className="mb-4" controlId="formPassword">
                                <Form.Label>Contraseña:</Form.Label>
                                <Form.Control type="password" placeholder="..." />
                            </Form.Group>
                            <Button variant="success" type="submit" style={{ width: '100%' }}>
                                Registrarse
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Register;

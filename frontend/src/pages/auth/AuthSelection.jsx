import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './AuthSelection.css';

const AuthSelection = () => {
    return (
        <Container className="auth-selection text-center">
            <img src="/logo.png" alt="NEXOSPORT Logo" className="logo mb-3" />
            <h1 className="brand-name">NEXOSPORT</h1>

            <Link to="/login">
                <Button variant="success" className="mb-4 auth-button">
                    <i className="bi bi-envelope-fill"></i> Iniciar sesión
                </Button>
            </Link>

            <p>¿No tenés una cuenta?</p>
            <Link to="/register" className="register-link">
                ¡Regístrate!
            </Link>
        </Container>
    );
};

export default AuthSelection;

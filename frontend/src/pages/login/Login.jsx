import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        if (username === '' || password === '') {
            setError('Por favor ingrese ambos campos.');
        } else {
            setError('');
            alert('¡Inicio de sesión exitoso!');
        }
    };

    return (
        <div>
            <Container className="mt-3">
                <Button variant="link" href="/auth" className="text-white bg-dark">
                    <i className="bi bi-arrow-left"></i>
                </Button>
            </Container>
            <Container className="mt-5">
                <h2>¡Bienvenido!</h2>
                <p>Ingrese su nombre de usuario y su contraseña para empezar</p>
                <Form onSubmit={handleLogin}>
                    <Form.Group controlId="formUsername" className="mb-3">
                        <Form.Label>Nombre de usuario:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Ingrese su nombre de usuario aquí..."
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="formPassword" className="mb-3">
                        <Form.Label>Contraseña:</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Ingrese su contraseña aquí..."
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>

                    {error && <p style={{ color: 'red' }}>{error}</p>}

                    <Button variant="success" type="submit">
                        Iniciar sesión
                    </Button>
                </Form>
            </Container>
        </div>
    );
};

export default Login;

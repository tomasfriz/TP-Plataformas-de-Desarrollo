import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import infoLogin from '../constantes/InfoLogin';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        // Verificamos si el usuario y contraseña son correctos
        if (username === '' || password === '') {
            setError("Por favor ingrese ambos campos");
        } else if (username === infoLogin.admin.usuario && password === infoLogin.admin.clave) {
            // Si es admin, lo enviamos a la pantalla de bienvenida como user
            navigate('/', { user: credentials.admin });
        } else if (username === infoLogin.user.usuario && password === infoLogin.user.clave) {
            // Si es usuario, lo enviamos a la pantalla de bienvenida como user
            navigate('/', { user: credentials.user });
        } else if (username === infoLogin.user2.usuario && password === infoLogin.user2.clave) {
            // Si es usuario2, lo enviamos a la pantalla de bienvenida como user2
            navigate('/', { user: credentials.user2 });
        }else {
            // Si las credenciales son incorrectas
            setError("Usuario o contraseña incorrectos");
        }
    };

    const handleRegister = () => {
        navigation.navigate('/register');
    };

    return (
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

                <Button variant="link" onClick={handleRegister} style={{ marginLeft: '10px' }}>
                    Registrar
                </Button>
            </Form>
        </Container>
    );
};

export default Login;

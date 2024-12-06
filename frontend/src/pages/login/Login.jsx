import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import infoLogin from '../constantes/InfoLogin';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    async function saveData(rol) {
        try {
            sessionStorage.setItem('rol', rol);
        } catch (error) {
            console.error('Error, ', error);
        }
    }

    const handleRegister = () => {
        navigate('/register');
    };

    const handleLogin = (e) => {
        e.preventDefault();
        if (username === '' || password === '') {
            setError("Por favor ingrese ambos campos");
        } else {
            let login = false;
            for (let i = 0; i < infoLogin.usuarios.length; i++) {
                const usuario = infoLogin.usuarios[i];
                if (username === usuario.usuario && password === usuario.clave) {
                    login = true;
                    saveData(usuario.rolId);
                    if (usuario.rolId === 1) {
                        navigate('/adminPanel');
                    } else {
                        navigate('/');
                    }
                    break;
                }
            }
            if (!login) {
                setError("Mail o contraseña incorrectos");
            }
        }
    };

    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "75vh",
        }}>
            <Container className="mt-5" style={{
                width: "100%",
                maxWidth: "100vh",
                padding: "20px",
                backgroundColor: 'var(--custom-gray)',
                borderRadius: "10px",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            }}>
                <h2>¡Bienvenido!</h2>
                <p>Ingrese su nombre de usuario y su contraseña para empezar</p>
                <Form onSubmit={handleLogin}>
                    <Form.Group controlId="formUsername" className="mb-3">
                        <Form.Label>Mail:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Ingrese su mail aquí..."
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

                    <Button type="submit" style={{
                        backgroundColor: 'var(--custom-green)',
                        color: 'var(--custom-white)',
                    }}>
                        Iniciar sesión
                    </Button>
                    <Button onClick={handleRegister} style={{
                        marginLeft: '10px',
                        backgroundColor: 'var(--custom-green)',
                        color: 'var(--custom-white)',
                    }}>
                        Registrar
                    </Button>
                </Form>
            </Container>
        </div>
    );
};

export default Login;

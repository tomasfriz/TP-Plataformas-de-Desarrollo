import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import infoLogin from '../constantes/InfoLogin';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleRegister = () => {
        navigate('/register');
    };

    const handleLogin = async (e) => {
        e.preventDefault();

        if (username === '' || password === '') {
            setError("Por favor ingrese ambos campos");
        } else {
            try {
                const userCredential = await signInWithEmailAndPassword(auth, email, password);        
                const user = userCredential.user;                
                if (email === infoLogin.mailAdmin) {
                    navigate('/adminPanel');
                } else {
                    navigate('/');
                }
            } catch (err) {
                setError("Error al iniciar sesión. Verifique sus credenciales.");
            }
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
                        <Form.Label>Correo electrónico:</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Ingrese su correo electrónico aquí..."
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
        </div>
    );
};

export default Login;
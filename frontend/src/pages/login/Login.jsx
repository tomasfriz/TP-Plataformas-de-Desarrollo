import React, { useContext, useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import infoLogin from '../constantes/InfoLogin';
import { AppContext } from '../../context/AppProvider';

const Login = () => {
    const { login } = useContext(AppContext);
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
                const userCredential = await signInWithEmailAndPassword(auth, username, password);
                const user = userCredential.user;
                console.log(user);
                const reloadUserInfo = user.reloadUserInfo;
                console.log(reloadUserInfo);
                const customAttributes = reloadUserInfo.customAttributes;
                console.log(customAttributes);
                const rol = customAttributes.rol;
                console.log(rol);
                sessionStorage.setItem('userMail', username);
                if (rol === 1) {
                    navigate('/adminPanel');
                } else {
                    navigate('/');
                }
            } catch (err) {
                console.log(err);
                setError("Error al iniciar sesión. Verifique sus credenciales.");
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
                <p>Ingrese su mail y su contraseña para empezar</p>
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

                    <Button onClick={handleLogin} type="submit" style={{
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
                        Registrarse
                    </Button>
                </Form>
            </Container>
        </div>
    );
};

export default Login;
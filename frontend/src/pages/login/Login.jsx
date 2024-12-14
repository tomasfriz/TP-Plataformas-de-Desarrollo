import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../context/AppProvider';
import InfoLogin from '../constantes/InfoLogin';
import { Form, Button, Container } from 'react-bootstrap';

const Login = () => {
    const { login } = useContext(AppContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault(); // Evitar el comportamiento por defecto del formulario.

        // Buscar usuario en la lista hardcodeada de InfoLogin.
        const user = InfoLogin.usuarios.find(
            (user) => user.usuario === username && user.clave === password
        );

        if (user) {
            // Usuario encontrado, pasa datos al contexto y redirige.
            login(user); // Puedes ajustar esta función para que maneje los datos del usuario.
            navigate('/'); // Cambia a la ruta deseada tras iniciar sesión.
        } else {
            // Credenciales incorrectas.
            setError('Credenciales incorrectas.');
        }
    };

    const handleRegister = () => {
        navigate('/register'); // Navegar a la pantalla de registro.
    };

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "75vh",
            }}
        >
            <Container
                className="mt-5"
                style={{
                    width: "100%",
                    maxWidth: "100vh",
                    padding: "20px",
                    backgroundColor: 'var(--custom-gray)',
                    borderRadius: "10px",
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                }}
            >
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
                        Registrarse
                    </Button>
                </Form>
            </Container>
        </div>
    );
};

export default Login;

import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../context/AppProvider';

const Login = () => {
    const { login } = useContext(AppContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        const users = JSON.parse(sessionStorage.getItem('users')) || [];
        const success = login(username, password, users, navigate);
        if (!success) {
            alert('Credenciales incorrectas');
        }
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Usuario"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Iniciar sesión</button>
        </div>
    );
};

export default Login;

import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        const storedUser = sessionStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const login = (username, password, users) => {
        const foundUser = users.find(
            (u) => u.usuario === username && u.clave === password
        );
        if (foundUser) {
            setUser(foundUser);
            sessionStorage.setItem('user', JSON.stringify(foundUser));
            if (foundUser.rol === 'admin') {
                navigate('/adminPanel');
            } else {
                navigate('/');
            }
            return true;
        }
        return false;
    };

    const logout = () => {
        setUser(null);
        sessionStorage.removeItem('user');
        navigate('/login');
    };

    const register = (newUser) => {
        let users = JSON.parse(sessionStorage.getItem('users')) || [];
        users.push(newUser);
        sessionStorage.setItem('users', JSON.stringify(users));
    };

    return (
        <AppContext.Provider value={{ user, login, logout, register }}>
            {children}
        </AppContext.Provider>
    );
};

export default AppContext;

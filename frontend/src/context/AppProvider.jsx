import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    const login = (userData) => {
        setUser(userData);
        navigate('/');
    };

    const logout = () => {
        setUser(null);
        navigate('/login');
    };

    return (
        <AppContext.Provider value={{ user, login, logout }}>
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;

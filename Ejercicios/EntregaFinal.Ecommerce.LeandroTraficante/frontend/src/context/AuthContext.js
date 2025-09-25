import React, { useContext, useEffect, createContext, useState } from "react";

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
    const [isUserLogged, setUserLogged] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setUserLogged(true);
        }
        setLoading(false);
    }, []);

    const login = (token) => {
        if (token) {
            localStorage.setItem('token', token);
            setUserLogged(true);
        }
    }

    const logout = () => {
        setUserLogged(false);
        localStorage.removeItem('token');
    }

    const value = {
        isUserLogged,
        loading,
        login,
        logout
    };

    return React.createElement(
        AuthContext.Provider,
        { value },
        children
    );
}
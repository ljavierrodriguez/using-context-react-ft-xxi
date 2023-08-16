import React from 'react'
import { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';

const Home = () => {
    const { isAuthenticated, user } = useContext(AuthContext);

    return (
        <div>
            { isAuthenticated ? (
                <h1>Bievenido a mi fiesta, {user?.email}</h1>
            )
            :(
                <h1>Por favor inicia sesión!!!</h1>
            )}
        </div>
    )
}

export default Home
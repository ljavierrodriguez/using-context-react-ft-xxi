import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react'

export const UserContext = createContext();

const UserProvider = ({ children }) => {

    const [users, setUsers] = useState(null)

    useEffect(() => {
        getUsers();
    }, [])

    const getUsers = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(result => setUsers(result));
    }

    return (
        <UserContext.Provider value={{ users }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider
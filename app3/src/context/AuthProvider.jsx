import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'


export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState(null) // { email: '', edad: '', genero: '', avatar: '' }

  const login = () => {
    setIsAuthenticated(true);
    setUser({ email: 'lrodriguez@gmail.com' })
  }
  const logout = () => {
    setIsAuthenticated(false);
    setUser(null)
  }


  return (
    <AuthContext.Provider value={{ isAuthenticated, user,  login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
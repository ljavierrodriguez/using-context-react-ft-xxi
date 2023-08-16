import React from 'react'
import { ThemeProvider } from './context/ThemeProvider'
import AuthProvider from './context/AuthProvider'
import Home from './pages/Home'
import UserProvider from './context/UserContext'

const App = () => {
    return (
        <ThemeProvider>
            <AuthProvider>
                <UserProvider>
                    <Home />
                </UserProvider>
            </AuthProvider>
        </ThemeProvider>
    )
}

export default App
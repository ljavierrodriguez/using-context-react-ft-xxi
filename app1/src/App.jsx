import React from 'react'
import { ThemeProvider } from './context/ThemeProvider'
import Home from './pages/Home'

const App = () => {
    return (
        <ThemeProvider>
            <Home />
        </ThemeProvider>
    )
}

export default App
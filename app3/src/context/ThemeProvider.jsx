import React, { createContext, useState } from 'react'
import { useEffect } from 'react';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState('light');

    const toogleTheme = () => {
        setTheme(prevTheme => {
            localStorage.setItem('theme', prevTheme === 'light' ? 'dark' : 'light')
            return prevTheme === 'light' ? 'dark' : 'light'
        });
    }

    useEffect(() => {
        if(localStorage.getItem('theme')){
            setTheme(localStorage.getItem('theme'))
        }
    }, [])

    return (
        <ThemeContext.Provider value={{ theme, toogleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export { ThemeProvider, ThemeContext }

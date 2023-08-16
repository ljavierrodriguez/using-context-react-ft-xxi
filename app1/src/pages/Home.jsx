import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeProvider'

const Home = () => {

    const { theme, toogleTheme } = useContext(ThemeContext);

    return (
        <div className={theme}>
            <h1>Home</h1>
            <button
                className={'btn ' + (theme === 'light' ?
                    'btn-dark'
                    :
                    'btn-primary'
                )}
                onClick={toogleTheme}
            >
                {theme === 'light' ? (
                    <i class="bi bi-moon-fill"></i>
                ) : (
                    <i class="bi bi-sun-fill"></i>
                )}
            </button>
        </div>
    )
}

export default Home
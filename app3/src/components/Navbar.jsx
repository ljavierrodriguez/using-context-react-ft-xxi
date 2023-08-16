import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'
import { ThemeContext } from '../context/ThemeProvider';

const Navbar = () => {

    const { isAuthenticated, login, logout } = useContext(AuthContext);
    const { theme, toogleTheme } = useContext(ThemeContext);

    return (
        <ul className="nav justify-content-center py-2">
            <li className="nav-item">
                <a className="nav-link" href="#">Active</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item px-1">
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
            </li>
            {
                isAuthenticated ? (
                    <li className="nav-item px-1">
                        <button className="btn btn-primary" onClick={logout}>Logout</button>
                    </li>
                ) : (
                    <li className="nav-item px-1">
                        <button className="btn btn-primary" onClick={login}>Login</button>
                    </li>
                )
            }
        </ul>
    )
}

export default Navbar
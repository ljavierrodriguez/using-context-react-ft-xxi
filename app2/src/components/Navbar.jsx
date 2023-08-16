import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'

const Navbar = () => {

    const { isAuthenticated, login, logout } = useContext(AuthContext);

    return (
        <ul className="nav justify-content-center">
            <li className="nav-item">
                <a className="nav-link" href="#">Active</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
            </li>
            {
                isAuthenticated ? (
                    <li className="nav-item">
                        <button className="btn btn-primary" onClick={logout}>Logout</button>
                    </li>
                ):(
                    <li className="nav-item">
                        <button className="btn btn-primary" onClick={login}>Login</button>
                    </li>
                )
            }
        </ul>
    )
}

export default Navbar
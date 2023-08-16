import React, { useContext } from 'react'
import Navbar from '../components/Navbar'
import { ThemeContext } from '../context/ThemeProvider'
import { UserContext } from '../context/UserContext'
import UsersTable from '../components/UsersTable'

const Home = () => {
    const { theme } = useContext(ThemeContext)
    const { users } = useContext(UserContext)
    return (
        <div className={theme}>
            <Navbar />
            <div>Home</div>
            <UsersTable users={users} theme={theme} />
        </div>
    )
}

export default Home
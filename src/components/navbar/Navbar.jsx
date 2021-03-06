import React from 'react'
import { Link } from 'react-router-dom'
import "./navbar.scss"

function Navbar({ user }) {

    const logout = () => {
        window.open("http://localhost:5000/auth/logout", "_self")
    }

    return (
        <div className="navbar">
            <span className="logo" >
                <Link to="/" className="link">React Single Signin</Link>
            </span>
            {user ? <ul className="list">
                <li className="listItem">
                    <img src={user.photos[0].value} alt="avatar" className='avatar' />
                </li>
                <li className="listItem">{user.displayName}</li>
                <li className="listItem" onClick={logout}>Logout</li>
            </ul> : <ul className="list">
                <li className="listItem"><Link to="/login" className="link">Login</Link></li>
            </ul>}

        </div>
    )
}

export default Navbar
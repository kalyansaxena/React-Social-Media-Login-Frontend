import React from 'react'
import "./login.scss"

function Login() {

    const google = () => {
        window.open('http://localhost:5000/auth/google', '_self')
    }

    const facebook = () => {
        window.open('http://localhost:5000/auth/facebook', '_self')
    }

    const github = () => {
        window.open('http://localhost:5000/auth/github', '_self')
    }

    return (
        <div className="login">
            <h2 className="loginTitle">Welcome to React Single Signin </h2>
            <div className="wrapper">
                <div className="left">
                    <div className="loginButton" onClick={google}>
                        <img src="https://img.icons8.com/color/30/000000/google-logo.png" alt="google" />
                        Continue with Google
                    </div>
                    <div className="loginButton" onClick={facebook}>
                        <img src="https://img.icons8.com/fluency/30/000000/facebook-new.png" alt="facebook" />
                        Continue with Facebook
                    </div>
                    <div className="loginButton" onClick={github}>
                        <img src="https://img.icons8.com/glyph-neue/30/000000/github.png" alt="github" />
                        Continue with Github
                    </div>
                </div>
                <div className="right">
                    <input type="text" placeholder="username" />
                    <input type="password" placeholder="password" />
                    <button type="submit" className="submit">Login</button>
                </div>
            </div>
        </div>
    )
}

export default Login
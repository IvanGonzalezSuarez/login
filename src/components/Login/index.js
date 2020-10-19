import React, { useState, useEffect } from "react";
import { useLocation } from "wouter"
import useUser from 'hooks/useUser'/*
import { useEffect } from "react";*/

import Logo from 'logo.png'
import './Login.css'

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [, navigate] = useLocation()
    const { login, isLogged } = useUser()

    useEffect(() => {
        if (isLogged) {
            navigate('/temporizador')
            // onLogin && onLogin()
        }
    }, [isLogged, navigate])

    const handleSubmit = (e) => {
        e.preventDefault();
        login({ username, password })
    };

    return (
        <>
            <form className='form' onSubmit={handleSubmit}>
                <figure className="App-logo">
                    <img alt="Logo" src={Logo} />
                </figure>
                <label>
                    <input
                        placeholder="Email"
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
                    />
                </label>

                <label>
                    <input
                        type="password"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                </label>

                <button className='btn'>Log in</button>
            </form>
        </>
    );
}
